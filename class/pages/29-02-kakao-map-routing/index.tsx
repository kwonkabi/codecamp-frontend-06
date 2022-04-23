// import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapRoutingPage() {
  // Link, a 태그가 좋으면 라우터는 언제 쓰냐? 버튼 없이 페이지 이동을 해야 할 때

  // const router = useRouter();
  // const onClickMoveToMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  // };

  return (
    // <button onClick={onClickMoveToMap}>맵으로 이동하기~~~!</button>
    <Link href="/29-03-kakao-map-routed">
      {/* 가짜 a 태그: 검색엔진최적화(SEO)를 위해 */}
      <a>맵으로 이동하기!</a>
    </Link>
  );
  // <a href="/29-03-kakao-map-routed"> 맵으로 이동하기</a>;
}
