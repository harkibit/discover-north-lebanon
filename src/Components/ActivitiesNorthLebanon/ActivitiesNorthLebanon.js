import './ActivitiesNorthLebanon.css';
import ActivityCard from '../Card/ActivityCard/ActivityCard';

const ActivitiesNorthLebanon = () => {
  const activities = [
    {
      name: 'Hiking',
      imgSrc:
        'https://www.lebanontraveler.com/lebanontraveler/Library/Images/Uploaded%20Images/2017/LT/Articles/Hikes/005-Bentael-copy.jpg',
      width: '583px',
      height: '654px',
    },
    {
      name: 'Skiing',
      imgSrc:
        'https://www.aljazeera.com/wp-content/uploads/2017/03/8697968b54d14ef7bca47aac9502f8fe_8.jpeg',
      width: '305px',
      height: '331px',
    },
    {
      name: 'Mountain Biking',
      imgSrc:
        'https://blogbaladi.com/wp-content/uploads/2016/08/biking2-624x333.jpg',
      width: '305px',
      height: '331px',
    },
    {
      name: 'ATV & Buggy',
      imgSrc:
        'https://mediaim.expedia.com/localexpert/641081/86491096-e817-4204-97e1-d8014798ef90.jpg?impolicy=resizecrop&rw=350&rh=197',
      width: '642px',
      height: '290px',
    },
  ];

  return (
    <div className="containers">
      <div className="header">
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
