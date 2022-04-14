import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: String;
  password?: String;
  title?: String;
  contents?: String;
}

export default function QuizReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
    if (!data.writer) {
      setWriterError("이름을 입력해 주세요.");
    }
    if (!data.password) {
      setPasswordError("비밀번호를 입력해 주세요.");
    }
    if (!data.title) {
      setTitleError("제목을 입력해 주세요.");
    }
    if (!data.contents) {
      setContentsError("내용을 입력해 주세요.");
    }
    if (data.writer && data.password && data.title && data.contents)
      alert("게시글이 등록되었습니다.");
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{writerError}</div>
      비밀번호: <input type="password" {...register("password")} />
      <div style={{ color: "red" }}>{passwordError}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{titleError}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{contentsError}</div>
      <button>게시물 등록하기</button>
    </form>
  );
}
