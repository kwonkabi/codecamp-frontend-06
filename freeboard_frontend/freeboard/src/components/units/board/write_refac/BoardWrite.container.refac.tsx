import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter.refac";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries.refac";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types.refac";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });
  const [inputErrors, setInputErrors] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newInputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(newInputs);

    if (event.target.value)
      setInputErrors((prev) => ({ ...prev, [event.target.id]: "" }));

    const isActive = Object.values(newInputs).every((el) => el);
    setIsActive(isActive);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onClickSubmit = async () => {
    setInputErrors({
      writer: inputs.writer ? "" : "???????????? ??????????????????.",
      password: inputs.password ? "" : "??????????????? ??????????????????.",
      title: inputs.title ? "" : "????????? ??????????????????.",
      contents: inputs.contents ? "" : "????????? ??????????????????.",
    });
    if (Object.values(inputs).every((el) => el)) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        console.log(result);
        Modal.success({ content: "????????? ????????? ?????????????????????!" });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async () => {
    if (
      !inputs.title &&
      !inputs.contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode
    ) {
      alert("????????? ????????? ????????????.");
      return;
    }

    if (!inputs.password) {
      alert("??????????????? ??????????????????.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: inputs.password,
          updateBoardInput,
        },
      });
      Modal.success({ content: "????????? ????????? ?????????????????????!" });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <BoardWriteUI
      isActive={isActive}
      inputErrors={inputErrors}
      onChangeInput={onChangeInput}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
    />
  );
}
