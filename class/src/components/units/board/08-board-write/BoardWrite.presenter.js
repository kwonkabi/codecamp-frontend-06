// 여기는 프레젠터 컴포넌트

// import { SubmitButton, WriterInput } from './BoardWrite.style'
import * as S from './BoardWrite.style'


export default function BoardWriteUI(props){
  // 여기는 페이지명 중요!
  return (
    <div>
      {/*<div>{data}</div>*/}
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      작성자: <S.WriterInput type="text" onChange={props.onChangeWriter} /><br />
      제목: <input type="text" onChange={props.onChangeTitle} /><br />
      내용: <input type="text" onChange={props.onChangeContents} /><br />
      <S.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
        {props.isEdit ? "수정" : "등록"}하기
      </S.SubmitButton>
    </div>
  )
}