import React, {useState} from "react";
import "antd/dist/antd.css";

import { Modal, Button } from "antd";

function Model(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="side_model">
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>MODAL CONTENT</h1>
      </Modal>
    </div>
  );
}

export default Model;
