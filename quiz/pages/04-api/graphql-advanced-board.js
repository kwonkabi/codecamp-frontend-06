import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard(
    $writer: String,
    $title: String,
    $contents: String
    ){
    createBoard(
      writer: $writer,
      title: $title,
      contents: $contents
      ){
      _id
      number
      message
    }
  }
`

const BoardMutationPage= () => {
  
  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [callApi] = useMutation(CREATE_BOARD)

  const onClickRequest = async () => {
    const result = await callApi({
      variables: { writer: writer, title: title, contents: contents}
    })
    console.log(result)
    console.log(result.data.createBoard._id)
    console.log(result.data.createBoard.number)
    console.log(result.data.createBoard.message)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter}></input><br/>
      제목: <input type="text" onChange={onChangeTitle}></input><br/>
      내용: <input type="text" onChange={onChangeContents}></input><br/>
      <button onClick={onClickRequest}>GRAPHQL-API 요청하기</button>
    </div>
  )
}

export default BoardMutationPage