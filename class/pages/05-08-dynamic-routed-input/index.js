import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

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

const DynamicRoutedPage = () => {
  const router = useRouter()
  console.log(router)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }
  })

    console.log(data)

  return (
    <>
      {/* data && data., data?.(optional-chaining) : 받아온 데이터가 있으면 앞에거 없으면 뒤에거 보여줘 */}
      <div>{data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다.</div> 
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </>
  )
}

export default DynamicRoutedPage