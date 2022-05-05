import { ReactNode } from "react";
import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import { useRouter } from "next/router";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutSidebar from "./sidebar/LayoutSidebar.container";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 사이드바는 여기에 직접 이모션 적용
// const LayoutSidebar = styled.div`
//   width: 400px;
//   height: 2500px;
//   background-color: beige;
// `

const HIDDEN_PAGE = ["/"];

export interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHidden = HIDDEN_PAGE.includes(router.asPath);

  let isMarket;
  if (router.asPath.includes("market")) {
    isMarket = true;
  }

  return (
    <>
      {!isHidden && <LayoutHeader />}
      {!isHidden && <LayoutBanner />}
      {!isHidden && <LayoutNavigation />}
      {!isHidden && isMarket && <LayoutSidebar />}
      <Body>{props.children}</Body>
      {!isHidden && <LayoutFooter />}
    </>
  );
}
