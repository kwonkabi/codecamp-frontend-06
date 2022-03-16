import { useState } from 'react';

import {
  Wrapper,
  Title,
  WriterWrapper,
  Writer,
  Password,
  Label,
  InputWrapper,
  Subject,
  Contents,
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  Address,
  Youtube,
  ImageWrapper,
  UploadButton,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
  Error
} from '../../../styles/emotion'

export default function BoardsNewPage(){

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContents] = useState("");
  const [address, setAddress] = useState("");
  const [youtube, setYoutube] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeError, setYoutubeError] = useState("");

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
  const onChangeAddress = (event) => {
    const value = event.target.value;
    setAddress(value);
  };
  const onChangeYoutube = (event) => {
    const value = event.target.value;
    setYoutube(value);
  };

  const onClickSubmit = () => {
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
    if (address === "") {
      setAddressError("주소를 작성해주세요.");
    } else {
      setAddressError("");
    }
    if (youtube === "") {
      setYoutubeError("유튜브 링크를 작성해주세요.");
    } else {
      setYoutubeError("");
    }
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
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address onChange={onChangeAddress}/>
        <Error>{addressError}</Error>
        <Address onChange={onChangeAddress}/>
        <Error>{addressError}</Error>
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