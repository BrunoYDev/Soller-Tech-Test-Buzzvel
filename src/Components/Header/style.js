import styled from "styled-components";


export const StyledHeader = styled.header`
width: 100vw;
margin: 0;
padding: 0;
background-color: transparent;

z-index: 1;
position: absolute;

/* Mobile (until 768px) */
@media (max-width: 768px) {}

/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


`;

export const StyledNav = styled.nav`

    display: flex;
    align-items: center;
    gap: 20px;

/* Mobile (until 768px) */
@media (max-width: 768px) {
    position: relative;
}


/* Desktop (above 1024px) */
@media (min-width: 1024px) {}


`;

export const StyledTitle = styled.h1`

    font-weight: 700;
    font-size: 32px;
    padding: 0;
    margin: 0;

/* Mobile (until 768px) */
@media (max-width: 768px) {

    margin-left: 20px;
    margin-top: 15px;
}


/* Desktop (above 1024px) */
@media (min-width: 1024px) {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: #000;
      font-weight: 500;
    }
}
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  display: none;

  /* Mobile (until 768px) */
  @media (max-width: 768px) {
    display: block; 
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 10;
  }
`;

export const MenuMobile = styled.div`
  width: 200px;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #000;
    margin: 5px 0;
    font-weight: 500;
  }

  /* Mobile (until 768px) */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const NavLinks = styled.div`
  display: none; 

  /* Desktop (a partir de 1024px) */
  @media (min-width: 1024px) {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: #000;
      font-weight: 500;
    }
  }
`;