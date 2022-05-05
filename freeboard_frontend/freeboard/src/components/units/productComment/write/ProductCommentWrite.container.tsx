import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./ProductCommentWrite.queries";

export default function ProductCommentWrite(props) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onClickCreateComment = async () => {
    if (!contents) return;
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query.useditemId,
          createUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: { useditemId: router.query.useditemId, page: 1 },
          },
        ],
      });
      Modal.success({
        content: "댓글 등록이 완료되었습니다.",
      });
      setContents("");
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  const onClickEditComment = async () => {
    if (!contents) {
      Modal.error({ content: "수정된 내용이 없습니다." });
      return;
    }
    try {
      const updateUseditemQuestionInput = {};
      if (contents) updateUseditemQuestionInput.contents = contents;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents },
          useditemQuestionId: props.el?._id, // 이게 뭐지 > 뭐긴..
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            // 어떤 게시글에 댓글이 달려야하는지 필요하기에 댓글의 id가 필요
            variables: { useditemQuestionId: router.query.useditemId },
          },
        ],
      });
      props.setIsEdit?.(false);
      Modal.success({
        content: "문의 수정이 완료되었습니다.",
      });
    } catch (error) {
      Modal.error({
        content: error.message,
      });
      console.log(error.message);
    }
  };

  useEffect(() => {}, [contents]);

  return (
    <>
      <ProductCommentWriteUI
        data={data}
        onChangeContents={onChangeContents}
        contents={contents}
        onClickCreateComment={onClickCreateComment}
        onClickEditComment={onClickEditComment}
        isEdit={props.isEdit}
        el={props.el}
      />
    </>
  );
}
