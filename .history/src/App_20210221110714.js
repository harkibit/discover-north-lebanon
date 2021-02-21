import 'antd/dist/antd.css';
import TourGuideCard from './Components/TourGuideCard/TourGuideCard';
function App() {
  const tags = [1, 2, 3, 4];
  return (
    <div className="App">
      <TourGuideCard name="reboer" tags={tags} />
    </div>
  );
}

export default App;
