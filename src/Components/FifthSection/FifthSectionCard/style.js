import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 300px;
  height: 350px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 50px;
  margin-bottom: 150px;
  padding: 30px;

  transition: transform 0.3s ease;

  ${({ $isActive }) => $isActive && `
    transform: scale(1,1.05); 
    z-index: 1;
  `}
  /* Mobile (until 768px) */
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 0px;
  }

  /* Desktop (above 1024px) */
  @media (min-width: 1024px) {
    margin-left: 0px;
    margin-right: 15px;
  }
`;

export const Name = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
`;

export const Desc = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
`;

export const Text = styled.p`
  margin-top: 50px;
  font-weight: 400;
  font-size: 18px;
`;

export const UserField = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  align-items: start;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    object-fit: cover;
  }

  /* Desktop (above 1024px) */
  @media (min-width: 1024px) {
    img {
      object-fit: cover;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
