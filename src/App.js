import 'antd/dist/antd.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutUsPage from './Pages/AboutUs/AboutUs';
import CitiesPage from './Pages/CitiesPage/CitiesPage';
import cities from './MockData/cities.json';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import TourGuidePage from './Pages/TourGuide/TourGuidePage';
import ActivitiesPage from './Pages/ActivitiesPage/ActivitiesPage';
import SingleActivityPage from './Pages/SingleActivityPage/SingleActivityPage';
import Footer from './Components/Footer/Footer';

import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback="loading">
          <Navbar />
          <Switch>
            <Route exact path="/">
              {/* Home page */}
            </Route>
            <Route exact path="/activities">
              <ActivitiesPage />
            </Route>
            <Route exact path="/activities/:id">
              <SingleActivityPage />
            </Route>
            <Route exact path="/cities">
              <CitiesPage data={cities} />
            </Route>
            <Route exact path="/tour-guide">
              <TourGuidePage />
            </Route>
            <Route exact path="/:user_name">
              {/* UserProfile page */}
            </Route>
            <Route exact path="/about-us">
              <AboutUsPage />
            </Route>
            <Route exact path="*">
              <ErrorPage />
            </Route>
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
