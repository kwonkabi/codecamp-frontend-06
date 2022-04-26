import axios from "axios";
import styled from "@emotion/styled";
import { useState } from "react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  width: 25%;
`;

export default function QuizCallbackPromiseAsyncAwaitPage() {
  const [data, setData] = useState();

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send();
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = JSON.parse(res.target.response)["UserId"];

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          setData(JSON.parse(res.target.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setData(res.data);
      });
  };

  const onClickCAsyncAwait = async () => {
    let aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = aaa.data.split(" ")[0];
    const bbb = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = bbb.data.UserId;
    const result = await axios.get(
      `http://koreanjson.com/posts?userId=${userId}`
    );
    setData(result.data);
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback</button>
      <br />
      <button onClick={onClickPromise}>Promise</button>
      <br />
      <button onClick={onClickCAsyncAwait}>Asyncawait</button>
      <br />
      {data?.map((el) => (
        <Row key={el.id}>
          <Column>{el.UserId}</Column>
          <Column>{el.title}</Column>
          <Column>{el.content}</Column>
        </Row>
      ))}
    </div>
  );
}
