import styled from '@emotion/styled'

// * {box-sizing: border-box; margin: 0px}

export const OuterBox = styled.div`
  Width: 540px;
  Height: 960px;
  border: 1px solid #AACDFF;
  padding: 60px 80px 53px 78px;
  border-radius: 20px;
  box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
  margin: 30px;
`

export const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Message  = styled.div`
  width: 380px;
  height: 47p;
  font-size: 32px;
  font-weight: 700;
  color: #0068FF;
  margin-bottom: 20px;
`

export const Input = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Blank = styled.input`
  width: 380px;
  height: 60px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
  padding-left: 15px;
  font-size: 16px;
  font-weight: 400;
`

export const Error = styled.div`
  font-size: 11px;
  color: red;
  text-align: center;
`

export const Phone = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PhoneBox = styled.input`
  width: 100px;
  height: 100%;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`

export const Auth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`
export const AuthNum = styled.div`
  margin-right: 21px;
  font-size: 18px;
  font-weight: 400;
  color: #0068FF;
`

export const Send = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
  color: #D2D2D2;
  background-color: transparent;
`

export const Verified = styled.div`
  width: 120px;
  height: 40px;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
  color: #D2D2D2;
  background-color: transparent;
`

export const Line = styled.hr`
  border: 1px solid #E6E6E6;
  margin-top: 30px;
`

export const Register = styled.button`
  width: 100%;
  height: 75px;
  border-radius: 10px;
  border: 1px solid #D2D2D2;
  font-size: 18px;
  font-weight: 400
`