# mt-carousel

A light-weight React mt-carousel component with extremely easy API（只适用于移动端项目）. [Online Demo](https://shenxuxiang.github.io/mt-carousel/), welcome [code review](https://github.com/shenxuxiang/mt-carousel)
## Installation

```sh
npm install mt-carousel --save
```

## Usage

```js

import img1 from './static/images/11.jpg';
import img2 from './static/images/12.jpg';
import img3 from './static/images/13.jpg';
import img4 from './static/images/14.jpg';
import img5 from './static/images/15.jpg';
import Carousel from 'mt-carousel';

const source = [img1, img2, img3, img4, img5];
export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <Carousel
          interval={5000}
          autoPlay={false}
          indicatorSize="middle"
          indicatorColor="#f80"
        >
          {
            source.map((item, key) =>
              <a
                href="javascript:;"
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
      </div>
    );
  }
}
```


## props

| param            | detail                                         | type     | default         |
| ---------------- | -----------------------------------------------| -------- | -------         |
| children         | collection of child nodes,                     | array    | []              |
| interval         | carousel time                                  | number   | 3000            |
| autoPlay         | whether to loop                                | bool     | true            |
| indicatorSize    | indicator style size                           | string   | 'middle'        |
| indicatorColor   | indicator style color                          | string   | '#f80'          |
