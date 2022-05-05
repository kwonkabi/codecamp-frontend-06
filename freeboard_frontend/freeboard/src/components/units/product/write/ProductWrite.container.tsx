import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProductWriteUI from "./ProductWrite.presenter";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "./ProductWrite.queries";

export default function ProductWrite(props) {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const router = useRouter();
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);
  // const { data: data1 } = useQuery(FETCH_USED_ITEM)
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, setValue, getValues, trigger, reset } =
    useForm({
      // resolver: yupResolver(schema),
      mode: "onChange",
    });

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [gps, setGps] = useState({
    La: 0,
    Ma: 0,
  });

  const { data: data1 } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router?.query.useditemId },
  });

  // 지도
  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  // 에디터 입력 값 form으로 넘기기
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // const onChangeFileUrls = (fileUrl: string, index: number) => {
  //   const newFileUrls = [...imageUrls];
  //   newFileUrls[index] = fileUrl;
  //   setImageUrls(newFileUrls);
  // };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (address) => {
    setIsOpen((prev) => !prev);
    setAddress(address.address);
    setZipcode(address.zonecode);
    setAddressDetail("");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.images?.length) {
      setFileUrls([...props.data?.images]);
    }
  }, [props.data]);

  const onClickSubmit = async (data) => {
    console.log(data);
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: parseInt(data.price),
            tags: data.tags,
            useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
              lat: Number(lat),
              lng: Number(lng),
            },
            images: fileUrls,
          },
        },
      });
      alert("상품 등록에 성공하였습니다.");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  // 상품 수정하기
  const onClickUpdate = async (data) => {
    const updateVariables = {
      name: data.name ? data.name : props.data?.name,
      remarks: data.remarks ? data.remarks : props.data?.remarks,
      contents: data.contents ? data.contents : props.data?.contents,
      price: data.price ? parseInt(data.price) : parseInt(props.data?.price),
      // tags: hashArr,
      images: fileUrls,
      useditemAddress: {
        zipcode: data.zipcode
          ? data.zipcode
          : props.data?.useditemAddress.zipcode,
        address: data.address
          ? data.address
          : props.data?.useditemAddress.address,
        addressDetail: data.addressDetail
          ? data.addressDetail
          : props.data?.useditemAddress.addressDetail,
        lat: data.lat ? data.lat : props.data?.useditemAddress.lat,
        lng: data.lng ? data.lng : props.data?.useditemAddress.lng,
      },
    };

    try {
      await updateUsedItem({
        variables: {
          updateUseditemInput: updateVariables,
          useditemId: router.query.useditemId,
        },
      });
      alert("상품 수정에 성공하였습니다.");
      router.push(`/market/${router.query.useditemId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      setValue={setValue}
      getValues={getValues}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      isOpen={isOpen}
      data1={data1}
      onClickModal={onClickModal}
      onChangeAddressDetail={onChangeAddressDetail}
      address={address}
      zipcode={zipcode}
      addressDetail={addressDetail}
      setGps={setGps}
      gps={gps}
    />
  );
}
