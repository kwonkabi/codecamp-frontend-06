import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: String;
  title?: String;
  contents?: String;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm();

  // 버튼 중복 클릭 방지 (formState.isSubmitting이 true면 버튼이 disabled되도록)
  formState.isSubmitting;

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크!!!!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      {/* 내용: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}
