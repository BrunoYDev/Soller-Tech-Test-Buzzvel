import React, { useEffect, useRef } from "react";
import { CellphoneBlocks, Container, StyledBubble, StyledFigure, StyledList, StyledText, Subtitle, TextContainer, Title } from "./style";
import gsap from "gsap";
import Card from "../Card/Card";
import cellphoneImage from "../../assets/celphone2/celphone.png";
import cellphoneCircle1 from "../../assets/celphone2/celcircle.png";
import cellphoneCircle2 from "../../assets/celphone2/celcircle2.png";
import cellphoneCircle3 from "../../assets/celphone2/celcircle3.png";

function FourthSection() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const textRef = useRef(null);
    const bubbleRef = useRef(null);
    const cellphoneRef = useRef(null);
    const cardsRef = useRef([]);
    const cellCircleRef = useRef([]);

    const servicesList = [
        {title: "Et mauris", description: "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."},
        {title: "Eget sit",  description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."},
        {title: "Imperdiet pellentesque", description: "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."},
        {title: "Non libero", description: "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."},
    ];

    const celCircleList = [cellphoneCircle1,cellphoneCircle2,cellphoneCircle3]

    useEffect(() => {
        const fadeInElements = [titleRef.current, subtitleRef.current, textRef.current];

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
        }, { threshold: 0.1 });

        fadeInElements.forEach(el => {
            if (el) {
                observer.observe(el);
            }
        });

        const bubbleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(bubbleRef.current,
                        { x: 200, opacity: 0 },  // Iniciar fora da tela à esquerda
                        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
                    );
                    bubbleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (bubbleRef.current) {
            bubbleObserver.observe(bubbleRef.current);
        }

        const cellphoneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(cellphoneRef.current,
                        { opacity: 0 },  // Começa invisível
                        { opacity: 1, duration: 1, ease: "power3.out" }
                    );
                    cellphoneObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (cellphoneRef.current) {
            cellphoneObserver.observe(cellphoneRef.current);
        }

        const cellCirclesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cellCircleRef.current.forEach((block, index) => {
                        gsap.fromTo(block,
                            { opacity: 0, y: 20 },
                            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: index * 0.2 }
                        );
                    });
                    cellCirclesObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cellCircleRef.current.forEach((block) => {
            if (block) {
                cellCirclesObserver.observe(block);
            }
        });


        const cardObserver = new IntersectionObserver((entries) => {
            const firstCard = cardsRef.current[0];
            if (firstCard && entries.some(entry => entry.target === firstCard && entry.isIntersecting)) {
                gsap.fromTo(cardsRef.current, 
                    { opacity: 0, x: 100 }, 
                    { 
                        opacity: 1, 
                        x: 0, 
                        duration: 0.5, 
                        ease: "power3.out", 
                        stagger: 0.3,
                    }
                );
                cardObserver.disconnect();
            }
        }, { threshold: 0.1 });

        cardsRef.current.forEach((card) => {
            if (card) {
                cardObserver.observe(card);
            }
        });

        return () => {
            fadeInElements.forEach(el => {
                if (el) {
                    observer.unobserve(el);
                }
            });
            cardsRef.current.forEach(card => {
                if (card) {
                    cardObserver.unobserve(card);
                }
            });
            if (bubbleRef.current) {
                bubbleObserver.unobserve(bubbleRef.current);
            }
            if (cellphoneRef.current) {
                cellphoneObserver.unobserve(cellphoneRef.current);
            }
            cellCircleRef.current.forEach(block => {
                if (block) {
                    cellCirclesObserver.unobserve(block);
                }
            });
        };
    }, []);


  return (
    <Container>

    <StyledBubble ref={bubbleRef}></StyledBubble>

    <TextContainer>
        <Title ref={titleRef}>Personalized Services</Title>
        <Subtitle ref={subtitleRef}>Personalized services</Subtitle>
        <StyledText ref={textRef}>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</StyledText>
    </TextContainer>

    <StyledList>
        {servicesList.map((service, index) => (
            <Card key={index} ref={el => (cardsRef.current[index] = el)} service={service}/>
        ))}
    </StyledList>

    <StyledFigure>
        <img src={cellphoneImage} alt="cellphone image" ref={cellphoneRef}/>
        <CellphoneBlocks>
            {celCircleList.map((image,index) => (
                <img src={image} key={index} alt="celblock image" ref={el => (cellCircleRef.current[index] = el)}></img>
            ))}
        </CellphoneBlocks>
    </StyledFigure>

    </Container>
  )
}

export default FourthSection
