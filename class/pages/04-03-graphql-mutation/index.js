// import axios from 'axios'
// import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation{
    createBoard(
      writer: "서형",
      title: "하하하",
      contents: "하하하하하하하"
    ){
      _id
      number
      message
    }
  }
`


export default function GraphqlMutationPage(){
  // const [data, setData] = useState("")
  const [callApi] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    const result = await callApi() // graphql-api방식
    console.log(result)
    console.log(result.data.createBoard.message)
    // setData(result.data.createBoard.message)
  }

  return (
    <div>
      {/* <div>{data}</div> */}
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!</button>
    </div>
  )
}