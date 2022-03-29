import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalAddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
    setAddress(data.address);
  };

  return (
    <>
      <Button type="secondary" onClick={onToggleModal}>
        모달열기
      </Button>
      {isOpen ? (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      ) : (
        <span>{address}</span>
      )}
    </>
  );
}
