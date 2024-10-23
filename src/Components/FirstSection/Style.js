import styled from "styled-components";

export const Container = styled.section`

display: flex;
flex-direction: column;
align-items: flex-end;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    position: relative;
    height: 100vh;
}

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
@media (min-width: 1024px) {
    margin-top: 50px;
    margin-left: 50px;
    width: 50%;
    align-self: flex-start;
    align-items: start;
    gap: 50px;

    h2{
        margin: 50px 0 0 0;
        font-weight: 800;
        font-size: 62px;
        line-height: 79.2px;
    }

    p{
        margin: 0;
        font-size: 24px;
    }

}

@media (min-width: 1900px) {
    margin-top: 100px;

    h2{
        font-size: 110px;
        line-height: 110px;
    }
    p{
        font-size: 32px;
    }
}
`;

export const ImageContainer = styled.div`

    padding: 0;
    margin: 0;
    background-color: #BAE6FD;
    border-radius: 180px 0px 160px 130px;


/* Mobile (until 768px) */
@media (max-width: 768px) {
    overflow: hidden;
    width: 45vw;
    height: 350px;
}

/* Mobile (until 480px) */
@media (max-width: 480px) {
    overflow: hidden;
    width: 80vw;
    height: 350px;
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    position: absolute;
    width: 430px;
    height: 400px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 250px 0px 200px 130px;
}

/* Desktop (above 1920px) */
@media (min-width: 1900px) {
    width: 620px;
    height: 700px;
    border-radius: 380px 0px 340px 230px;
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
    align-self: center;

    img{
        padding: 0;
        margin-top: 35px;
        width: 400px;
        height: 300px;
        object-fit: cover;
    }

/* Desktop (above 1024px) */
@media (min-width: 1024px) {

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

/* Desktop (above 1900px) */
@media (min-width: 1900px) {

img{
    padding-top: 150px;
}
}
`;

export const StyledDot = styled.div`
    background-color: #E0F2FE;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    z-index: 10;
    position: absolute;
    top: 320px;
    right: 80px;

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    top: 370px;
    right: 100px;
}

/* Desktop (above 1920px) */
@media (min-width: 1900px) {
    top: 655px;
    right: 200px;
}
`;

export const MessageContainer = styled.div`

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

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    margin-top: 50px;
    margin-left: 50px;
    width: 50%;
    align-self: flex-start;

    h2{
        font-weight: 800;
        font-size: 62px;
        line-height: 79.2px;
    }
    p{
        font-size: 18px;
    }
}

/* Desktop (above 1920px) */
@media (min-width: 1900px) {
   p{
    width: 500px;
   }
}

`;