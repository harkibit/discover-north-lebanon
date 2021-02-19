import React from 'react';
import { Carousel, Image } from 'antd';
import { LeftOutlined, RightOutlined, CameraOutlined } from '@ant-design/icons';
import './ActivitiesCarousel.css';

export default function ActivitiesCarousel({ actPicArray }) {
  return (
    <div className="carousel-act">
      <Carousel
        arrows
        nextArrow={<RightOutlined />}
        prevArrow={<LeftOutlined />}
      >
        {actPicArray.map((pic, index) => (
          <div className="carousel-item" key={index}>
            <Image width={400} src={pic.imgsrc} />
          </div>
        ))}
      </Carousel>
      <div className="act-nb">
        <CameraOutlined /> All Photos ({actPicArray.length})
      </div>
    </div>
  );
}
