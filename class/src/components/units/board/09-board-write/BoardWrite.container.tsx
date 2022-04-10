// 여기는 컨테이너 컴포넌트

import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [callApi] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // 변경된 부분만 뮤테이션으로 보내주기
  const onClickUpdate = async () => {
    // 있는 것들로만 조합된 새로운 객체
    const myVariables: IMyVariables = { number: Number(router.query.mynumber) };

    // 한 줄 실행일 경우 중괄호 생략 가능
    // myOOO이라는 스테이트가 비어 있지 않으면(변경이 일어났다면) 그걸 새로운 객체의 OOO 값에 넣어줘!
    if (myWriter !== "") myVariables.writer = myWriter;
    if (myTitle !== "") myVariables.title = myTitle;
    if (myContents !== "") myVariables.contents = myContents;

    await updateBoard({
      // 그 새로운 객체를 통째로 variables에 넣는다
      variables: myVariables,
    });
    router.push(`/09-01-boards/${router.query.mynumber}`);
    alert("게시글 수정에 성공하였습니다!");
  };

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
    alert("게시글 등록에 성공하였습니다!");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      callGraphqlApi={callGraphqlApi}
      isActive={isActive}
      isEdit={props.isEdit} // 수정하기 페이지에서 넘어옴 -> 프레젠터로 넘김
      data={props.data} // 수정하기 페이지에서 넘어옴 -> 프레젠터로 넘김
    />
  );
}
