import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  isOpenDeleteModal: boolean;
  onClickDelete: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onLoadMore: () => void;
}
