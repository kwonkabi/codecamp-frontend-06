import { useState } from "react";

const HashTagPage = () => {
  const [hashtag, setHashTag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <div>
        <span>
          {hashArr.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
};

export default HashTagPage;
