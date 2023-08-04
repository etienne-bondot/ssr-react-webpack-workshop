import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: VoidFunction;
}

const Button = ({ onClick, children }: Props): ReactElement => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
