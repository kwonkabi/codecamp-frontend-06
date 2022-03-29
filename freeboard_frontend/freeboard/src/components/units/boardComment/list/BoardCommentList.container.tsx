import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IMutationUpdateBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from "./BoardCommentList.queries";


export default function BoardCommentList(){

  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [updatdBoardComment] = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);

  const onMouseDownEdit = async () => {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {

          },
          password: 
          boardCommentId: 
        },
        refetchQueries: [{
          mutation: UPDATE_BOARD_COMMENT,
          variables: {}
        }]
      })
    } catch (error: any) {
      alert(error.message)
    }
  }

  const onMouseDownDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {},
        refetchQueries: [{
          mutation: DELETE_BOARD_COMMENT,
          variables: {}
        }]
      })
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
  <BoardCommentListUI
    data={data}
    onMouseDownEdit={onMouseDownEdit}
    onMouseDownDelete={onMouseDownDelete}
  />
  )
}