import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import './Search.css';

export default function Search({ citiesArray, activitiesArray }) {
  const [citySearch, setCitySearch] = useState([]);
  const [activitySearch, setActivitySearch] = useState([]);
  const { Option } = Select;

  function handleChangeCity(value) {
    setCitySearch(value);
  }
  function handleChangeAct(value) {
    setActivitySearch(value);
  }
  function handleSearch(citySearch, activitySearch) {
    const cityResult = [];
    for (let j = 0; j < citySearch.length; j++) {
      for (let i = 0; i < citiesArray.length; i++) {
        if (citiesArray[i].name === citySearch[j])
          cityResult.push(citiesArray[i]);
      }
    }
    const actResult = [];
    for (let j = 0; j < activitySearch.length; j++) {
      for (let i = 0; i < activitiesArray.length; i++) {
        if (activitiesArray[i].name === activitySearch[j])
          actResult.push(activitiesArray[i]);
      }
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(citySearch, activitySearch);
  }

  return (
    <div>
      <form className="search-box" onSubmit={handleSubmit} id="newForm">
        <div className="search-inputs">
          <Select
            className="selectBox"
            mode="tags"
            style={{ width: '50%' }}
            placeholder="Search for a city"
            onChange={handleChangeCity}
          >
            {citiesArray.map((city, index) => {
              return <Option key={city.name}>{city.name}</Option>;
            })}
          </Select>
          <Select
            className="selectBox"
            mode="tags"
            style={{ width: '50%' }}
            placeholder="Search for an activity"
            onChange={handleChangeAct}
          >
            {activitiesArray.map((act, index) => {
              return <Option key={act.name}>{act.name}</Option>;
            })}
          </Select>
        </div>
        <button className="search-btn">
          <SearchOutlined
            style={{ fontSize: '20px', color: 'white' }}
            rotate="90"
          />
        </button>
      </form>
    </div>
  );
}
