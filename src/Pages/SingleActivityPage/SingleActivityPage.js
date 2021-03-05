import React, { useState } from 'react';
import './SingleActivityPage.css';
import { Divider, Tooltip, PageHeader } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import ActivitiesCarousel from '../../Components/ActivitiesCarousel/ActivitiesCarousel';
import Button from '../../Components/Button/Button';
import tourguideimg from '../../Components/WhatWeDo/icons/tourGuide.png';
import { useParams } from 'react-router';
import activities from '../../MockData/activities.json';

export default function SingleActivityPage(props) {
  const { activityName, tags, actPicArray, description } = props;

  const { id } = useParams();
  const [like, setLike] = useState(true);
  const toggleLike = () => {
    setLike(!like);
  };
  const buttonWidth = '1px';
  return (
    <div className="single-act-container">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Back"
        className="back-btn"
      />
      {activities
        .filter((act) => id === act.id)
        .map((act) => {
          // return (
          <div className="grid-view">
            <div className="left-side-grid">
              <div className="header">
                <div className="header-child-1">
                  <h1>{act.name}</h1>
                  <Tooltip
                    placement="top"
                    title={like ? 'add to favorite' : 'remove from favorite'}
                  >
                    {like ? (
                      <HeartOutlined
                        className="heartOutlined heartSize"
                        onClick={toggleLike}
                      />
                    ) : (
                      <HeartFilled
                        className="heartFilled heartSize"
                        onClick={toggleLike}
                      />
                    )}
                  </Tooltip>
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
                    <img src={tourguideimg} className="iconStyle" alt="icon" />
                    Need A Tour Guide?
                  </h1>
                  <Button
                    buttonWidth={buttonWidth}
                    text="See Available tour guides"
                    type="primary"
                  />
                </div>
              </div>
            </div>

            <div>
              <ActivitiesCarousel actPicArray={act.image} carWidth={'61rem'} />
            </div>
          </div>;
          // );
        })}
    </div>
  );
}
