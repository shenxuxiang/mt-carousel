import React, { PureComponent } from 'react';
import img1 from './static/images/11.jpg';
import img2 from './static/images/12.jpg';
import img3 from './static/images/13.jpg';
import img4 from './static/images/14.jpg';
import img5 from './static/images/15.jpg';
import Carousel from './Carousel';
import './app.css';

const source = [img1, img2, img3, img4, img5];
export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      key: 0,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize, false);
  }

  handleResize = () => {
    this.setState(prevState => ({key: prevState.key + 1}));
    console.log(this.state.key);
  }

  render() {
    return (
      <div className="container">
        <Carousel
          key={this.state.key}
          interval={3000}
          autoPlay={true}
          indicatorColor="red"
          indicatorSize="small"
          indicatorClass="indicator"
        >
          {
            source.map((item, key) =>
              <a
                className="carousel-item-a"
                key={key}
              >
                <img
                  src={item}
                  alt="轮播图"
                  className="carousel-item-a-img"
                />
              </a>
            )
          }
        </Carousel>
        <div>请使用移动设备查看demo演示</div>
      </div>
    );
  }
}
