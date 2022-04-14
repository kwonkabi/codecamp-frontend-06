import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

const Input = styled.input``;

interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IInputProps) {
  return <Input type={props.type} {...props.register} />;
}
