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
    opacity: 0;
`;

export const Subtitle = styled.h3`
    margin: 10px 0 0 0;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    opacity: 0;
`;

export const StyledText = styled.p`
    margin: 20px 0 0 0;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    opacity: 0;
`;

export const StyledFigure = styled.figure`


/* Mobile (until 768px) */
@media (max-width: 768px) {
    margin: 35px 0 0 0;
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    opacity: 0;
}
`;

export const StyledOrangeCircle = styled.div`

/* Mobile (until 768px) */
@media (max-width: 768px) {
    background-color: #F59E0B;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    position: absolute;
    z-index: -1;
    left: -180px;
    top: 180px;
    opacity: 0;
}
`;

export const StyledPurpleCircle = styled.div`

/* Mobile (until 768px) */
@media (max-width: 768px) {
    background-color: #7E22CE;
    width: 210px;
    height: 210px;
    border-radius: 100%;
    position: absolute;
    z-index: -1;
    right: -170px;
    top: 220px;
    opacity: 0;
}
`;