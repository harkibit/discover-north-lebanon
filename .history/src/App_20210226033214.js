import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import SingleActivityPage from './Pages/SingleActivityPage/SingleActivityPage';
function App() {
  const actPicArray = [
    {
      imgsrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_er4LliU-OHQCiYlMWE5q69wpsnMumByqxw&usqp=CAU',
    },
    {
      imgsrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_er4LliU-OHQCiYlMWE5q69wpsnMumByqxw&usqp=CAU',
    },
  ];
  const tags = ['city1', 'city2', 'city3'];
  const desc =
    'Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ';
  return (
    <div className="App">
      <SingleActivityPage
        activityName="hiking"
        tags={tags}
        actPicArray={actPicArray}
        description={desc}
      />
    </div>
  );
}

export default App;
