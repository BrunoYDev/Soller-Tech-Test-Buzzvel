import styled from "styled-components";

export const Container = styled.section`

    background-color: #581C87;
    display: flex;
    flex-direction: column;
    align-items: center;

`;


export const ArrowButton = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'left' && prop !== 'right'
})`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  bottom: 0;

  ${({ left }) => (left ? "left: 150px;" : "right: 150px;")}

  /* Mobile (until 375px) */
  @media (max-width: 375px) {
    ${({ left }) => (left ? "left: 120px;" : "right: 120px;")}
  }

  /* Mobile (until 320px) */
  @media (max-width: 320px) {
    ${({ left }) => (left ? "left: 90px;" : "right: 90px;")}
  }

  /* Mobile (above 768px) */
  @media (min-width: 768px) {
    ${({ left }) => (left ? "left: 320px;" : "right: 320px;")}
  }

`;

export const Slide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #581C87;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
`;

export const TextContainer = styled.div`

    margin-bottom: 20px;

    h2{
        font-weight: 500;
        font-size: 16px;
        color: #FCD34D;
        text-align: center;
        opacity: 0;
    }
    h3{
        font-weight: 700;
        font-size: 32px;
        color: #ffff;
        text-align: center;
        opacity: 0;
    }
    p{
        width: 100%;
        height: 90px;
        font-weight: 400;
        font-size: 16px;
        color: #ffff;
        text-align: center;
        opacity: 0;
    }

`;