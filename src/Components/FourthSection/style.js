import styled from "styled-components";

export const Container = styled.section`
    margin-top: 50px;
    display: flex;
    position: relative;
    width: 100vw;
    overflow: hidden;

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

export const StyledList = styled.ul`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;

/* Mobile (until 768px) */
@media (max-width: 768px) {
    gap: 80px;
    list-style: none;
    padding: 15px;
    margin-top: 100px;
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {}

`;

export const StyledBubble = styled.div`

    width: 600px;
    height: 400px;
    background-color: #FBBF24;
    border-radius: 150% 0% 150% 150%;
    z-index: -1;
    opacity: 0;

/* Mobile (until 768px) */
@media (max-width: 768px) {
    position: absolute;
    right: -238px;
    bottom: 120px;
    transform: rotate(-30deg);
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {}

`;

export const StyledFigure = styled.figure`

    margin: 0;
    padding: 0;
    position: relative;

    align-self: center;
    img{
        width: 100%;
        object-fit: contain;
    }

/* Mobile (until 768px) */
@media (max-width: 768px) {
    width: 300px;
}

/* Mobile (until 480px) */
@media (max-width: 480px) {
    width: 270px;
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {}

`;

export const CellphoneBlocks = styled.div`

    display: flex;
    position: absolute;
    left: 30px;
    top: 60%;
    gap: 0px;
    margin: 0;
    padding: 0;

    img{
        margin-left: 20px;
        padding: 0;
        width: 60%;
    }

/* Mobile (until 768px) */
@media (max-width: 768px) {
    
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {}

`;