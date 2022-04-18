import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path) => () => {
    // 이동하기 전에 path를 저장해놓고 이동하기!!
    setVisitedPage(path);
    router.push(path);
  };

  // 이름 바뀌는 걸 원하지 않기 때문에 객체로 리턴
  return {
    visitedPage,
    onClickMoveToPage,
  };
}
