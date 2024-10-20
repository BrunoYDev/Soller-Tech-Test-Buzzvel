import styled from "styled-components";

export const Container = styled.section`

    margin-top: 50px;
    display: flex;

/* Mobile (until 768px) */
@media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {}
`;

export const TextContainer = styled.div`
    
`;

export const Title = styled.h2`
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    color: #D97706;
    text-align: center;
`;

export const Subtitle = styled.h3`
    margin: 10px 0 0 0;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
`;

export const StyledText = styled.p`
    margin: 20px 0 0 0;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
`;

export const StyledFigure = styled.figure`

    

`;