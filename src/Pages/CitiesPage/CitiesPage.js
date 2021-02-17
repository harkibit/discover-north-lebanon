import React from 'react';
import { citiesData } from './citiesData';
import CityItem from '../../Components/CityItem/CityItem.js';
import './CitiesPage.css';

export default function CitiesPage() {
  return (
    <div className="cityPage">
      <h1 className="citiesTitle">Cities</h1>
      <div className="cityList">
        {citiesData.map((city, indx) => {
          console.log(city.imgsrc);
          return (
            <div key={indx} className="cityLs">
              <CityItem city={city} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
