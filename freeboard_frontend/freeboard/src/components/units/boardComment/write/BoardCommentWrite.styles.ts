import styled from "@emotion/styled";
import { Rate } from "antd";
import { FormOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;

export const PencilIcon = styled(FormOutlined)`
  font-size: 20px;
  color: #f5818e;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  resize: none;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid lightgray;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Star = styled(Rate)`
  color: #f5818e;
`;
