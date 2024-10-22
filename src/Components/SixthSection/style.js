import styled from "styled-components";

export const Container = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: relative;

    overflow-y: hidden;
    background-color: #581C87;
    z-index: 2;

    h2{
        margin-top: 50px;
        padding: 0;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        color: #FCD34D;
    }
    h3{
        margin-top: 20px;
        padding: 0;
        text-align: center;
        font-weight: 700;
        font-size: 32px;
        color: #ffff;
    }
    h4{
        margin-top: 20px;
        padding: 0;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        color: #ffff;
    }

    img{
        margin-top: 20px;
        width: 350px;
        height: 200px;
    }

`;

export const PurpleCircle = styled.div`

    width: 365px;
    height: 365px;
    background-color: #A855F7;

    position: absolute;
    border-radius: 100%;
    z-index: -1;

    bottom: -200px;
    left: -150px;

`;