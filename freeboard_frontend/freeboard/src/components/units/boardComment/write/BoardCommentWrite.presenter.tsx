import * as S from "../write/BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      {!props.isEdit && (
        <>
          <S.PencilIcon />
          <span> 댓글</span>
        </>
      )}
      <S.InputWrapper>
        {!props.isEdit ? (
          <S.Input
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props.writer}
          />
        ) : (
          // isEdit이 true일 때 (수정 필요)
          <S.Input
            placeholder="작성자"
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoardComments.writer}
            readOnly={!!props.data?.fetchBoardComments.writer}
          />
        )}
        {!props.isEdit ? (
          <S.Input
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          />
        ) : (
          // isEdit이 true일 때 (빈칸, 일치하는지 확인 필요)
          <S.Input
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          />
        )}
        {!props.isEdit ? (
          <S.Star onChange={props.onChangeStar} value={props.star} />
        ) : (
          // isEdit이 true일 때 (기존 star 값이 그대로 들어와야 함)
          <S.Star onChange={props.onChangeStar} defaultValue={props.star} />
        )}
      </S.InputWrapper>
      <S.ContentsWrapper>
        {!props.isEdit ? (
          <S.Contents
            maxLength={100}
            onChange={props.onChangeContents}
            value={props.contents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
        ) : (
          // isEdit이 true일 때 (기존 콘텐츠가 그대로 들어와야 함)
          <S.Contents
            maxLength={100}
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoardComments.contents}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
        )}
        <S.BottomWrapper>
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
          <S.Button onClick={props.onClickWrite}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
// <S.Wrapper>
//   {!props.isEdit && (
//     <>
//       <S.PencilIcon />
//       <span> 댓글</span>
//     </>
//   )}
//   <S.InputWrapper>
//     <S.Input
//       placeholder="작성자"
//       onChange={props.onChangeWriter}
//       defaultValue={props.data?.fetchBoardComments.writer}
//       readOnly={!!props.data?.fetchBoardComments.writer}
//     />
//     <S.Input
//       type="password"
//       placeholder="비밀번호"
//       onChange={props.onChangePassword}
//       value={props.password}
//     />
//     <S.Star onChange={props.onChangeStar} value={props.star} />
//   </S.InputWrapper>
//   <S.ContentsWrapper>
//     <S.Contents
//       maxLength={100}
//       onChange={props.onChangeContents}
//       value={props.contents}
//       placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
//     />
//     <S.BottomWrapper>
//       <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
//       <S.Button
//         onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
//       >
//         {props.isEdit ? "수정하기" : "등록하기"}
//       </S.Button>
//     </S.BottomWrapper>
//   </S.ContentsWrapper>
// </S.Wrapper>
//   );
// }

// isEdit이 true/false일 때로 나눴을 경우:
