import './CityCard.css';
import { Card } from 'antd';
const { Meta } = Card;

const CityCard = ({ city }) => {
  return (
    <Card
      className="card"
      hoverable
      cover={<img alt={city.name} src={city.imgSrc} />}
    >
      <Meta className="meta" title={city.name} />
    </Card>
  );
};

export default CityCard;
