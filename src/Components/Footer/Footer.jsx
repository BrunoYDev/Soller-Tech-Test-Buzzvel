import React from "react";
import { Container } from "./style";
import logoImage from "../../assets/logo.png";

function Footer() {

  return (
    <Container>
        <img src={logoImage} alt="Soller Logo" />
        <h2>@ 2023 Soller, Inc. All rights reserved.</h2>
        <nav>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Support</a>
        </nav>
    </Container>
  )
}

export default Footer
