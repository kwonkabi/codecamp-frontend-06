import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { basketState } from "../../../../commons/store";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUsedItemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const [, setBasketItems] = useRecoilState(basketState);

  // '<p>내용</p>' 나오는 문제: 추가 해결 필요함
  // let originalContents = data?.fetchUseditem.contents;
  // originalContents = originalContents.split("<p>")[1].split("</p>");
  // const refinedContents = originalContents[0];

  // 수정하기
  const onClickMoveToEdit = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  // 상품 삭제하기
  const onClickDelete = (data) => async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: data,
        },
      });
      alert("상품 판매글이 삭제되었습니다.");
      const basket = JSON.parse(localStorage.getItem("basket") || "[]");
      const newBasket = basket.filter((el) => el._id !== data);
      localStorage.setItem("basket", JSON.stringify(newBasket));
      router.push("/market");
    } catch (error) {
      alert(error.message);
    }
  };

  // 찜하기
  const onClickPick = async () => {
    try {
      await toggleUsedItemPick({
        variables: { useditemId: String(router.query.useditemId) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.productsId) },
          },
        ],
      });
      refetch();
      alert("이 상품을 찜 했어요!");
    } catch (error) {
      alert(error.message);
    }
  };

  // 장바구니
  const onClickBasket = (event) => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // console.log(Array.isArray(baskets));
    // console.log(baskets);
    // console.log(baskets[0].fetchUseditem._id);
    // console.log(data.fetchUseditem);
    const temp = baskets.filter(
      (basketEl: IBoard) =>
        basketEl.fetchUseditem._id === data.fetchUseditem._id
    );
    console.log(temp);
    if (temp.length === 1) {
      alert("이미 담으신 상품입니다!");
      return;
    }

    const { __typename, ...newEl } = data;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setBasketItems(baskets);
  };

  // 구매
  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.useditemId) },
      });
      alert("상품 구매를 완료했습니다!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      onClickBasket={onClickBasket}
      onClickBuy={onClickBuy}
      userData={userData}
    />
  );
}
