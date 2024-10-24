import React from "react";
import { Container, PurpleCircle } from "./style";
import Button from "../Button/Button";
import macbookImage from "../../assets/macbook.png";

function SixthSection() {

  return (
    <Container>
        <PurpleCircle></PurpleCircle>
        <div id="subContainer">
        
        <div id="textContainer">
          <h2>Get the Sun to power your home</h2>
          <h3>All the power that you need for your house is now available</h3>
        </div>
        
        
          <div id="buttonContainer">
            <Button color="#FCD34D" backcolor="#FCD34D" textcolor="#78350F" />
            <h4>Egestas fringilla aliquam leo</h4>
          </div>

        </div>
        <img src={macbookImage} alt="Macbook Image" />
    </Container>
  )
}

export default SixthSection
