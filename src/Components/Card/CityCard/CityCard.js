import { Card } from 'antd';
const { Meta } = Card;

const CityCard = ({ cityName, imgSrc }) => {
  return (
    <Card
      hoverable
      style={{
        width: '380px',
        height: '417px',
        margin: 'auto',
        border: '1px solid rgba(0, 145, 234, 0.3)',
        borderRadius: '5px',
      }}
      cover={<img alt={cityName} src={imgSrc} width="375px" height="351px" />}
    >
      <Meta
        title={cityName}
        style={{ textAlign: 'center', fontSize: '18px' }}
      />
    </Card>
  );
};

export default CityCard;
