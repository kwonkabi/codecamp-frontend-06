// 여기는 프레젠터 컴포넌트

import { IBoardWriteUIProps } from "./BoardWrite.types";
import * as S from "./BoardWrite.style";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      작성자:{" "}
      <S.WriterInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer} // 수정하기 페이지 -> 컨테이너 -> 프레젠터로 prop으로 넘어옴, 수정하기일 때만 있을 것이기 때문에 옵셔널 체이닝 사용
      />
      <br />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title} // 수정하기 페이지 -> 컨테이너 -> 프레젠터로 prop으로 넘어옴, 수정하기일 때만 있을 것이기 때문에 옵셔널 체이닝 사용
      />
      <br />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents} // 수정하기 페이지 -> 컨테이너 -> 프레젠터로 prop으로 넘어옴, 수정하기일 때만 있을 것이기 때문에 옵셔널 체이닝 사용
      />
      <br />
      <S.SubmitButton
        onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi}
        isActive={props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.SubmitButton>
    </div>
  );
}
