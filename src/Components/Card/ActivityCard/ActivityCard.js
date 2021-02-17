import './ActivityCard.css';
import { Card } from 'antd';
const { Meta } = Card;

const ActivityCard = ({ activity, col }) => {
  return (
    <Card
      className={`card col${col}`}
      hoverable
      style={{
        width: activity.width,
        height: activity.height,
      }}
      cover={<img alt={activity.name} src={activity.imgSrc} />}
    >
      <Meta
        className="cardbody"
        title={activity.name}
        width={activity.width}
        height={parseInt(activity.height) / 1.27}
      />
    </Card>
  );
};

export default ActivityCard;
