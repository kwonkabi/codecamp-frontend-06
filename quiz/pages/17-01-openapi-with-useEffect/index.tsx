import axios from "axios";
import { useEffect, useState } from "react";

export default function QuizOpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const view = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    view();
  }, []);

  return (
    <div>
      <img src={dogUrl} />
    </div>
  );
}
