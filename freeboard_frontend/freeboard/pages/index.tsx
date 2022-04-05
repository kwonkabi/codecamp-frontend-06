import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 40%;
  height: 100vh;
  background: url("/images/landingpage/home.jpg");
  background-position: center;
  background-size: cover;
  &:hover {
    filter: invert(10%);
    transition: 1s;
  }
`;

export default function Home() {
  const router = useRouter();
  const onClickMoveToNew = () => {
    router.push("/boards/new");
  };

  return <Wrapper onClick={onClickMoveToNew}></Wrapper>;
}
