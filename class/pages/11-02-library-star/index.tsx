import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage(){

  const [value, setValue] = useState(3)

  const handleChange = (value: number) => {
    setValue(value)
  };

  // antdesign의 onChange임.
  return <Rate onChange={handleChange} value={value} />
}