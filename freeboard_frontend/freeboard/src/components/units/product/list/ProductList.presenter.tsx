import * as S from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { getDate, getPrice } from "../../../../commons/libraries/utils";
import styled from "@emotion/styled";

export default function ProductListUI(props) {
  const Infinite = styled(InfiniteScroll)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  return (
    <S.Wrapper>
      <S.Sell onClick={props.onClickMoveToWrite}>판매하기</S.Sell>
      <Infinite
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {props.data?.fetchUseditems.map((el, index) => (
          <S.ItemWrapper
            key={uuidv4()}
            id={el._id}
            onClick={props.onClickMoveToProductDetail}
            style={{ width: "250px", height: "320px" }}
          >
            <S.ItemImageWrapper>
              {el.images[0] ? (
                <S.ItemImage
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  alt="상품이미지"
                />
              ) : (
                <div>이미지 미등록</div>
              )}
            </S.ItemImageWrapper>
            <S.ItemInfo>
              <S.ItemName>{el.name}</S.ItemName>
              <S.PriceTimeWrapper>
                <S.ItemPrice>{getPrice(el.price)}</S.ItemPrice>
                <S.ItemTime>{getDate(el.createdAt)}</S.ItemTime>
              </S.PriceTimeWrapper>
            </S.ItemInfo>
          </S.ItemWrapper>
        )) || <div></div>}
      </Infinite>
    </S.Wrapper>
  );
}

// {(index + 1) % 5 === 0 && <br />}
