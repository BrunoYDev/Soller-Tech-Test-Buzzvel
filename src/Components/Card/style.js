import styled from "styled-components";

export const Container = styled.div`


/* Mobile (until 768px) */
@media (max-width: 768px) {
    h2{
        margin: 0;
        padding: 0;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        text-align: center;
    }
}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {}

`;