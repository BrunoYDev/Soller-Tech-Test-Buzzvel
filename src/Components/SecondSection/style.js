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
    margin-top: 15px;
    width: 100%;
    height: 100vh;
    align-items: center;
    overflow-x: hidden;
}
`;

export const TextContainer = styled.div`
    

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

`;

export const Title = styled.h2`
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    color: #D97706;
    text-align: center;
    opacity: 0;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    font-weight: 500;
    font-size: 20px;
}
`;

export const Subtitle = styled.h3`
    margin: 10px 0 0 0;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    opacity: 0;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    font-weight: 800;
    font-size: 56px;
}
`;

export const StyledText = styled.p`
    margin: 20px 0 0 0;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    opacity: 0;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    font-weight: 400;
    font-size: 16px;
    width: 40%;
}
`;

export const StyledFigure2  = styled.figure`
    margin: 35px 0 0 0;
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    opacity: 0;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    display: none;
}

`;

export const StyledFigure = styled.figure`

display: none;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    img{
        width: 90%;
        object-fit: cover;
    }
}

/* Desktop (above 1900px) */
@media (min-width: 1900px) {
    img{
        width: 75%;
        object-fit: cover;
    }
}
`;

export const StyledOrangeCircle = styled.div`

    background-color: #F59E0B;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    position: absolute;
    z-index: -1;
    left: -180px;
    top: 180px;
    opacity: 0;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    width: 500px;
    height: 500px;
}

/* Desktop (above 1900px) */
@media (min-width: 1900px) {
    width: 710px;
    height: 710px;
    left: -110px;
    top: 90px;
}
`;

export const StyledPurpleCircle = styled.div`

    background-color: #7E22CE;
    width: 210px;
    height: 210px;
    border-radius: 100%;
    position: absolute;
    z-index: -1;
    right: -170px;
    top: 220px;
    opacity: 0;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    width: 400px;
    height: 400px;
    top: 300px;
}

/* Desktop (above 1900px) */
@media (min-width: 1900px) {
    width: 600px;
    height: 600px;
    right: -20px;
    top: 225px;
}
`;