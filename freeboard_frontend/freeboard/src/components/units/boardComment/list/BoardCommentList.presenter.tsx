import { Modal } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "../list/BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.isOpenDeleteModal && (
        <Modal visible={true} onOk={props.onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
      {props.data?.fetchBoardComments.map((el, index) => (
        <div key={el._id}>
          {index !== props.myIndex && (
            <S.ItemWrapper>
              <S.FlexWrapper>
                <S.Avatar src="/images/avatar.png" />
                <S.MainWrapper>
                  <S.WriterWrapper>
                    <S.Writer>{el.writer}</S.Writer>
                    <S.Star value={el?.rating} disabled />
                  </S.WriterWrapper>
                  <S.Contents>{el.contents}</S.Contents>
                </S.MainWrapper>
                <S.OptionWrapper>
                  <S.UpdateIcon
                    src="/images/board/list/option_update_icon.png"
                    id={String(index)}
                    onClick={props.onClickEdit}
                  />
                  <S.DeleteIcon
                    src="/images/board/list/option_delete_icon.png"
                    id={el._id}
                    onClick={props.onClickOpenDeleteModal}
                  />
                </S.OptionWrapper>
              </S.FlexWrapper>
              <S.DateString>{getDate(el.createdAt)}</S.DateString>
            </S.ItemWrapper>
          )}
          {index === props.myIndex && (
            <BoardCommentWrite data={props.data} isEdit={props.isEdit} />
          )}
        </div>
      ))}
    </InfiniteScroll>
  );
}
