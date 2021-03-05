import React, { useState } from 'react';
import './SingleCityPage.css';
import Map from '../../Components/Map/Map.js';
import { Card, Button, Modal } from 'antd';
import CityCarousel from '../../Components/CityCarousel/CityCarousel';
import cities from '../../MockData/cities.json';
import { PageHeader } from 'antd';
import tourguideimg from '../../Components/WhatWeDo/icons/tourGuide.png';

// const { confirm } = Modal;

export default function SingleCityPage({ city }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div className="single-city-page">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title={<span>Back</span>}
      />
      <h1 className="single-city-title">{city.name}</h1>
      <div className="gallery-container" onClick={showModal}>
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            {' '}
            <img
              src={city.images[0]}
              alt="city pic"
              class="gallery__img"
            />{' '}
          </div>
          <div className="gallery__item gallery__item--2">
            {' '}
            <img
              src={city.images[1]}
              alt="city pic"
              class="gallery__img"
            />{' '}
          </div>
          <div className="gallery__item gallery__item--3">
            {' '}
            <img
              src={city.images[2]}
              alt="city pic"
              class="gallery__img"
            />{' '}
          </div>
          <div className="gallery__item gallery__item--4">
            {' '}
            <img
              src={city.images[3]}
              alt="city pic"
              class="gallery__img"
            />{' '}
          </div>
          <div className="gallery__item gallery__item--5">
            {' '}
            <img
              src={city.images[4]}
              alt="city pic"
              class="gallery__img"
            />{' '}
          </div>
        </div>
      </div>
      <div className="seemore-btn">
        <Button onClick={showModal} className="seemore-btn">
          See more
        </Button>
      </div>
      <CityCarousel
        picArray={city.images}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <div className="single-city-cards">
        <div className="card-col">
          <Card
            title={<b>Activities</b>}
            style={{ height: 400, borderRadius: 10 }}
            headStyle={{ borderBottom: 'none' }}
            className="card-item"
          >
            <span>
              <b>Activities Number : </b>
            </span>{' '}
            {city.activityNumber}
            {city.activity.map((act) => (
              <li>{act.type}</li>
            ))}
          </Card>
        </div>
        <div className="card-col">
          <Card
            title={<b>Details</b>}
            style={{ height: 400, borderRadius: 10 }}
            headStyle={{ borderBottom: 'none' }}
            className="card-item"
          >
            <div>
              <b>Description </b>
            </div>
            {city.description}
          </Card>
        </div>
        <div className="card-col">
          <Card
            title={<b>Location</b>}
            style={{ height: 400, borderRadius: 10 }}
            headStyle={{ borderBottom: 'none' }}
            className="card-item"
          >
            <Map
              width="100"
              height="40ch"
              data={cities}
              long={city.lng}
              lat={city.lat}
              zoomNb={12}
              infoType={0}
            />
          </Card>
        </div>
      </div>
      <div className="hire-box">
        <h1 className="icon-text">
          <img src={tourguideimg} className="iconStyle" alt="icon" />
          First Time in {city.name}? Hire a tour guide!
        </h1>
        <Button type="primary" className="seemore-btn">
          Take me There!
        </Button>
      </div>
    </div>
  );
}
