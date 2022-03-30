import styled from "@emotion/styled";
import LayoutHeader from "../../src/components/commons/layout/header";
import LayoutBanner from "../../src/components/commons/layout/banner";
import LayoutNavigation from "../../src/components/commons/layout/navigation";
import LayoutFooter from "../../src/components/commons/layout/footer";

const BodyWrapper = styled.div`
  display: flex;
`;

const LayoutSidebar = styled.div`
  300px;
  background-color: skyblue;
`;

const Body = styled.div`
  width: 100px;
  height: 300px;
`;

export default function QuizLayoutPage() {
  return (
    <div>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>사이드바 영역</LayoutSidebar>
        <Body></Body>
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}
