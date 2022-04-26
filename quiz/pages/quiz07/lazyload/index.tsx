import React from "react";
import LazyLoad from "react-lazy-load";
import styled from "@emotion/styled";

const Img = styled.img`
  width: 500px;
  height: 500px;
`;

export default function LazyloadPage() {
  return (
    <>
      <div>
        <div className="filler" />
        <LazyLoad width={500} height={500}>
          <Img src="https://newsImg-hams.hankookilbo.com/2021/11/09/15423494-2006-403b-a665-6969a7b1aaa1.jpg" />
        </LazyLoad>
        <LazyLoad width={500} height={500}>
          <Img src="http://cdn.edujin.co.kr/news/photo/202105/35768_68227_247.jpg" />
        </LazyLoad>
        <LazyLoad width={500} height={500}>
          <Img src="https://t1.daumcdn.net/cfile/tistory/192F1C464DD57EB614" />
        </LazyLoad>
        <LazyLoad width={500} height={500}>
          <Img src="https://t1.daumcdn.net/cfile/tistory/154057574E11CDB437" />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={500}>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06ZBIQqHPIcy3xYc2gA5ThDo1oVhXFcyl38tOIePw6JmBI4Cr7NagWGbiwv-mh4vfGnU&usqp=CAU" />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={500}>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCHaiGzwSIDuZcoPQUih4oMNKAnymGPjTF_6ZPYHE_9vV6Ws8x2wiR0kK21v6RiN6RRo&usqp=CAU" />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={500}>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwh3VFREbAxnYsAuzUeONoz8ytfLCGIWyPoWrG2OzU7YGDtgxVgjfvKillWynGnM7qfs&usqp=CAU" />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={500}>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zDw9U4eo7wG9Dx3-0cvtRxrzIi1dbd63kg&usqp=CAU" />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={500}>
          <Img src="https://i.pinImg.com/550x/05/5f/2b/055f2bf2e34e410fffc5b7dc83c5ed61.jpg" />
        </LazyLoad>
        <LazyLoad height={500} offsetVertical={500}>
          <Img src="https://i.pinImg.com/236x/51/7b/fd/517bfd9ef990a21d3aafd5114c0828fe.jpg" />
        </LazyLoad>
      </div>
    </>
  );
}
