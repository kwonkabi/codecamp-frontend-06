// 프레젠터

export default function ProductWriteUI(props){

  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      작성자: <input type="text" onChange={props.onChangeSeller}></input><br/>
      상품명: <input type="text" onChange={props.onChangeName}></input><br/>
      상품상세: <input type="text" onChange={props.onChangeDetail}></input><br/>
      가격: <input type="number" onChange={props.onChangePrice}></input><br/>
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}>상품 {props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  )
}

