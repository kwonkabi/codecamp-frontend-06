// 12-03-modal-address REFACTORING

import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    // 콘솔에 찍히면 모달도 없어지도록
    onToggleModal();
  };

  return (
    <>
      <Button onClick={onToggleModal}>Open Modal</Button>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
