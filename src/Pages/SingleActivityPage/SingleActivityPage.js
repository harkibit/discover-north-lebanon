import React, { useState } from 'react';
import './SingleActivityPage.css';
import { Divider, PageHeader } from 'antd';
import ActivitiesCarousel from '../../Components/ActivitiesCarousel/ActivitiesCarousel';
import Button from '../../Components/Button/Button';
import tourguideimg from '../../Components/WhatWeDo/icons/tourGuide.png';
import { useParams } from 'react-router';
import activities from '../../MockData/activities.json';
import Like from '../../Components/Like/Like';
export default function SingleActivityPage(props) {
  const { id } = useParams();
  const [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className="single-act-container">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Back"
        className="back-btn"
      />
      {activities
        .filter((act) => parseInt(id) === act.id)
        .map((act) => {
          return (
            <div className="grid-view">
              <div className="left-side-grid">
                <div className="header">
                  <div className="header-child-1">
                    <h1>{act.name}</h1>
                    <Like />
                  </div>
                  <Divider />
                  <div className="header-child-2">
                    {act.related_tags &&
                      act.related_tags.map((tag) => <span>{tag}</span>)}
                  </div>
                </div>
                <div className="left-grid-description">{act.description}</div>

                <div className="left-grid-tour-guide">
                  <div className="hire-box">
                    <h1 className="icon-text">
                      {' '}
                      <img
                        src={tourguideimg}
                        className="iconStyle"
                        alt="icon"
                      />
                      Need A Tour Guide?
                    </h1>
                    <Button
                      buttonWidth={10}
                      text="See Available tour guides"
                      type="primary"
                    />
                  </div>
                </div>
              </div>

              <div>
                <ActivitiesCarousel
                  actPicArray={act.images}
                  carWidth={'61rem'}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
