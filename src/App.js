import 'antd/dist/antd.css';
import CityItem from './Components/CityItem/CityItem';

function App() {
  const info =
    'this is the best thing you will ever have in your life baby if you thought about it this is really cool huh?';
  return (
    <div className="App">
      <CityItem name="saida" info={info} />
    </div>
  );
}

export default App;
