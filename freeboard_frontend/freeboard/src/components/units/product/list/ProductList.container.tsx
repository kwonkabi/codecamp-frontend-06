import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductListUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

// const getDate = (date) => {
//   const newdate = new Date(date);
//   const yyyy = String(newdate.getFullYear()).slice(2);
//   const mm = String(newdate.getMonth() + 1).padStart(2, "0");
//   const dd = String(newdate.getDate()).padStart(2, "0");
//   return `${yyyy}-${mm}-${dd}`;
// };

export default function ProductList() {
  const router = useRouter();
  // 오늘본 상품
  // const [todayView, setTodayView] = useState([]);

  // 글 작성
  const onClickMoveToWrite = () => {
    router.push("/market/new");
  };

  // 상품목록
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  // 무한스크롤

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 20) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveToProductDetail = (event) => {
    if (event.target instanceof Element) {
      router.push(`/market/${event.currentTarget.id}`);
    }

    // const todayViewedItems = JSON.parse(
    //   localStorage.getItem(getDate(new Date())) || "[]"
    // );
    // localStorage.setItem(getDate(new Date()), JSON.stringify(todayViewedItems));
  };

  return (
    <ProductListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onClickMoveToWrite={onClickMoveToWrite}
    />
  );
}
