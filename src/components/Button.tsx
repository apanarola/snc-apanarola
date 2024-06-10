import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = {
  clickHandler: React.MouseEventHandler<HTMLElement>;
  isSelected: Boolean;
};

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children = <></>,
  clickHandler = () => {},
  isSelected = false,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        `px-2 py-1 border  ${isSelected ? "bg-black  text-white" : "border-black bg-transparent"}`,
      )}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
