/* eslint-disable @next/next/no-sync-scripts */
import { ChangeEvent, useState } from "react";
import Head from "next/head"; // HTML 사용하기 위해 import해주기 (넥스트 없이 리액트만 쓰면 helmet)
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { gql, useMutation } from "@apollo/client";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

const Point = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default function PaymentPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.id));
  };

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000 // 가맹점 식별코드: 개인포폴은 imp49910675, 팀프로젝트 시에는 따로 구축
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 중복 불가: 없애버리면 랜덤 id가 주어짐
        name: "포인트 충전",
        amount: amount,
        buyer_email: "aaaaa@zzzzz.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz06/payment/complete",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          router.push("/market");
          // 백엔드에 결제 관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
          const result = createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          console.log("결제", result);
          alert("결제가 완료되었습니다!");
          // ex. createPointTransactionOfLoading // 포폴에 추가하려면 이거에 관한 백엔드가 마련되어 있어야 가능함
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Point>
        <h3>충전하실 금액을 선택해 주세요!</h3>
        {/* <select>
          <option disabled selected>
            포인트를 선택하세요.
          </option>
          <option id="100" onChange={onChangePrice}>
            100
          </option>
          <option id="500" onChange={onChangePrice}>
            500
          </option>
          <option id="2000" onChange={onChangePrice}>
            2,000
          </option>
          <option id="5000" onChange={onChangePrice}>
            5,000
          </option>
        </select> */}
        <div>
          <input type="radio" name="price" id="500" onChange={onChangePrice} />
          500
          <br />
          <input type="radio" name="price" id="1000" onChange={onChangePrice} />
          1,000
          <br />
          <input type="radio" name="price" id="2000" onChange={onChangePrice} />
          2,000
          <br />
          <input type="radio" name="price" id="5000" onChange={onChangePrice} />
          5,000
          <br />
        </div>
        <button onClick={requestPay}>충전하기</button>
      </Point>
    </div>
  );
}
