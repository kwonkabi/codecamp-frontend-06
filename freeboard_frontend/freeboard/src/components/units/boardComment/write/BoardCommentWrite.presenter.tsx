import * as S from '../write/BoardCommentWrite.styles'
import { IBoardCommentWriteUIProps } from './BoardCommentWrite.types'

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps){
  return (
    <S.Wrapper>
      <>
        <S.PencilIcon src="/images/boardComment/write/pencil.png" />
        <span>댓글</span>
      </>
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          value={props.writer}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          value={props.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.BottomWrapper>
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
          <S.Button onClick={props.onClickWrite}>등록하기</S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  )
}


// export default function BoardCommentWriteUI(){

//   return (

//   <S.CommentWrapper>
//     <S.CommentNew>
//       <S.CommentTitle>
//         <S.CommentIcon src="" />댓글
//       </S.CommentTitle>
//       <S.CommentRating>
//         <S.Star>★</S.Star>
//         <S.Star>★</S.Star>
//         <S.Star>★</S.Star>
//         <S.Star>★</S.Star>
//         <S.Star>★</S.Star>
//       </S.CommentRating>
//       <S.CommentNewBox>
//         <S.CommentNewInput maxLength={100} placeholder={`개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.`}></S.CommentNewInput>
//         <S.CommentNewBottom>
//           <S.CommentTextCount>0/100</S.CommentTextCount>
//           <S.CommentSubmitButton>등록하기</S.CommentSubmitButton>
//         </S.CommentNewBottom>
//       </S.CommentNewBox>
//     </S.CommentNew>
//     <S.CommentView>
//       <S.CommentViewHeader>
//         <S.CommentViewProfileImg src="/freeboard/public/board/detail/avatar.png" />
//         <S.CommentViewHeaderRight>
//           <S.CommentViewHeaderRightUpper>
//             <S.WriterStarWrapper>
//               <S.CommentViewWriter>OOO</S.CommentViewWriter>
//               <S.CommentRating>
//                 <S.Star>★</S.Star>
//                 <S.Star>★</S.Star>
//                 <S.Star>★</S.Star>
//                 <S.Star>★</S.Star>
//                 <S.Star>★</S.Star>
//               </S.CommentRating>
//             </S.WriterStarWrapper>
//             <S.CommentViewIconWrapper>
//               <S.EditIcon src="/freeboard/public/board/detail/edit.png" />
//               <S.DeleteIcon src="/freeboard/public/board/detail/delete.png"/>
//             </S.CommentViewIconWrapper>
//           </S.CommentViewHeaderRightUpper>
//           <S.CommentViewContent> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto, deserunt, mollitia ipsa ducimus deleniti minus fugiat inventore quam ipsam laboriosam eos suscipit. A sapiente ullam dicta impedit nostrum optio! </S.CommentViewContent>
//         </S.CommentViewHeaderRight>
//       </S.CommentViewHeader>
//       <S.CommentViewDate>00-00-00</S.CommentViewDate>
//     </S.CommentView>
//   </S.CommentWrapper>

//   )
// }
