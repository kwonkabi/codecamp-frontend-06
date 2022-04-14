import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";
import styled from "@emotion/styled";

const Error = styled.div`
  color: red;
  font-size: 15px;
`;

// 아래 schema는 컴포넌트 분리 시, .validation.ts라는 파일로 보관하기
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요."),
});

interface IFormValues {
  email?: String;
  password?: String;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema), // '만든 스키마를 검증하겠다'
    mode: "onChange", // 변경되자마자 검증 시작 (페이지에서 일단 로그인버튼 눌러야만 검증 시작되는 문제 해결)
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크!!!!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일: <input type="text" {...register("email")} /> */}
      이메일: <Input01 type="text" register={register("email")} />
      <Error>{formState.errors.email?.message}</Error>
      {/* 비밀번호: <input type="text" {...register("password")} /> */}
      비밀번호: <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      {/* <LoginButton isActive={formState.isValid}>로그인</LoginButton> */}
      <Button01 isActive={formState.isValid} title="로그인하기" />
    </form>
  );
}

// type, register, title, isActive는 내가 만든 프롭스!! mytype, myregister로 기억하자~!
