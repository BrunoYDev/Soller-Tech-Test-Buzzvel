import React from "react";
import { Container, Desc, Name, Text, TextContainer, UserField } from "./style";

function FifthSectionCard({opinion}) {

    
      return (
        <Container>
            <Text>{opinion.text}</Text>
            <UserField>
            <img src={opinion.pic} alt="profile picture" />
            <TextContainer>
                <Name>{opinion.name}</Name>
                <Desc>{opinion.desc}</Desc>
            </TextContainer>
            </UserField>
            
        </Container>
      );
}

export default FifthSectionCard
