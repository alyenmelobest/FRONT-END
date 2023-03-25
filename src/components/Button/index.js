import * as C from "./styles";

export const Button = ({ title, onClick }) => {
  return <C.Button onClick={onClick}>{title}</C.Button>;
};