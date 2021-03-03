import React from 'react';
import CityCardItem from '../../Components/CityCardItem/CityCardItem.js';
import './CitiesPage.css';
import cities from '../../MockData/cities.json';

export default function CitiesPage() {
  return (
    <div className="cityPage">
      <div className="cityList">
        {cities.map((city, i) => {
          <div key={i} className="cityLs">
            <CityCardItem
              imgsrc={city.image}
              name={city.name}
              info={city.description}
              activityNumber={city.activity.length}
            />
          </div>;
        })}
      </div>
    </div>
  );
}
