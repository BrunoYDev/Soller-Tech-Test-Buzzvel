import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FifthSectionCard from "./FifthSectionCard/FifthSectionCard";
import {
  ArrowButton,
  CarouselContainer,
  Container,
  TextContainer,
} from "./style";

// pics
import janePic from "../../assets/profilepics/jane.jpg";
import ralphPic from "../../assets/profilepics/ralph.jpg";
import cameronPic from "../../assets/profilepics/cameron.jpg";
import courtneyPic from "../../assets/profilepics/courtney.jpg";

// Arrows
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import Button from "../Button/Button";
import gsap from "gsap";

function FifthSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Mocked Users Opinions
  const opinionsList = [
    {
      name: "Jane Cooper",
      desc: "10KWh",
      pic: janePic,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    },
    {
      name: "Ralph Edwards",
      desc: "32KWh",
      pic: ralphPic,
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    },
    {
      name: "Courtney Henry",
      desc: "6KWh",
      pic: courtneyPic,
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    },
    {
      name: "Cameron Williamson",
      desc: "12KWh",
      pic: cameronPic,
      text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    },
    {
      name: "Cameron Williamson",
      desc: "12KWh",
      pic: cameronPic,
      text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    },
  ];

  useEffect(() => {
    const fadeInElements = [
      titleRef.current,
      subtitleRef.current,
      textRef.current,
      sliderRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = fadeInElements.indexOf(entry.target);
            const delay = index * 0.1;
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: -150 },
              { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInElements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      fadeInElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <Container>
      <TextContainer>
        <h2 ref={titleRef}>Join other Sun harvesters</h2>
        <h3 ref={subtitleRef}>Make something awesome</h3>
        <p ref={textRef}>
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          Eleifend mi tristique condimentum congue fusce nunc, donec magnis
          commodo.
        </p>
      </TextContainer>
      <Button color="#FCD34D" backcolor="#FCD34D" textcolor="#78350F" />

      <CarouselContainer ref={sliderRef}>
        <Slider {...settings}>
          {opinionsList.map((opinion, index) => (
            <FifthSectionCard key={index} opinion={opinion} />
          ))}
        </Slider>
      </CarouselContainer>
    </Container>
  );
}
const NextArrow = ({ onClick }) => (
  <ArrowButton right onClick={onClick}>
    <img src={rightArrow} alt="Ritght Arrow" />
  </ArrowButton>
);

const PrevArrow = ({ onClick }) => (
  <ArrowButton left onClick={onClick}>
    <img src={leftArrow} alt="Left Arrow" />
  </ArrowButton>
);

export default FifthSection;
