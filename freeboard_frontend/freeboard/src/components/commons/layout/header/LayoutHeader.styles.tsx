import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  padding: 40px 273px 42px 300px;
  border-bottom: 1px solid #555555;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InnerWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

export const HeaderMenu = styled.div`
  font-size: 14px;
  cursor: pointer;
  font-style: italic;
`;

export const Basket = styled.div`
  width: 77px;
  display: flex;
  justify-content: space-between;
`;

export const BasketCount = styled.div`
  width: 20px;
  height: 20px;
  background-color: #f5818e;
  border-radius: 50%;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
`;
