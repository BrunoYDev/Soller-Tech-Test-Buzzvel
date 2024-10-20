import React from "react";
import { StyledAnchor, StyledButton } from "./style";
import { FaArrowRight } from 'react-icons/fa';

function Button({color, backcolor, textcolor}) {

  return (
    <StyledAnchor href="" backcolor={backcolor} textcolor={textcolor} ><StyledButton color={color}>Request a Quote <FaArrowRight /></StyledButton></StyledAnchor>
  )
}

export default Button
