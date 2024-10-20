import React from "react";
import { Container } from "./style";

const Card = React.forwardRef(({ service }, ref) => {
  return (
    <Container ref={ref}>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
    </Container>
  );
});

export default Card;