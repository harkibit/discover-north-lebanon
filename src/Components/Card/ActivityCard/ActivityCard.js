import './ActivityCard.css';
import { Card } from 'antd';
const { Meta } = Card;

const ActivityCard = ({ activity, col }) => {
  const imageHeight = parseInt(activity.height);
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
        height={imageHeight < 500 ? imageHeight / 1.27 : imageHeight / 1.1}
      />
    </Card>
  );
};

export default ActivityCard;
