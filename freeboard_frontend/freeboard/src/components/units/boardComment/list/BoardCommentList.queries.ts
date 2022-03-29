import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

// export const UPDATE_BOARD_COMMENT = gql`
//   mutation updateBoardComment() {
//     updatdBoardComment() {

//     }
//   }
// `

// export const DELETE_BOARD_COMMENT = gql`
//   mutation deleteBoardComment() {
//     deleteBoardComment() {

//     }
//   }
// `
