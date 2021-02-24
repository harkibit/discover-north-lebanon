import './TourGuideModal.css';
import { Modal } from 'antd';

const TourGuideModal = ({ guide, visible, handleCancel }) => {
  return (
    <Modal
      className="modal"
      bodyStyle={{ padding: '0' }}
      width={672}
      visible={visible}
      // onOk={handleClick}
      onCancel={handleCancel}
      destroyOnClose={true}
      okText="Hire Me!"
    >
      <img alt={guide.name} src={guide.imgSrc} />
      <div className="body">
        <h2>{guide.name}</h2>
        <p>{guide.desc}</p>
      </div>
    </Modal>
  );
};

export default TourGuideModal;
