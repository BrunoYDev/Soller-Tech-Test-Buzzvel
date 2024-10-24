import React, { useEffect, useRef } from "react";
import { Container, PurpleCircle } from "./style";
import Button from "../Button/Button";
import macbookImage from "../../assets/macbook.png";
import gsap from "gsap";

function SixthSection() {
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);
    const buttonContainerRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const fadeInElements = [h2Ref.current, h3Ref.current, buttonContainerRef.current, imgRef.current];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(entry.target, 
                        { opacity: 0, y: -150 }, 
                        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
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
            <PurpleCircle />
            <div id="subContainer">
                <div id="textContainer">
                    <h2 ref={h2Ref}>Get the Sun to power your home</h2>
                    <h3 ref={h3Ref}>All the power that you need for your house is now available</h3>
                </div>
                <div id="buttonContainer" ref={buttonContainerRef}>
                    <Button color="#FCD34D" backcolor="#FCD34D" textcolor="#78350F" />
                    <h4>Egestas fringilla aliquam leo</h4>
                </div>
            </div>
            <img src={macbookImage} alt="Macbook Image" ref={imgRef} loading="lazy" />
        </Container>
    );
}

export default SixthSection;
