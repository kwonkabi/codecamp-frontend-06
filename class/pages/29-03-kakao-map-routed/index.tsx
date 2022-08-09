// ‹
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapRoutedPage() {
  useEffect(() => {
    const script = document.createElement("script");
    // 렌더됐을 때 <script></script> 요소를 만들도록
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=83c9e35a5b2a5ab7a9109abf00e038bb&autoload=false";
    // 'head 태그의 자식으로 script를 추가해줘'
    document.head.appendChild(script);

    // '스크립트가 로드되면 함수 내부를 실행시켜줘'
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=83c9e35a5b2a5ab7a9109abf00e038bb"
        ></script>
      </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </div>
  );
}
