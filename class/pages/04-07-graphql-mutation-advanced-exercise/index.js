import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProduct() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  const onClickSubmit = async () => {
    await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: price,
        },
      },
    });
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={onChangeName} />
      <br />
      상품내용: <input type="text" onChange={onChangeDetail} />
      <br />
      상품가격: <input type="number" onChange={onChangePrice} />
      <br />
      <input type="number" />
      <button onClick={onClickSubmit}>상품 등록하기</button>
    </>
  );
}
