import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  isEdit: boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  onClickWrite: () => void;
  writer: string;
  contents: string;
  password: string;
  star: number;
  onClickUpdate: () => void;
  data?: any;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
