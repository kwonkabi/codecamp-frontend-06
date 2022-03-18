import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      number
      writer
      title
      contents
    }
  }
`

const StaticRoutedPage = () => {

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 83011 }
  })

    console.log(data)





  return (

    <>
      {/* data && data., data?.(optional-chaining) : 받아온 데이터가 있으면 앞에거 없으면 뒤에거 보여줘 */}
      <div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다.</div> 
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}번 게시글에 오신 것을 환영합니다.</div>
    </>


  )


}

export default StaticRoutedPage