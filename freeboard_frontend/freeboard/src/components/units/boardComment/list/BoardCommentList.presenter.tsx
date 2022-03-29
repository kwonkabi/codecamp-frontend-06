import { getDate } from "../../../../commons/libraries/utils";
import * as S from "../list/BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.ItemWrapper key={el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              {/* <S.UpdateIcon onMouseDown={props.onMouseDownEdit} src='/images/board/list/option_update_icon.png' /> */}
              <S.UpdateIcon src="/images/board/list/option_update_icon.png" />
              {/* <S.DeleteIcon onMouseDown={props.onMouseDownDelete} src='/images/board/list/option_delete_icon.png' /> */}
              <S.DeleteIcon src="/images/board/list/option_delete_icon.png" />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(el.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ))}
    </div>
  );
}
