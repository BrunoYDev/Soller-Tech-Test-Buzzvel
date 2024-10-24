import React, { useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ContactAndButtonContainer, MenuButton, MenuMobile, NavLinks, StyledHeader, StyledNav, StyledTitle } from './style';
import ContactLogo from "../../assets/contactlogo.png";
import Button from "../Button/Button";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
          gsap.fromTo(menuRef.current, 
            { y: '-100%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
          );
        }
      }, [isMenuOpen]);

    return (
        <HelmetProvider>
        <Helmet>
          <title>Get the Sun to Power Your Home - Soller</title>
          <meta name="description" content="Discover how solar power can help you save energy and power your home efficiently." />
          <meta property="og:title" content="Get the Sun to Power Your Home" />
          <meta property="og:description" content="Discover how solar power can help you save energy." />
          <meta property="og:image" content="https://github.com/BrunoYDev/Soller-Tech-Test-Buzzvel/blob/main/src/assets/logo.png?raw=true" />
          <meta property="og:site_name" content="Soller" />
          <meta property="og:url" content="https://soller-solar-company.vercel.app" />
        </Helmet>
        <StyledHeader>
          <StyledNav>
            <StyledTitle>Soller</StyledTitle>
            <MenuButton onClick={toggleMenu}>
            ☰ {/* Hamburguer Menu */}
          </MenuButton>
          {/* Navigation Links */}
          <NavLinks>
            <a href="#">Products</a>
            <a href="#">Solutions</a>
            <a href="#">Services</a>
            <a href="#">Configure</a>
          </NavLinks>
          <ContactAndButtonContainer>
            <div>
              <img src={ContactLogo} alt="Contact Icon" />
              <h2>555 818 282</h2>
            </div>
            <Button color="#581C87" backcolor="#581C87" textcolor="#FCD34D"/>
          </ContactAndButtonContainer>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <MenuMobile ref={menuRef}>
              <a href="#">Products</a>
              <a href="#">Solutions</a>
              <a href="#">Services</a>
              <a href="#">Configure</a>
            </MenuMobile>
          )}
          </StyledNav>
        </StyledHeader>
      </HelmetProvider>
    )
  }
  
  export default Header
  