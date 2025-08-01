import { ButtonSpace } from "./ButtonStyled";

export function Button({ type, text, onClick }) {
  return (
    <ButtonSpace onClick={onClick} type={type}>
      {text}
    </ButtonSpace>
  );
}
