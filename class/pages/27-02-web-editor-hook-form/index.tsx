// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    // html 태그의 onChange가 아니라 라이브러리 속성이기 때문에 event 사용 X
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    // 칸을 비워도 <h1><br></h1>얘가 들어 있기 때문
    setValue("contents", value === "<h1><br></h1>" ? "" : value);
    // 내용:태그에 들은 onChange는 가짜야! onChange 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  return (
    <div>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
