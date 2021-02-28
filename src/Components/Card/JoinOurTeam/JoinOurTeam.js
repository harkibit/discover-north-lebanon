import { Card } from 'antd';
import ButtonComponont from '../../Button/Button';
import './JoinOurTeam.css';

const JoinOurTeam = ({ guide }) => {
  return (
    <Card className="card" bodyStyle={{ padding: '0' }}>
      <div className="cardbody">
        <img alt={guide.name} src={guide.image} />
        <div className="info">
          <h1 className="title">
            {guide.name} our {guide.speciality_tags[0]}
          </h1>
          <p className="description">{guide.desc}</p>
          <ButtonComponont type="primary" text="Join Our Team" />
          <p className="cardfooter">
            Check the rest of the team <a>Go Here</a>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default JoinOurTeam;
