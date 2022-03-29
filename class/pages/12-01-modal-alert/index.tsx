import { Modal } from 'antd'

export default function ModalAlertPage(){
  const onClickSuccessButton = () => {
    Modal.success({
      content: '게시물 등록에 성공했습니다!',
    });
  }

  const onClickFailbutton = () => {
    Modal.error({
      content: '비밀번호가 틀렸습니다!',
    });
  }

  return (
    <div>
      <button onClick={onClickSuccessButton}>성공했을 때!</button>
      <button onClick={onClickFailbutton}>실패했을 때!</button>
    </div>
  )
}