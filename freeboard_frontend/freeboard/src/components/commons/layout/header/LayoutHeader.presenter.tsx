import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

interface IProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
}
export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>HENLO!</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>Log-in</InnerButton>
          <InnerButton>Sign-up</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
