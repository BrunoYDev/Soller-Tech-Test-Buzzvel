import styled from "styled-components";

export const Container = styled.section`

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

    margin: 5px 0 0 0;
    padding: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

/* Mobile (until 768px) */
@media (max-width: 768px) {
    h2{
        margin-top: 10px;
        margin-bottom: 5px;
        font-weight: 700;
        text-align: center;
        font-size: 40px;
    }
    p{
        margin-bottom: 20px;
        padding: 0 10px;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
    }
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {}


`;

export const ImageContainer = styled.div`

    padding: 0;
    margin: 0;
    left: 75px;
    background-color: #BAE6FD;
    border-radius: 180px 0px 160px 130px;
    overflow: hidden;


/* Mobile (until 768px) */
@media (max-width: 768px) {
    width: 45vw;
    height: 350px;
}

/* Mobile (until 480px) */
@media (max-width: 480px) {
    width: 80vw;
    height: 350px;
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {

}
`;

export const StyledFigure = styled.figure`

    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    img{
        padding: 0;
        margin-top: 35px;
        width: 400px;
        height: 300px;
    }

`;

export const StyledDot = styled.div`
    background-color: #E0F2FE;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    z-index: 1;
    position: absolute;
    top: 320px;
    right: 80px;
`;

export const MessageContainer = styled.div`

    /* Mobile (until 768px) */
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 40px;

        #textSeparation{
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 0;
            margin: 0;
        }

        div{
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        gap: 0px;

        h3{
            padding: 0;
            margin: 0;
            font-weight: 400;
            font-size: 18px;      
        }
        h4{
            padding: 0;
            margin: 0;
            font-weight: 400;
            font-size: 16px;
        }

        figure{
            width: 64px;
            height: 64px;
            margin: 0px 25px 0px 10px;
            padding: 0;
        
            img{
                width: 64px;
                height: 64px;
                border-radius: 100%;
                object-fit: cover;
            }
        }
    }
        p{
            margin: 0 0 10px 0;
            padding: 15px;
            font-weight: 400;
            font-size: 16px;
        }
}
`;