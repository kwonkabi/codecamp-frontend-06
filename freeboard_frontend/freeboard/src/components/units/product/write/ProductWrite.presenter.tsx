import * as S from "./ProductWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from "uuid";

// import KakaoMap01 from "../../../commons/kakoMaps/01";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import KakaoMap from "../../../../commons/kakoMaps/00";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ProductWriteUI = (props) => {
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdate : props.onClickSubmit
        )}
      >
        <S.Header>
          <S.HeaderTitle>
            {props.isEdit ? "상품 수정" : "상품 등록"}
          </S.HeaderTitle>
        </S.Header>
        <S.Body>
          <S.InputWrapper>
            <S.Label>상품명</S.Label>
            <S.Input
              placeholder="상품명을 작성해주세요"
              {...props.register("name")}
              defaultValue={props.data1?.fetchUseditem.name || ""}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 요약</S.Label>
            <S.Input
              placeholder="상품 요약을 작성해주세요"
              {...props.register("remarks")}
              defaultValue={props.data1?.fetchUseditem.remarks}
            />
          </S.InputWrapper>
          <S.EditorWrapper>
            <S.Label>상품 설명</S.Label>
            <ReactQuill
              style={{ width: "1117px", height: "389px" }}
              placeholder="상품을 설명해주세요"
              onChange={props.onChangeContents}
              defaultValue={props.data1?.fetchUseditem.contents}
              theme="snow"
            />
          </S.EditorWrapper>
          <S.InputWrapper>
            <S.Label>판매 가격</S.Label>
            <S.Input
              type="number"
              {...props.register("price")}
              defaultValue={props.data1?.fetchUseditem.price}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>태그 입력</S.Label>
            <S.Input
              type="text"
              placeholder="#태그 #태그 #태그"
              {...props.register("tags")}
            />
          </S.InputWrapper>
          <S.Label>거래 위치</S.Label>
          <S.LocationWrapper>
            <KakaoMap
              address={
                props.address
                  ? props.address
                  : props.data?.fetchUseditem.useditemAddress.address || ""
              }
              setGps={props?.setGps}
            />
            <S.AddressWrapper>
              <S.ZipcodeWrapper>
                <S.ZipCode
                  value={
                    props.zipcode
                      ? props.zipcode
                      : props.data?.fetchUseditem.useditemAddress?.zipcode
                  }
                  readOnly={true}
                />
                <S.ZipCodeButton onClick={props.onClickModal}>
                  우편번호 검색
                </S.ZipCodeButton>
                {props.isOpen && (
                  <Modal
                    visible={true}
                    title={"우편번호 검색"}
                    onOk={props.onClickModal}
                    onCancel={props.onClickModal}
                  >
                    <DaumPostcode onComplete={props.onClickPostCode} />
                  </Modal>
                )}
              </S.ZipcodeWrapper>
              {/* <S.MapDetailWrapperBottom> */}
              <S.Address
                readOnly={true}
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress?.address ||
                  ""
                }
              />
              <S.AddressDetail
                placeholder="상세 주소를 입력하세요"
                onChange={props.onChangeAddressDetail}
                value={
                  props.addressDetail ||
                  props.data?.fetchUseditem.useditemAddress?.addressDetail ||
                  ""
                }
              />
              {/* </S.MapDetailWrapperBottom> */}
            </S.AddressWrapper>
          </S.LocationWrapper>
          {/* <KakaoMap
          register={props.register}
          setValue={props.setValue}
          defaultValue={props.data?.useditemAddress}
          isEdit={props.isEdit}
        /> */}
          <S.Label>사진 첨부</S.Label>
          <S.UploadImages>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.UploadImages>
        </S.Body>
        <div>
          <S.CancelButton>취소</S.CancelButton>
          <S.SubmitButton type="submit">
            {props.isEdit ? "수정" : "등록"}
          </S.SubmitButton>
        </div>
      </S.Wrapper>
    </>
  );
};

export default ProductWriteUI;
