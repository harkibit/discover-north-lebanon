import 'antd/dist/antd.css';
import TourGuideCard from './Components/TourGuideCard/TourGuideCard';
function App() {
  const tags = [1, 2, 3, 4];
  return (
    <div className="App">
      <TourGuideCard
        imgsrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        name="reboer"
        tags={tags}
      />
    </div>
  );
}

export default App;
