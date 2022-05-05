import * as S from "./Login.styles";

export default function LoginUI(props) {
  return (
    <S.Wrapper>
      <S.InnerWrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.LoginHeader>
          <S.Label>로그인</S.Label>
          <S.LabelEng>Login</S.LabelEng>
        </S.LoginHeader>
        <S.LoginBody>
          <S.Input
            type="text"
            placeholder="아이디"
            {...props.register("email")}
            onChange={props.onChangeEmail}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.Input
            type="password"
            placeholder="비밀번호"
            {...props.register("password")}
            onChange={props.onChangePassword}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
        </S.LoginBody>
        <S.LoginButton onClick={props.onClickLogin}>로그인</S.LoginButton>
        <S.LoginToSignup>
          <S.SignupQ>아직 계정이 없으신가요?</S.SignupQ>
          <S.Signup onClick={props.onClickMoveToSignup}>회원가입</S.Signup>
        </S.LoginToSignup>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
