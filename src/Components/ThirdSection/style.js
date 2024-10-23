import styled from "styled-components";

export const Container = styled.section`
    margin-top: 50px;
    display: flex;
    position: relative;
    width: 100vw;
    overflow: hidden;
    flex-direction: column;
    align-items: flex-end;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row-reverse;
    align-items: center;
}

`;

export const TextContainer = styled.div`
/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding: 0 100px;
}

/* Desktop (above 1900px) */
@media (min-width: 1900px) {
    margin-top: 0;
    padding-left: 300px;
}
`;

export const Title = styled.h2`
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    color: #D97706;
    text-align: center;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    font-weight: 500;
    font-size: 20px;
    text-align: start;
}
`;

export const Subtitle = styled.h3`
    margin: 10px 0 0 0;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    text-align: center;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    font-weight: 800;
    font-size: 55px;
    text-align: start;
}
`;

export const StyledText = styled.p`
    margin: 20px 0 0 0;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    padding: 0;
    text-align: start;

    font-weight: 400;
    font-size: 20px;
}

`;

export const StyledList = styled.ul`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 80px;
    list-style: none;
    padding: 15px;
    margin-top: 100px;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    margin-top: 20px;
    padding: 0;
}
    
`;

export const StyledBubble = styled.div`

    width: 600px;
    height: 400px;
    background-color: #581C87;
    border-radius: 150% 100% 200% 0%;
    z-index: -1;
    opacity: 0;
    position: absolute;
    left: -230px;
    bottom: 120px;
    transform: rotate(-30deg);

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    width: 540px;
    bottom: 280px;
}

/* Desktop (above 1900px) */
@media (min-width: 1900px) {
    width: 600px;
    height: 500px;
    bottom: 390px;
    left: -200px;
    border-radius: 200% 200% 180% 0%;
}

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
@media (min-width: 1024px) {

    img{
        width: 230px;
    }

    width: 550px;
    left: 30px;
    top: -120px;
}

/* Desktop (above 1900px) */
@media (min-width: 1900px) {
    width: 350px;
    top: -120px;

    img{
        width: 300px;
    }
}


`;

export const CellphoneBlocks = styled.div`

    display: flex;
    position: absolute;
    left: 30px;
    top: 30%;
    gap: 0px;
    margin: 0;
    padding: 0;

    img{
        margin-left: -25px;
        padding: 0;
        width: 60%;
    }


/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    img{
        width: 130px;
    }
}

`;