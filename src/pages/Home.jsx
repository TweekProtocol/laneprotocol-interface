import React, { useEffect } from "react";
import {
  AboutSection,
  FeaturesSection,
  HeroSection,
  LastSection,
  RoadMapSection,
  VirtualSection,
} from "../components";
import { StyledContainer } from "../styles/common/Container.styled";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Lane Protocol";
  });
  return (
    <>
      <HeroSection />
      <StyledContainer>
        <AboutSection />
        <FeaturesSection />
        <RoadMapSection />
      </StyledContainer>
      <VirtualSection />
      <LastSection />
    </>
  );
};

export default Home;
