import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import * as yup from "yup";

interface IisActiveProps {
  isActive: boolean;
}

interface IFormValues {
  writer?: String;
  password?: String;
  title?: String;
  contents?: String;
}

const Error = styled.div`
  color: red;
  font-size: 15px;
`;

const SubmitButton = styled.button`
  background-color: ${(props: IisActiveProps) =>
    props.isActive ? "yellow" : ""};
`;

const schema = yup.object({
  writer: yup.string().max(5).required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .max(8, "비밀번호는 최대 8자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
  title: yup.string().max(100, "제목은 100자 이내로 입력해 주세요."),
  contents: yup.string().max(1000, "내용은 1000자 이내로 입력해 주세요."),
});

export default function QuizReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호: <input type="password" {...register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      제목: <input type="text" {...register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      내용: <input type="text" {...register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <SubmitButton isActive={formState.isValid}>게시물 등록하기</SubmitButton>
    </form>
  );
}
