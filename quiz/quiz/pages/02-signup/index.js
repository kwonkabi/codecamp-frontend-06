import { useState } from 'react';

import {
  Auth,
  AuthNum,
  Blank,
  InnerBox,
  Input,
  Line,
  Message,
  OuterBox,
  Phone,
  PhoneBox,
  Register,
  Send,
 } from '../../styles/signup'


export default function SignupPage() {

  const [hello, setHello] = useState("안녕하세요");
  const [count, setCount] = useState(0);
  const [auth, setAuth] = useState("000000");
  const [email, setEmail] = useState();
  const [pw1, setPw1] = useState();
  const [pw2, setPw2] = useState();
  const [emailError, setEmailError] = useState();
  const [pw1Error, setPw1Error] = useState();
  const [pw2Error, setPw2Error] = useState();
  
  const onClickHello = () => {
    if (hello === "안녕하세요") {
      setHello("반갑습니다");
    }
  };

  const onClickCount = () => {
    setCount(count + 1);
  };

  const onClickAuth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    setAuth(token);
  };

  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChangePw1 = (event) => {
    const value = event.target.value;
    setPw1(value);
  };
  const onChangePw2 = (event) => {
    const value = event.target.value;
    setPw2(value);
  };

  const onClickSignup = () => {
    if (email.includes !== "@") {
      setEmailError("이메일 형식을 확인해주세요.")
    } else {
      setEmailError("");
    }
    if (pw1 !== pw2) {
      setPw1Error("비밀번호를 확인해주세요.");
      setPw2Error("비밀번호를 확인해주세요.");
    } else {
      setPw1Error("");
      setPw2Error("");
    }
  };

  return (
    <OuterBox>
      <InnerBox>
        <button onClick={onClickHello}>{hello}</button>

        <div>{count}</div>
        <button onClick={onClickCount}>카운트증가</button>

        <div>{auth}</div>
        <button onClick={onClickAuth}>인증번호전송</button>

        <Message>코드캠프 회원가입</Message>
        <Input>
          <div>
            <Blank id="email" type="text" placeholder="이메일을 입력해 주세요." onChange={onChangeEmail} />{email}
            <div id="errorEmail" class="error">{emailError}</div>
          </div>
          <div>
            <Blank type="password" id="pw1" placeholder="비밀번호를 입력해 주세요." onChange={onChangePw1} />{pw1}
            <Error id="errorPw1">{pw1Error}</Error>
          </div>
          <div>
            <Blank type="password" id="pw2" placeholder="비밀번호를 다시 입력해 주세요." onChange={onChangePw2} />{pw2}
            <Error id="errorPw2">{pw2Error}</Error>
          </div>
          <Phone>
            <PhoneBox id="phone1" oninput="changeFocus1()" type="text" maxlength="3">
            <div>-</div>
            <PhoneBox id="phone2" oninput="changeFocus2()" type="text" maxlength="4">
            <div>-</div>
            <PhoneBox id="phone3" type="text" oninput="pressSend()" maxlength="4">
          </Phone>
        </Input>

        <Auth>
          <AuthNum id="authNum">000000</AuthNum>
          <Send id="send" class="send" disabled onclick={onClickAuth}>인증번호 전송</Send>
        </Auth>

        <Line>
        <Register id="register" disabled onClick={onClickSignup}>가입하기</Register>
      </InnerBox>
    </OuterBox>
  )
};