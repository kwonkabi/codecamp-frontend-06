import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types";
import _ from "lodash";

// boardList.presenter에서 받은 프롭스
export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 }); // 검색어에 대한 1페이지를 리페치해야 함!
    props.refetchBoardsCount({ search: data }); // 페이지네이션을 위해???
    props.onChangeKeyword(data); // XX이란 단어를 키워드로 저장해놔라(색깔 변경 위해)
  }, 200); // 0.2초 내에 일어나는 일은 무시! 0.2초 지나야 리페치 가넝

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
