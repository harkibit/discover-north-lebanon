import 'antd/dist/antd.css';
import React, { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading"></Suspense>
    </div>
  );
}

export default App;
