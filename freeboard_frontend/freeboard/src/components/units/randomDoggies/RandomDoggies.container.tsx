// import axios from "axios";
// import { useEffect, useState } from "react";
// import RandomDoggiesUI from "./RandomDoggies.presenter";

// export default function RandomDoggies() {
//   const [dogUrls, setDogUrls] = useState("");

//   useEffect(() => {
//     const getImg = async () => {
//       new Array(9).fill(1).map(async (_) => {
//         const result: any = await axios.get(
//           "https://dog.ceo/api/breeds/image/random"
//         );
//         setDogUrls((prev) => [...prev, result.data.message]);
//       });
//     };
//     getImg();
//   }, []);
//   return <RandomDoggiesUI dogUrls={dogUrls} />;
// }
