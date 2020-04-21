import React, { Component } from "react";
import Slider from "react-slick";
import bar1 from "../images/bar-1.jpg";
import bar2 from "../images/bar-2.jpg";
import bench1 from "../images/bench-1.jpg";
import bench2 from "../images/bench-2.jpg";
import balcony from "../images/balcony.jpg";
import floor1 from "../images/floor-1.jpg";
import kitchen from "../images/kitchen.jpg";
import space1 from "../images/space-1.jpg";
import tables1 from "../images/tables-1.jpg";
import tables2 from "../images/tables-2.jpg";
import tables3 from "../images/tables-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img src={bar1} />
          </div>
          <div>
            <img src={bar2} />
          </div>
          <div>
            <img src={bench1} />
          </div>
          <div>
            <img src={bench2} />
          </div>
          <div>
            <img src={balcony} />
          </div>
          <div>
            <img src={floor1} />
          </div>
          <div>
            <img src={kitchen} />
          </div>
          <div>
            <img src={space1} />
          </div>
          <div>
            <img src={tables1} />
          </div>
          <div>
            <img src={tables2} />
          </div>
          <div>
            <img src={tables3} />
          </div>
        </Slider>
      </div>
    );
  }
}
