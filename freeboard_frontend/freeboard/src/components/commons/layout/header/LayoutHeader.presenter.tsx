import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

interface IProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToSignUp: () => void;
}
export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>HENLO!</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>Log-in</InnerButton>
          <InnerButton onClick={props.onClickMoveToSignUp}>Sign-up</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
