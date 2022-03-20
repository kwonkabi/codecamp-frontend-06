import { useState } from 'react';
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import {
  Wrapper, Title, WriterWrapper, Writer, Password, Label, InputWrapper, Subject, Contents, ZipcodeWrapper, Zipcode, SearchButton, Address, AddressDetail, Youtube, ImageWrapper, UploadButton, OptionWrapper, RadioButton, RadioLabel, ButtonWrapper, SubmitButton, Error
} from '../../../styles/routing'

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
      youtubeUrl
    }
  }
`

const DynamicRoutingBoardPage = () => {

  const router = useRouter()

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtube, setYoutube] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [addressDetailError, setAddressDetailError] = useState("");
  const [youtubeError, setYoutubeError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {

 
      if (writer === "") {
        setWriterError("이름을 적어주세요.");
      } else {
        setWriterError("");
      }
      if (password === "") {
        setPasswordError("비밀번호를 작성해주세요.");
      } else {
        setPasswordError("");
      }
      if (subject === "") {
        setSubjectError("제목을 작성해주세요.");
      } else {
        setSubjectError("");
      }
      if (contents === "") {
        setContentsError("내용을 작성해주세요.");
      } else {
        setContentsError("");
      }
      if (zipcode.length !== 5) {
        setZipcodeError("");
      } else {
        setZipcodeError("");
      }
      if (address === "") {
        setAddressError("주소를 작성해주세요.");
      } else {
        setAddressError("");
      }
      if (addressDetail === "") {
        setAddressDetailError("상세 주소를 작성해주세요.");
      } else {
        setAddressDetailError("");
      }
      if (youtube === "") {
        setYoutubeError("유튜브 링크를 작성해주세요.");
      } else {
        setYoutubeError("");
      }
      if (
        writer !== "" &&
        password !== "" &&
        subject !== "" &&
        contents !== "" &&
        zipcode.length === 5 &&
        address !== "" &&
        addressDetail !== "" &&
        youtube !== ""){

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: subject,
              contents: contents,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail
              },
              // images: [images]
            }
          }
        })
        alert("게시물이 등록되었습니다.")
        console.log(result)
        console.log(result.data.createBoard._id)
        router.push(`board/${result.data.createBoard._id}`)
      } catch (error) {
        alert (error.message)
      }
    }
  }

  const onChangeWriter = (event) => {
    const value = event.target.value;
    setWriter(value);
  };
  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const onChangeSubject = (event) => {
    const value = event.target.value;
    setSubject(value);
  };
  const onChangeContents = (event) => {
    const value = event.target.value;
    setContents(value);
  };
  const onChangeZipcode = (event) => {
    const value = event.target.value;
    setZipcode(value);
  };
  const onChangeAddress = (event) => {
    const value = event.target.value;
    setAddress(value);
  };
  const onChangeAddressDetail = (event) => {
    const value = event.target.value;
    setAddressDetail(value);
  };
  const onChangeYoutube = (event) => {
    const value = event.target.value;
    setYoutube(value);
  };

  return (
    <Wrapper>
      <Title>게시판 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" onChange={onChangeWriter} />
          <Error>{writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" onChange={onChangePassword} />
          <Error>{passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" onChange={onChangeSubject} />
        <Error>{subjectError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents onChange={onChangeContents} />
        <Error>{contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" onChange={onChangeZipcode}/>
          <SearchButton>우편번호 검색</SearchButton>
          <Error>{zipcodeError}</Error>
        </ZipcodeWrapper>
        <Address onChange={onChangeAddress}/>
        <Error>{addressError}</Error>
        <AddressDetail onChange={onChangeAddressDetail}/>
        <Error>{addressDetailError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube onChange={onChangeYoutube} />
        <Error>{youtubeError}</Error>
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default DynamicRoutingBoardPage