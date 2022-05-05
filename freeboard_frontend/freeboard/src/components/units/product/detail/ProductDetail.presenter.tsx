import * as S from "./ProductDetail.styles";
import {
  HeartOutlined,
  EnvironmentOutlined,
  MehFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import ProductCommentWrite from "../../productComment/write/ProductCommentWrite.container";
import ProductCommentList from "../../productComment/list/ProductCommentList.container";
import KakaoMap from "../../../../commons/kakoMaps/00";

export default function ProductDetailUI(props) {
  return (
    <S.Wrapper>
      <S.BuyWrapper>
        <S.ProductImageWrapper>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.ProductImage
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </S.ProductImageWrapper>
        <S.ProductBuy>
          <S.FlexWrapper1>
            <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
            {props.userData?.fetchUserLoggedIn?._id ===
              props.data?.fetchUseditem.seller._id && (
              <S.FlexWrapper2>
                <EditOutlined
                  style={{ fontSize: "18px" }}
                  onClick={props.onClickMoveToEdit}
                />
                <DeleteOutlined
                  style={{ fontSize: "18px" }}
                  onClick={props.onClickDelete(props.data?.fetchUseditem._id)}
                />
              </S.FlexWrapper2>
            )}
          </S.FlexWrapper1>
          <S.PriceWrapper>
            <S.ProductPrice>
              {props.data?.fetchUseditem.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </S.ProductPrice>
            <div style={{ fontSize: "20px" }}>원</div>
          </S.PriceWrapper>
          <S.ProductRemarks>
            {props.data?.fetchUseditem.remarks}
          </S.ProductRemarks>
          <S.Hashtags>
            {props.data?.fetchUseditem.tags?.map((e, i) => (
              <S.Hashtag key={uuidv4()}>{`${e}  `}</S.Hashtag>
            ))}
          </S.Hashtags>
          <S.ButtonWrapper>
            <S.Like>
              <HeartOutlined
                style={{ fontSize: "35px", marginRight: "5px" }}
                onClick={props.onClickPick}
              />
              찜 {props.data?.fetchUseditem.pickedCount}
            </S.Like>
            <S.Basket onClick={props.onClickBasket}>장바구니</S.Basket>
            <S.Buy onClick={props.onClickBuy}>바로구매</S.Buy>
          </S.ButtonWrapper>
        </S.ProductBuy>
      </S.BuyWrapper>
      <S.InfoWrapper>
        <S.InfoWrapperLeft>
          <S.ProductInfoWrapper>
            <S.Label>상품정보</S.Label>
          </S.ProductInfoWrapper>
          <S.ProductContents>
            {props.data?.fetchUseditem.contents}
          </S.ProductContents>
          <S.LabelSmallWrapper>
            <EnvironmentOutlined style={{ fontSize: "29px" }} />
            <S.LabelSmall>거래지역</S.LabelSmall>
          </S.LabelSmallWrapper>
          {/* <KakaoMap02
            tradeLat={props.data?.fetchUseditem.useditemAddress?.lat}
            tradeLng={props.data?.fetchUseditem.useditemAddress?.lng}
          /> */}
          <KakaoMap
            address={props.data?.fetchUseditem.useditemAddress.address || ""}
          />
        </S.InfoWrapperLeft>
        <S.InfoWrapperRight>
          <S.SellerInfoWrapper>
            <S.Label>상점정보</S.Label>
          </S.SellerInfoWrapper>
          <S.SellerNameWrapper>
            <MehFilled style={{ fontSize: "75px" }} />
            <S.SellerName>{props.data?.fetchUseditem.seller.name}</S.SellerName>
          </S.SellerNameWrapper>
          <S.CommentWrapper>
            <S.CommentLabelWrapper>
              <S.Label>댓글</S.Label>
            </S.CommentLabelWrapper>
            <ProductCommentWrite />
            <ProductCommentList />
          </S.CommentWrapper>
        </S.InfoWrapperRight>
      </S.InfoWrapper>
    </S.Wrapper>
  );
}
