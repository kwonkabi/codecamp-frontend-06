import {
  MyPage, 
  Wrapper, 
  MyTitle, 
  MyHeadWrapper, 
  MyLittleWrapper, 
  MySmallTitle, 
  MySmallInput, 
  MyMiddleWrapper, 
  MyMiddleInput, 
  MyMiddleText, 
  MyMiddleTextArea,
  MyAddrWrapper, 
  MyAddrCode, 
  MyAddrCodeInput, 
  MyAddrBtn, 
  MyAddrWrappert,
  MyPhotoBody, 
  MyPhotoWrapper, 
  MyPhotoBtn, 
  MyPhotoSpanPlus, 
  MyPhotoSpanUp, 
  MyMain, 
  MyMainDiv, 
  MyMainRadio, 
  MyRegisterBtnDiv, 
  MyRegisterBtn
} from '../../../styles/emotion'


export default function RegisterPage() {
  return (
    <MyPage>
      <Wrapper>
        <MyTitle>게시물 등록</MyTitle>
        <MyHeadWrapper>
          <MyLittleWrapper>
            <MySmallTitle>작성자</MySmallTitle>
            <MySmallInput type="text" placeholder='이름을 적어주세요' />
          </MyLittleWrapper>
          <MyLittleWrapper>
            <MySmallTitle>비밀번호</MySmallTitle>
            <MySmallInput type="password" placeholder='비밀번호를 입력해주세요' />
          </MyLittleWrapper>     
        </MyHeadWrapper>
        <MyMiddleWrapper>
          <MySmallTitle>제목</MySmallTitle>
          <MyMiddleInput type='text' placeholder='제목을 작성해주세요.' />
        </MyMiddleWrapper>
        <MyMiddleTextArea>
          <MySmallTitle>내용</MySmallTitle>
          <MyMiddleText type='textarea' placeholder='내용을 작성해주세요.' />
        </MyMiddleTextArea>
        <MyAddrWrapper>
          <MySmallTitle>주소</MySmallTitle>
          <MyAddrCode>
            <MyAddrCodeInput type='text' placeholder='07250'/>
            <MyAddrBtn>우편번호 검색</MyAddrBtn>
          </MyAddrCode>
          <MyMiddleInput type='text' />
        </MyAddrWrapper>
        <MyAddrWrappert>
          <MyMiddleInput type='text'></MyMiddleInput>
        </MyAddrWrappert>
        <MyMiddleWrapper>
          <MySmallTitle>유튜브</MySmallTitle>
          <MyMiddleInput type='text' placeholder='링크를 복사해주세요' />
        </MyMiddleWrapper>
        <MyPhotoBody>
          <MySmallTitle>사진첨부</MySmallTitle>
          <MyPhotoWrapper>
            <MyPhotoBtn>
              <MyPhotoSpanPlus>+</MyPhotoSpanPlus>
              <MyPhotoSpanUp>upload</MyPhotoSpanUp>
            </MyPhotoBtn>
            <MyPhotoBtn>
              <MyPhotoSpanPlus>+</MyPhotoSpanPlus>
              <MyPhotoSpanUp>upload</MyPhotoSpanUp>
            </MyPhotoBtn>
            <MyPhotoBtn>
              <MyPhotoSpanPlus>+</MyPhotoSpanPlus>
              <MyPhotoSpanUp>upload</MyPhotoSpanUp>
            </MyPhotoBtn>
          </MyPhotoWrapper>
        </MyPhotoBody>
        <MyMain>
          <MyMainDiv>
            <MyMainRadio type="radio" id="youtubeRadio" name="drone"  /><label for="youtubeRadio">유튜브</label>
          </MyMainDiv>
          <MyMainDiv>
            <MyMainRadio type="radio" id="pictureRadio" name="drone"  /><label for="pictureRadio">사진</label>
          </MyMainDiv>
        </MyMain>
        <MyRegisterBtnDiv>
          <MyRegisterBtn>등록하기</MyRegisterBtn>
        </MyRegisterBtnDiv>
      </Wrapper>
    </MyPage>
  )
}
