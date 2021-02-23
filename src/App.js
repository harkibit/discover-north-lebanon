import 'antd/dist/antd.css';
import Navbar from './Components/Navbar/Navbar';
import React, { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <Navbar />
      </Suspense>
    </div>
  );
}

export default App;
