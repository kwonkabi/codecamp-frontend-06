import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UpdateIcon = styled(EditOutlined)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DeleteIcon = styled(DeleteOutlined)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
  color: ;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
