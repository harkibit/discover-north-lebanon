import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import './Search.css';

export default function Search({ citiesArray, activitiesArray, handleSearch }) {
  const [citySearch, setCitySearch] = useState(undefined);
  const [activitySearch, setActivitySearch] = useState('');
  const [val1, setVal1] = useState('Search for a city');
  const [val2, setVal2] = useState('Search for an activity');
  const { Option } = Select;

  function handleChangeCity(value) {
    setCitySearch(value);
    setVal1(value);
  }
  function handleChangeAct(value) {
    setActivitySearch(value);
    setVal2(value);
  }
  function onSearch(val) {
    citiesArray.forEach((city) => {
      if (val === city) setCitySearch(val);
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(citySearch, activitySearch);
    setCitySearch(undefined);
    setActivitySearch('');
    setVal1('Search for a city');
    setVal2('Search for an activity');
    e.target.reset();
  }

  return (
    <div>
      <form className="search-box" onSubmit={handleSubmit}>
        <Select
          className="selectBox"
          value={val1}
          showSearch
          onSearch={onSearch}
          style={{ width: '50%' }}
          allowClear="true"
          onChange={handleChangeCity}
        >
          {citiesArray.map((city) => {
            return (
              <Option key={city.id} value={city.name}>
                {city.name}
              </Option>
            );
          })}
        </Select>
        <Select
          className="selectBox"
          value={val2}
          showSearch
          style={{ width: '50%' }}
          allowClear="true"
          onChange={handleChangeAct}
        >
          {citySearch === undefined
            ? activitiesArray.map((act) => {
                return (
                  <Option key={act.id} value={act.name}>
                    {act.name}
                  </Option>
                );
              })
            : activitiesArray
                .filter((act) => act.city === citySearch)
                .map((act) => {
                  return (
                    <Option key={act.id} value={act.name}>
                      {act.name}
                    </Option>
                  );
                })}
        </Select>
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
