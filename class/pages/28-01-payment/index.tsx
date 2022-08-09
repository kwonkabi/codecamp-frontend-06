import { useState } from "react";
import Head from "next/head"; // HTML 사용하기 위해 import해주기 (넥스트 없이 리액트만 쓰면 helmet)

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const [amount, setAmount] = useState(100);

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp10377015"); // Example: imp00000000 // 가맹점 식별코드: 개인포폴은 imp49910675, 팀프로젝트 시에는 따로 구축
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 중복 불가: 없애버리면 랜덤 id가 주어짐
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment", // 모바일에서는 주소가 바뀌기 때문에 돌아올 곳을 지정해줘야 함
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 백엔드에 결제 관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
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
      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}
