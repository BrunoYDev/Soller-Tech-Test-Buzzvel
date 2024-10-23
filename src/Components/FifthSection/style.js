import styled from "styled-components";
import Button from "../Button/Button";

export const Container = styled.section`
  background-color: #581c87;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  #sectionTop {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;

    /* Desktop (above 1024px) */
    @media (min-width: 1024px) {
      margin-top: 35px;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      
      Button{
        margin-right: 100px;
      }

    }

  }

`;

export const ArrowButton = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "left" && prop !== "right",
})`
  border-radius: 50%;
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

  /* Desktop (above 1024px) */
  @media (min-width: 1024px) {
    ${({ left }) => (left ? "left: 20px;" : "right: 850px;")}
  }

  /* Desktop (above 1900px) */
  @media (min-width: 1900px) {
    ${({ left }) => (left ? "left: 0px;" : "right: 1750px;")}
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  opacity: 0;

  /* Desktop (above 1024px) */
  @media (min-width: 1024px) {
    margin-left: 100px;
    overflow-x: hidden;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 20px;

  h2 {
    font-weight: 500;
    font-size: 16px;
    color: #fcd34d;
    text-align: center;
    opacity: 0;
  }
  h3 {
    font-weight: 700;
    font-size: 32px;
    color: #ffff;
    text-align: center;
    opacity: 0;
  }
  p {
    width: 100%;
    height: 90px;
    font-weight: 400;
    font-size: 16px;
    color: #ffff;
    text-align: center;
    opacity: 0;
  }

  /* Desktop (above 1024px) */
  @media (min-width: 1024px) {
    margin-left: 60px;
    margin-bottom: 0;
      h2{
        text-align: start;
        font-weight: 500;
        font-size: 20px;
      }
      h3{
        text-align: start;
        font-weight: 800;
        font-size: 45px;
        margin: 20px 0;
      }
      p{
        text-align: start;
        width: 80%;
        font-weight: 400;
        font-size: 16px;
        margin: 0;
      }
    }
`;
