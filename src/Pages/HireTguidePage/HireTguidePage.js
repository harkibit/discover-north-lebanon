import React from 'react';
import './HireTguidePage.css';
import HireMeForm from '../../Components/HireMeForm/HireMeForm.js';
import { citiesData } from '../CitiesPage/citiesData.js';
import { PageHeader } from 'antd';

export default function HireTguidePage({
  Tguide_email = 'gtour180@gmail.com',
  Tguide_name = 'guide1',
}) {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title={<span>Back</span>}
      />
      <h1> Fill the following form please to reach out the tour guide. </h1>
      <HireMeForm
        citiesArray={citiesData}
        Tguide_email={Tguide_email}
        Tguide_name={Tguide_name}
      />
    </div>
  );
}
