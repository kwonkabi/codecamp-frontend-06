import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/generated/types";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { IBoardCommentListUIProps } from "../list/BoardCommentList.types";
import { Modal } from "antd";

export default function BoardCommentWrite(props: IBoardCommentListUIProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
  }

  function onChangeStar(value: number) {
    setStar(value);
  }

  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setWriter("");
      setPassword("");
      setContents("");
      setStar(0);
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function onClickUpdate() {
    if (!contents) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    if (!password) {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      // return;
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: String(router.query.boardCommentId),
        },
      });
      Modal.success({ content: "댓글 수정에 성공하였습니다!" });
      // 댓글 수정 완료 후 뭘 보여줄 건지?
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeStar={onChangeStar}
      onClickWrite={onClickWrite}
      contents={contents}
      writer={writer}
      password={password}
      star={star}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
    />
  );
}
