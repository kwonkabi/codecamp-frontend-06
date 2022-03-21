// import { SubmitButton, WriterInput } from './BoardWrite.style'
import * as S from './BoardWrite.style'


export default function BoardWriteUI(props){
  // 여기는 페이지명 중요!
  return (
    <div>
      {/*<div>{data}</div>*/}
      작성자: <S.WriterInput type="text" onChange={props.onChangeWriter}></S.WriterInput><br/>
      제목: <input type="text" onChange={props.onChangeTitle}></input><br/>
      내용: <input type="text" onChange={props.onChangeContents}></input><br/>
      <S.SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기!</S.SubmitButton>
    </div>
  )
}