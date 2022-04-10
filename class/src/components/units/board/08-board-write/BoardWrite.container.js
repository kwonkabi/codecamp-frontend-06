// 여기는 컨테이너 컴포넌트

import { useState } from "react";
import { useMutation } from "@apollo/client";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = async () => {
    await updateBoard({
      variables: {
        number: Number(router.query.mynumber), // 어떤 게시글을 수정할지 알아야 돼서 createBoard에서 보다 추가됨
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      },
    });
    alert("게시글 수정에 성공하였습니다!");
    router.push(`/08-05-boards/${router.query.mynumber}`);

    // const result = await updateBoard({
    //   variables: {
    //     number: Number(router.query.mynumber),
    //     writer: myWriter,
    //     title: myTitle,
    //     contents: myContents,
    //   },
    // });
    // alert("게시글 수정에 성공하였습니다!");
    // router.push(`/08-05-boards/${result.data.upateBoard.number}`);
  };

  const onClickCreate = async () => {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    alert("게시글 등록에 성공하였습니다!");
    router.push(`/08-05-boards/${result.data.createBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
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
      onClickCreate={onClickCreate}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
