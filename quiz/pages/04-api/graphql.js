import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation{
    createBoard(
      writer: "맹구",
      title: "맹구는 못말려",
      contents: "훈이도 못말려"
    ){
      _id
      number
      message
    }
  }
`


export default function GraphqlMutationPage(){
  const [callApi] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {
    const result = await callApi()
    console.log(result)
    console.log(result.data.createBoard._id)
    console.log(result.data.createBoard.number)
    console.log(result.data.createBoard.message)
  }

  return (
    <div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
    </div>
  )
}