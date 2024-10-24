import styled from "styled-components";


export const Container = styled.footer`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    #copyrightContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


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

/* Desktop (above 1024px) */
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 35px 60px;
    
    #copyrightContainer{
        flex-direction: row;
        align-items: center;
        gap: 20px;

        h2{
            margin: 0;
        }
    }
  }

`;