import './ActivitiesNorthLebanon.css';
import ActivityCard from '../Card/ActivityCard/ActivityCard';
import { activities } from '../../MockData/data';
const ActivitiesNorthLebanon = () => {
  return (
    <div className="containers">
      <div className="headers">
        <h1>Activites in North Lebanon</h1>
        <a className="link" href="##">
          See more activities
        </a>
      </div>
      <div className="grid">
        {activities.map((activity, index) => (
          <ActivityCard activity={activity} col={index} />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesNorthLebanon;
