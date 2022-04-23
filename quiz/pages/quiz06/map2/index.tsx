// import { useRouter } from "next/router";
import Link from "next/link";

export default function QuizKakaoMapRoutingPage() {
  // const router = useRouter();
  // const onClickMoveToMap = () => {
  //   router.push("/map1");
  // };

  return (
    // <button onClick={onClickMoveToMap}>이동하기</button>
    <Link href="/quiz06/map1">
      {/* 가짜 a 태그: 검색엔진최적화(SEO)를 위해 */}
      <a style={{ color: "blue" }}>이동하기</a>
    </Link>
  );
}
