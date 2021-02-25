import './Header.css';
import Search from '../Search/Search';
import videos from './headerGif.mp4';
import { gems } from '../../MockData/data';

const Header = () => {
  return (
    <div className="header">
      <video src={videos} autoPlay />
      <div className="titleContainer">
        <h1 className="title">Discover North Lebanon</h1>
        <h2>Every City has its own stuff, get to know them more with us</h2>
      </div>
      <Search citiesArray={gems} activitiesArray={gems} />
    </div>
  );
};

export default Header;
