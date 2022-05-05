import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { basketState } from "../../../../commons/store";
import PaymentPage from "../../payment";
import * as S from "./LayoutHeader.styles";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      _id
      userPoint {
        _id
        amount
      }
    }
  }
`;

export default function LayoutHeaderUI(props) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isOpen, setIsOpen] = useState(false);
  // const [basketItems, setBasketItems] = useState([]);
  const [basketItems, setBasketItems] = useRecoilState(basketState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // console.log(data?.fetchUserLoggedIn.userPoint.amount);
  // console.log(data?.fetchUserLoggedIn.userPoint._id);

  return (
    <>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <PaymentPage />
        </Modal>
      )}
      <S.Wrapper>
        <S.Logo onClick={props.onClickMoveToMain}>HENLO</S.Logo>
        <S.InnerWrapper>
          {data?.fetchUserLoggedIn ? (
            <>
              <S.HeaderMenu>{data?.fetchUserLoggedIn?.name}</S.HeaderMenu>
              <S.HeaderMenu>
                {" "}
                {data?.fetchUserLoggedIn?.userPoint.amount}P
              </S.HeaderMenu>
            </>
          ) : (
            <S.HeaderMenu onClick={props.onClickMoveToLogin}>
              LOGIN
            </S.HeaderMenu>
          )}
          {data ? (
            <S.HeaderMenu
              style={{ textDecorationLine: "underline" }}
              onClick={onToggleModal}
            >
              POINT
            </S.HeaderMenu>
          ) : (
            <></>
          )}
          {data && (
            <S.HeaderMenu onClick={props.onClickLogout}>LOGOUT</S.HeaderMenu>
          )}
          {!data && (
            <S.HeaderMenu onClick={props.onClickMoveToSignUp}>
              SIGNUP
            </S.HeaderMenu>
          )}
          <S.Basket>
            <S.HeaderMenu>BASKET</S.HeaderMenu>
            <S.BasketCount>{basketItems.length}</S.BasketCount>
          </S.Basket>
        </S.InnerWrapper>
      </S.Wrapper>
    </>
  );
}
