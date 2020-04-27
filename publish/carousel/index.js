import React, { memo, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useReducer, reduce } from './useReducer';
import { Tween, requestAnimationFrame, cancelAnimationFrame } from './utils';
import './index.less';

// 滑动持续时间界限设定
const DURATION = 200;
// 触发 change 的滑动距离限定
const SCALE = 0.5;
// 滑动的速度
const SPEED = 10;

const initState = {
  indicator: 1,
};

function carousel(props) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [state, dispatch] = useReducer(reduce, initState);
  const { children, autoPlay, interval, indicatorColor, indicatorSize, indicatorClass } = props;
  const content = useMemo(() => {
    const { length } = children;
    const firstChild = children[0];
    const lastChild = children[length - 1];
    return (
      <div
        className="mt-carousel-wrapper-x"
        style={{ width: `${length > 1 ? (length + 2) * 100 : 100}%` }}
        ref={contentRef}
      >
        {
          length > 1 && 
            React.cloneElement(lastChild, {
              className: lastChild.props.className ? 
                lastChild.props.className + ' mt-carousel-wrapper-x-item' :
                'mt-carousel-wrapper-x-item',
            })
        }
        {
          children.map(child =>
            React.cloneElement(child, {
              className: child.props.className ? 
                child.props.className + ' mt-carousel-wrapper-x-item' :
                'mt-carousel-wrapper-x-item',
            })
          )
        }
        {
          length > 1 && 
            React.cloneElement(firstChild, {
              className: firstChild.props.className ? 
                firstChild.props.className + ' mt-carousel-wrapper-x-item' :
                'mt-carousel-wrapper-x-item',
            })
        }
      </div>
    );
  }, [children]);

  useEffect(() => {
    const wrapperWidth = wrapperRef.current.clientWidth;
    let offsetX = -wrapperWidth;
    if (children.length <= 1) return;
    contentRef.current.style.transform = `translateX(${offsetX}px)`;
    contentRef.current.style.webkitTransform = `translateX(${offsetX}px)`;
    // 当前指示器指针
    let indicator = 1;
    // 开始触碰时计时
    let startT = null;
    // 开始触碰时的 X 轴的位置
    let startX = null;
    // 开始触碰时的 Y 轴的位置
    let startY = null;
    // 滑动时的 X 轴偏移量
    let slideX = null;
    // 滑动时的 Y 轴偏移量
    let slideY = null;
    // 动画贞当前的偏移位置
    let translateX = null;
    // 定时器贞的ID
    let requestAnimationID = null;
    // 定时播放器ID
    let playAnimationID = null;
    // 滑动的状态 running-正在滑动；horizontal-水平横向滑动；vertical-垂直滑动
    let slideStatus = 'running';
    // 设定的触发极限距离
    const limitDist = wrapperWidth * SCALE;

    const slideTo = (index, cb) => {
      dispatch(() => ({ indicator: index }));
      const pos = -index * wrapperWidth;
      let start = 0;
      const offset = pos - offsetX;
      const duration = Math.abs(offset / SPEED);
      function loop() {
        start++;
        translateX = Tween.easeOut(start, offsetX, offset, duration);

        if (start + 1 >= duration) translateX = pos;
        contentRef.current.style.transform = `translateX(${translateX}px)`;
        contentRef.current.style.webkitTransform = `translateX(${translateX}px)`;
        if (start < duration) {
          requestAnimationID = requestAnimationFrame(loop);
        } else {
          cancelAnimationFrame(requestAnimationID);
          requestAnimationID = null;
          offsetX = pos;
          cb && cb();
        }
      }
      loop();
    };

    // 自动定时器播放
    const autoPlayAnimation = () => {
      playAnimationID = setTimeout(() => {
        indicator++;
        if (indicator > children.length) {
          indicator = 1;
          offsetX = -(indicator - 1) * wrapperWidth;
          contentRef.current.style.transform = `translateX(${offsetX}px)`;
          contentRef.current.style.webkitTransform = `translateX(${offsetX}px)`;
        }
        slideTo(indicator);
        autoPlayAnimation();
      }, interval);
    };
    autoPlay && autoPlayAnimation();

    const handleTouchStart = (event) => {
      // 清除定时播放器
      if (playAnimationID) {
        clearTimeout(playAnimationID);
        playAnimationID = null;
      }
      if (requestAnimationID) {
        cancelAnimationFrame(requestAnimationID);
        requestAnimationID = null;
        offsetX = translateX;
      }

      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      startT = Date.now();
      slideStatus = 'running';
    };

    const handleTouchMove = (event) => {
      slideX = event.changedTouches[0].clientX - startX;
      slideY = event.changedTouches[0].clientY - startY;

      if (Math.abs(slideX) >= Math.abs(slideY) && slideStatus === 'running') {
        // 当横向滑动时，阻止默认行为和冒泡
        event.preventDefault();
        slideStatus = 'horizontal';
      } else if (Math.abs(slideX) < Math.abs(slideY) && slideStatus === 'running') {
        slideStatus = 'vertical';
      }
      if (slideStatus === 'vertical') return;
      contentRef.current.style.transform = `translateX(${offsetX + slideX}px)`;
      contentRef.current.style.webkitTransform = `translateX(${offsetX + slideX}px)`;
    };

    const handleTouchEnd = () => {
      if (slideStatus === 'vertical') {
        slideTo(indicator);
        return;
      }

      const duration = Date.now() - startT;
      if (duration <= DURATION) {
        if (slideX > 20) {
          indicator--;
        } else if (slideX < -20) {
          indicator++;
        }
      } else if (slideX > 0 && slideX >= limitDist) {
        indicator--;
      } else if (slideX < 0 && -slideX >= limitDist) {
        indicator++;
      }

      if (indicator < 1) {
        indicator = children.length;
        offsetX = -(indicator + 1) * wrapperWidth + slideX;
        contentRef.current.style.transform = `translateX(${offsetX}px)`;
        contentRef.current.style.webkitTransform = `translateX(${offsetX}px)`;
      } else if (indicator > children.length) {
        indicator = 1;
        offsetX = -(indicator - 1) * wrapperWidth + slideX;
        contentRef.current.style.transform = `translateX(${offsetX}px)`;
        contentRef.current.style.webkitTransform = `translateX(${offsetX}px)`;
      } else {
        offsetX += slideX;
      }
      translateX = offsetX;
      slideTo(indicator);
      autoPlay && autoPlayAnimation();
    };

    wrapperRef.current.addEventListener('touchstart', handleTouchStart, false);
    wrapperRef.current.addEventListener('touchmove', handleTouchMove, false);
    wrapperRef.current.addEventListener('touchend', handleTouchEnd, false);
    return () => {
      wrapperRef.current.removeEventListener('touchstart', handleTouchStart, false);
      wrapperRef.current.removeEventListener('touchmove', handleTouchMove, false);
      wrapperRef.current.removeEventListener('touchend', handleTouchEnd, false);
      if (playAnimationID) {
        clearTimeout(playAnimationID);
        playAnimationID = null;
      }
      if (requestAnimationID) {
        cancelAnimationFrame(requestAnimationID);
        requestAnimationID = null;
      }
    };
  }, [children.length]);

  return (
    <div className="mt-carousel-wrapper" ref={wrapperRef}>
      {content}
      <ul
        className={`mt-carousel-indicator middle${indicatorClass ? ' ' + indicatorClass : ''}`}
        style={{ color: indicatorColor }}
      >
        {
          children.length > 1 && children.map((item, index) =>
            <li
              key={`children-${index}`}
              className={`mt-carousel-indicator-item ${indicatorSize}${index === state.indicator - 1 ? ' active' : ''}`}
            />
          )
        }
      </ul>
    </div>
  );
}

carousel.propTypes = {
  children: PropTypes.array,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  indicatorSize: PropTypes.string,
  indicatorColor: PropTypes.string,
  indicatorClass: PropTypes.string,
};

carousel.defaultProps = {
  children: [],
  autoPlay: true,
  interval: 3000,
  indicatorSize: 'middle',
  indicatorColor: '#f80',
  indicatorClass: '',
};

export default memo(carousel);
