import InfiniteScroll from "react-infinite-scroller";
import ProductCommentListItem from "./ProductCommentList.presenterItem";

export default function ProductCommentListUI(props) {
  return (
    <div style={{ width: "385px", height: "453px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditemQuestions.map((el: any) => (
          <ProductCommentListItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
