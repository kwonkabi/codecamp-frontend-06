import styled from "@emotion/styled";

interface IisActiveProps {
  isActive: boolean;
}

const Button = styled.button`
  background-color: ${(props: IisActiveProps) =>
    props.isActive ? "yellow" : ""};
`;

interface IButtonProps {
  isActive: boolean;
  title: "text";
}

export default function Button01(props: IButtonProps) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
