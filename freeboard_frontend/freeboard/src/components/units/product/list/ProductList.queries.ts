import { gql } from "@apollo/client";

// 상품 목록 불러오기 query
export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        name
        picture
      }
      createdAt
    }
  }
`;
