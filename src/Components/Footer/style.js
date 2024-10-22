import styled from "styled-components";


export const Container = styled.footer`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;


    img{
        margin: 0;
        padding: 0;
        width: 130px;
        height: 32px;
        object-fit: contain;
    }

    h2{
        margin-top: 20px;
        padding: 0;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
    }

    nav{
        display: flex;
        gap: 30px;

        a{
            text-decoration: none;
            font-size: 16px;
            font-weight: 400;

            cursor: pointer;
        }
    }

`;