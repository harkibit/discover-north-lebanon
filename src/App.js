import 'antd/dist/antd.css';
import './App.css';
import DropdownButton from './Components/Dropdown/Dropdown.js';
function App() {
  const citiesArray = [
    { name: 'city1', id: 0, activities: 'act1' },
    { name: 'city2', id: 1, activities: 'act3' },
    { name: 'city3', id: 2, activities: 'act6' },
  ];
  const activitiesArray = [
    { name: 'act1', id: 0, city: 'city1', price: '<100' },
    { name: 'act2', id: 1, city: 'city1', price: '<200' },
    { name: 'act3', id: 2, city: 'city2', price: '<300' },
    { name: 'act4', id: 3, city: 'city3', price: '<100' },
  ];
  function handleSelect(cities) {
    console.log('result :', cities);
  }
  return (
    <div className="App">
      <DropdownButton
        activitiesArray={activitiesArray}
        elementArray={activitiesArray}
        handleSelect={handleSelect}
        elem={'name'}
        dropdownTitle={'act'}
      />
    </div>
  );
}
export default App;
