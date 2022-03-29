import { IQuery } from "../../../../commons/generated/types";
import { MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  // onMouseDownEdit: (event: MouseEvent<HTMLImageElement>) => void;
  // onMouseDownDelete: (event: MouseEvent<HTMLImageElement>) => void;
}
