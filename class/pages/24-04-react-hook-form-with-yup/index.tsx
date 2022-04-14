import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

interface IisActiveProps {
  isActive: boolean;
}

const Error = styled.div`
  color: red;
  font-size: 15px;
`;

const LoginButton = styled.button`
  background-color: ${(props: IisActiveProps) =>
    props.isActive ? "yellow" : ""};
`;

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
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
      이메일: <input type="text" {...register("email")} />
      <Error>{formState.errors.email?.message}</Error>
      비밀번호: <input type="text" {...register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      <LoginButton isActive={formState.isValid}>로그인</LoginButton>
    </form>
  );
}
