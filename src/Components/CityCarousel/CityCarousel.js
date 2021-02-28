import React, { useState } from 'react';
import { Modal } from 'antd';
import './CityCarousel.css';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';

export default function CityCarousel() {
  const picArray = [
    {
      srcImg:
        'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    },
    {
      srcImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1uZTBlxjOfVEiZsIt9FSo_bkxgEb6_OslQ&usqp=CAU',
    },
    { srcImg: 'https://static.toiimg.com/photo/72975551.cms' },
    {
      srcImg:
        'https://inteng-storage.s3.amazonaws.com/img/iea/nZwXYgDgOv/sizes/the-moon-images_resize_md.jpg',
    },
  ];
  const [imgSrc, setImgSrc] = useState(picArray[0].srcImg);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  function currentSlide(n) {
    setImgSrc(picArray[n].srcImg);
  }
  function plusSlides(n) {
    picArray.forEach((pic, index) => {
      if (pic.srcImg == imgSrc) {
        if (index + n >= picArray.length) {
          setImgSrc(picArray[0].srcImg);
        } else if (index + n < 0) {
          setImgSrc(picArray[picArray.length - 1].srcImg);
        } else {
          setImgSrc(picArray[index + n].srcImg);
        }
      }
    });
  }

  return (
    <div className="cities-carousel">
      <span onClick={showModal}>
        <u>See more!</u>
      </span>
      <Modal
        visible={isModalVisible}
        footer={[]}
        width={'1000'}
        onCancel={() => setIsModalVisible(false)}
        closeIcon={
          <CloseOutlined style={{ color: 'white' }} className="close-icon" />
        }
      >
        <div className="container">
          <div className="big-pic-row">
            <img src={imgSrc} className="big-image" alt="pic" />
          </div>
          <div className="prev" onClick={() => plusSlides(-1)}>
            <LeftOutlined />
          </div>
          <div className="next" onClick={() => plusSlides(1)}>
            <RightOutlined />
          </div>
          <div className="row">
            {picArray.map((pic, index) => (
              <div className="column">
                <img
                  className="demo cursor small-pic"
                  src={pic.srcImg}
                  style={{ width: '100%' }}
                  onClick={() => currentSlide(index)}
                  alt="pic"
                />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
