import React from "react";
import { Btn } from "./style";

const Button = ({ className, onClick, title, text, type }) => {
  return (
    <Btn className={className} title={title} type={type} onClick={onClick}>
      {text}
    </Btn>
  );
};

export default Button;
