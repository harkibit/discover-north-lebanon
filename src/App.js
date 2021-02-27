import 'antd/dist/antd.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback="loading">
          <Switch>
            <Route exact path="/">
              {/* Home page */}
            </Route>
            <Route exact path="/activities">
              {/* Activities page */}
            </Route>
            <Route exact path="/cities">
              {/* Cities page */}
            </Route>
            <Route exact path="/tour-guide">
              {/* TourGuide page */}
            </Route>
            <Route exact path="/user-profile">
              {/* UserProfile page */}
            </Route>
            <Route exact path="/about-us">
              {/* AboutUs page */}
            </Route>
            <Route exact path="*">
              <h1>You just made a BIG FAT ERROR! Apocalypse!</h1>
              {/* Error page (To be created maybe) */}
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
