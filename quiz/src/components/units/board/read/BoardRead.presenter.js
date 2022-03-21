import * as S from '../read/BoardRead.style'

export default function BoardReadUI(props){

  return(
    <div>
      <S.Greeting>
        {props.data?.fetchBoard.number}번 게시글에 오신 것을 환영합니다!!!
        {/* data && : 조건부 렌더링 */}
        {/* data? : 뒤에붙은 ?를 optional-chaining이라 함*/}
      </S.Greeting>
      <S.Title>제목 : {props.data?.fetchBoard.title}</S.Title>
      <S.Writer>작성자 : {props.data?.fetchBoard.writer}</S.Writer>
      <S.Contents>내용 : {props.data?.fetchBoard.contents}</S.Contents>
    </div>
  )
}