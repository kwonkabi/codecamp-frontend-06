import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  onClickWrite: () => void;
  contents: string;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
