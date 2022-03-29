import { useState } from "react";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(true);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
