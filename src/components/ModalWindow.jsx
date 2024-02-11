import React from "react";
import { Button, Modal } from "antd";
const ModalWindow = ({ handleCheckout, handlecloseModal, modalisvisible }) => {
  return (
    <Modal
      title="order confirmation"
      open={modalisvisible}
      onCancel={handlecloseModal}
      footer={null}>
      <p>🥰 your order has been confirm successfully</p>
    </Modal>
  );
};

export default ModalWindow;
