import React, { useEffect, useRef } from "react";
import { Container, StyledFigure, StyledOrangeCircle, StyledPurpleCircle, StyledText, Subtitle, TextContainer, Title } from "./style";
import desktopImage from "../../assets/Desktop.png"
import gsap from "gsap";

function SecondSection() {
    const desktopRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const textRef = useRef(null);
    const orangeCircle = useRef(null);
    const purpleCircle = useRef(null);

    useEffect(() => {
        const fadeInElements = [desktopRef.current, titleRef.current, subtitleRef.current, textRef.current,orangeCircle.current,purpleCircle.current];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(entry.target, 
                        { opacity: 0, y: -150 }, 
                        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
                    );
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        fadeInElements.forEach(el => {
            if (el) {
                observer.observe(el);
            }
        });

        return () => {
            fadeInElements.forEach(el => {
                if (el) {
                    observer.unobserve(el);
                }
            });
        };
    }, []);

  return (
    <Container>
    <StyledOrangeCircle ref={orangeCircle}></StyledOrangeCircle>
    <StyledPurpleCircle ref={purpleCircle}></StyledPurpleCircle>
      <TextContainer>
        <Title ref={titleRef}>No more waste</Title>
        <Subtitle ref={subtitleRef}>Pick the Sun</Subtitle>
        <StyledText ref={textRef}>Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</StyledText>
      </TextContainer>

      <StyledFigure ref={desktopRef}>
        <img src={desktopImage} alt="Desktop Image" />
      </StyledFigure>
    </Container>
  )
}

export default SecondSection
