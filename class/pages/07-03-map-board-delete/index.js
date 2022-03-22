import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { Fragment } from 'react'


const FETCH_BOARDS = gql`
  query fetchBoards{
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($number:Int){
    deleteBoard(number: $number){
      message
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  width: 20%;
`


const MapBoardPage = () => {
  const [ deleteBoard ] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARDS)

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }]
      // 새로고침 해야지만 다시 페치해주는 문제 해결하기 위해, 다시 가져와달라는 요청을 하는 것
    })
  }

  return (
    <Fragment>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          {/* 인덱스가 키에 들어가면 안 됨!! 완전 고유한 내용을 넣어야 함. 인덱스는 고정이고 계속 새로운 내용이 들어오기 때문. */}
          <Column><input type="checkbox" /></Column>
          <Column>{el.number}</Column> 
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>삭제</button>
            {/* 이벤트핸들러 함수 */}
          </Column>
        </Row>
      ))}
    </Fragment>
  )
}

export default MapBoardPage