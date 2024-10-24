import React from "react";
import Header from "./Components/Header/Header";
import FirstSection from "./Components/FirstSection/FirstSection";
import SecondSection from "./Components/SecondSection/SecondSection";
import ThirdSection from "./Components/ThirdSection/ThirdSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import FifthSection from "./Components/FifthSection/FifthSection";
import SixthSection from "./Components/SixthSection/SixthSection";
import Footer from "./Components/Footer/Footer";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Get the Sun to Power Your Home - Soller</title>
          <meta name="description" content="Discover how solar power can help you save energy and power your home efficiently." />
          {/* I fixed the OG tags in the HTML. To make them dynamic, I will need to use another library. */}
          <meta property="og:title" content="Get the Sun to Power Your Home" />
          <meta property="og:description" content="Discover how solar power can help you save energy." />
          <meta property="og:image" content="https://github.com/BrunoYDev/Soller-Tech-Test-Buzzvel/blob/main/src/assets/logo.png?raw=true" />
          <meta property="og:site_name" content="Soller" />
          <meta property="og:url" content="https://soller-solar-company.vercel.app" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Footer/>
    </>
  )
}

export default App
