import 'antd/dist/antd.css';
import TourGuideCard from './Components/TourGuideCard/TourGuideCard';
function App() {
  const tourguide = {
    name: 'robert',
    imgsrc:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    tags: [1, 23, 4],
  };
  return (
    <div className="App">
      <TourGuideCard />
    </div>
  );
}

export default App;
