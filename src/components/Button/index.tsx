import React, { ReactNode } from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  onClick?: () => void;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button type={type} className={style.botao} onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
