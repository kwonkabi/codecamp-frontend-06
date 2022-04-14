import styled from "@emotion/styled";

interface IisActiveProps {
  isActive: boolean;
}

interface IButtonProps {
  isActive: boolean;
  title: string;
}

const Button = styled.button`
  background-color: ${(props: IisActiveProps) =>
    props.isActive ? "yellow" : ""};
`;

export default function Button01(props: IButtonProps) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
