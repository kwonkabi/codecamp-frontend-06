import { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function ModalAddressPage(){
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data) => {
    console.log(data);
    // 콘솔에 찍히면 모달도 없어지도록
    setIsOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/* 모달 삭제하고 다시 만드는 방법 */}
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
        <DaumPostcode
          onComplete={handleComplete}
        />
        </Modal>
      )}

      {/* 모달 숨겼다가 나타나게 하는 방법
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      <DaumPostcode
        onComplete={handleComplete}
      />
      </Modal> */}
    </>
  );
};