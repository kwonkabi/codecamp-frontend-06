import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const BodyWrapper = styled.div`
  display: flex;
`;

const LayoutSidebar = styled.div`
  600px;
  background-color: skyblue;
`;

const Body = styled.div`
  width: 100%;
  height: 600px;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function QuizLayoutPage(props: ILayoutProps) {
  return (
    <div>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>사이드바 영역</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}
