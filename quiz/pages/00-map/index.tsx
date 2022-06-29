import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=83c9e35a5b2a5ab7a9109abf00e038bb&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map");

        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        let marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        marker.setMap(map);

        const imageSrc = "/image/corgie.png";

        const imageSize = new window.kakao.maps.Size(64, 69);

        const imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new window.kakao.maps.LatLng(37.54699, 127.09598);

        marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        marker.setMap(map);
      });
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "400px",
        backgroundColor: "#ffffff",
        position: "relative",
        zIndex: 0,
      }}
    ></div>
  );
}
