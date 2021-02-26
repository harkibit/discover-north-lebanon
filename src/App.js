import 'antd/dist/antd.css';
import React, { Suspense } from 'react';
import NoFavoriteItem from './Components/NoFavoriteItem/NoFavoriteItem';

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading"></Suspense>
      <NoFavoriteItem />
    </div>
  );
}

export default App;
