import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 64px;
  margin-left: 274px;
`;

export const Sell = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  font-style: italic;
  border: 1px solid #f5818e;
`;

export const ItemWrapper = styled.div`
  width: 250px;
  height: 320px;
  margin: 16px;
  border: 1px solid black;
`;

export const ItemImageWrapper = styled.div`
  width: 248px;
  height: 221px;
`;

export const ItemImage = styled.img`
  width: 248px;
  height: 221px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ItemName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const PriceTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const ItemTime = styled.div`
  font-size: 12px;
  color: #a9a9a9;
`;
