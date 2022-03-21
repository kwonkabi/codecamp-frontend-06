import { Writer, Title, Contents, Button} from '../write/BoardWrite.style'

export default function BoardWriteUI(props){

  return (
      <>
      작성자: <Writer type="text" onChange={props.onChangeWriter}></Writer><br/>
      제목: <Title type="text" onChange={props.onChangeTitle}></Title><br/>
      내용: <Contents type="text" onChange={props.onChangeContents}></Contents><br/>
      <Button onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기!</Button>
    </>
  )
}