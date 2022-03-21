import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # 묶음배송 할 때는 mutation 이름 지어줘야 하기 때문에 위아래 두번 쓰는 것
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`
