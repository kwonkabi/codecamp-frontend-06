import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 100px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const H3 = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 800px;
`;

export const Container = styled.div`
  background-color: pink;
  padding: 100px 100px 100px 100px;
`;

export default function LayoutBanner() {
  return (
    <Container>
      <Wrapper>배너영역</Wrapper>
      <Slider {...settings}>
        <div>
          <H3 src="/image/cat.png"></H3>
        </div>
        <div>
          <H3 src="/image/cat2.png"></H3>
        </div>
        <div>
          <H3 src="/image/cat3.png"></H3>
        </div>
        <div>
          <H3 src="/image/cat4.png"></H3>
        </div>
        <div>
          <H3 src="/image/cat5.png"></H3>
        </div>
      </Slider>
    </Container>
  );
}
