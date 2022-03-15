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
  SubmitButton
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
  const [contentError, setContentsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeError, setYoutubeError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (writer === "") {
      setWriterError("이름을 적어주세요.");
    } else {
      setWriterError("");
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (password === "") {
      setPasswordError("비밀번호를 작성해주세요.");
    } else {
      setPasswordError("");
    }
  };
  const onChangeSubject = (event) => {
    setSubject(event.target.value);
    if (subject === "") {
      setSubjectError("제목을 작성해주세요.");
    } else {
      setSubjectError("");
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (content === "") {
      setContentsError("내용을 작성해주세요.");
    } else {
      setContentsError("");
    }
  };
  const onChangeAddress = (event) => {
    setAddress(event.target.value);
    if (address === "") {
      setAddressError("주소를 작성해주세요.");
    } else {
      setAddressError("");
    }
  };
  const onChangeYoutube = (event) => {
    setYoutube(event.target.value);
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
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" onChange={onChangePassword} />
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" onChange={onChangeSubject} />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents onChange={onChangeContents} />
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address onChange={onChangeAddress}/>
        <Address onChange={onChangeAddress}/>
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube onChange={onChangeYoutube} />
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
        <SubmitButton>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  )
}