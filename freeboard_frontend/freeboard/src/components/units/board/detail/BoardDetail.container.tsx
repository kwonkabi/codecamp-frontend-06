import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD, FETCH_BOARDS } from "./BoardDetail.queries";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, FETCH_BOARDS)
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: { boardId: router.query.boardId },
  // });
  // const [deleteBoard] = useMutation(DELETE_BOARD)

  const onClickMoveToBoardList = () => {
    router.push('/boards')
  }

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`)
  }
  
  // const onClickDelete = (event) => {
  //   deleteBoard({
  //     variables: { boardId: event.target.boardId},
  //     refetchQueries: [{ query: FETCH_BOARDS }]
  //   })
  // }

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      // onClickDelete={onClickDelete}
    />
  )
}
