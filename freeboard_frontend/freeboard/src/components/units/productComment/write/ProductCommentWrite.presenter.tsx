import * as S from "./ProductCommentWrite.styles";

export default function ProductCommentWriteUI(props) {
  console.log(props.el);
  return (
    <S.CommentWriteWrapper>
      {/* <S.UserInfo>
        <S.UserImg
          src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
          onError={(e) => {
            e.currentTarget.src = "/images/product-icon.png";
          }}
        />
        <S.UserName>{props.data?.fetchUserLoggedIn.name}</S.UserName>
      </S.UserInfo> */}
      <S.CommentTextarea
        onChange={props.onChangeContents}
        // value={props.contents}
        defaultValue={props.el?.contents}
      />
      {/* <S.CreateComment> */}
      <S.CommentSubmitButton
        onClick={
          props.isEdit ? props.onClickEditComment : props.onClickCreateComment
        }
      >
        {props.isEdit ? "수정하기" : "작성하기"}
      </S.CommentSubmitButton>
      {/* </S.CreateComment> */}
    </S.CommentWriteWrapper>
  );
}
