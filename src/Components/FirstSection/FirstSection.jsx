import React from "react";
import { Container, ImageContainer, MessageContainer, StyledDot, StyledFigure, TextContainer } from "./Style";
import maskedImage from "../../assets/maskedImage.png"
import Button from "../Button/Button";
import rwandaProfile from "../../assets/rwandamelfior.jpg"

function FirstSection() {

  return (
    <Container>
      <ImageContainer>
        <StyledFigure>
            <img src={maskedImage} alt="Masked Image of a construct worker" loading="lazy"/>
        </StyledFigure>
      </ImageContainer>
      <StyledDot></StyledDot>
    <TextContainer>
        <h2>Get the Sun to Power Your Home</h2>
        <p>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
        <Button color="#581C87" backcolor="#581C87" textcolor="#FCD34D"/>
    </TextContainer>
    <MessageContainer>
        <p>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
        <div>
            <figure><img src={rwandaProfile} alt="Rwanda Melfior Profile Picture" loading="lazy"/></figure>
            <div id="textSeparation">
                <h3>Rwanda Melflor</h3>
                <h4>zerowaste.com</h4>
            </div>  
        </div>
    </MessageContainer>
    </Container>
  )
}

export default FirstSection
