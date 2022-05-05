import * as S from "./Signup.styles";

export default function SignupUI(props) {
  return (
    <S.Wrapper>
      <S.InnerWrapper onSubmit={props.handleSubmit(props.onClickSignUp)}>
        <S.SignupHeader>
          <S.Label>회원가입</S.Label>
          <S.LabelEng>Sign up</S.LabelEng>
        </S.SignupHeader>
        <S.SignupBody>
          <S.InputWrapper>
            아이디{" "}
            <S.Input
              placeholder=" 이메일 아이디를 @까지 정확하게 입력하세요"
              {...props.register("email")}
              onChange={props.onChangeEmail}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            비밀번호{" "}
            <S.Input
              type="password"
              placeholder=" 영문+숫자 조합 8~16자리를 입력해주세요"
              {...props.register("password")}
              onChange={props.onChangePassword}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            비밀번호 확인{" "}
            <S.Input
              type="password"
              placeholder=" 영문+숫자 조합 8~16자리를 입력해주세요"
              {...props.register("confirmPassword")}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            이름{" "}
            <S.Input
              placeholder=" Ex) 홍길동"
              {...props.register("name")}
              onChange={props.onChangeName}
            />
          </S.InputWrapper>
        </S.SignupBody>
        <S.ButtonWrapper>
          <S.SignupButton type="submit">회원가입하기</S.SignupButton>
          <S.CancelButton>취소</S.CancelButton>
        </S.ButtonWrapper>
        <S.SinguptoLogin>
          <S.LoginQ>이미 아이디가 있으신가요?</S.LoginQ>
          <S.Login onClick={props.onClickMoveToLogin}>로그인</S.Login>
        </S.SinguptoLogin>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
