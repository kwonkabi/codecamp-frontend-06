import { DeleteOutlined, EditOutlined, MehFilled } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import ProductCommentWrite from "../write/ProductCommentWrite.container";
import ProductCommentList from "./ProductCommentList.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION,
} from "./ProductCommentList.queries";
import * as S from "./ProductCommentList.styles";

export default function ProductCommentListItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickDeleteComment = async (event) => {
    await deleteUseditemQuestion({
      variables: { useditemQuestionId: props.el._id },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  };

  return (
    <>
      {!isEdit && (
        <S.Wrapper>
          <S.Header>
            <S.InfoWrapper>
              <S.InfoLeft>
                <MehFilled style={{ fontSize: "50px" }} />
              </S.InfoLeft>
              <S.InfoRight>
                <S.UserName>{props.el.user.name}</S.UserName>
                <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
              </S.InfoRight>
            </S.InfoWrapper>
            <S.ButtonWrapper>
              <EditOutlined
                style={{
                  fontSize: "16px",
                  color: "#BDBDBD",
                  marginRight: "15px",
                }}
                onClick={onClickEdit}
              />
              <DeleteOutlined
                style={{
                  fontSize: "16px",
                  color: "#BDBDBD",
                  marginRight: "15px",
                }}
                // onClick={onClickDeleteComment}
                onClick={onClickDeleteComment}
              />
            </S.ButtonWrapper>
          </S.Header>
          <S.Body>{props.el.contents}</S.Body>
        </S.Wrapper>
      )}
      {isEdit && <ProductCommentWrite isEdit={true} el={props.el} />}
    </>
  );
}
