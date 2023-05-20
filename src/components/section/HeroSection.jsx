import {
  HeroContent,
  StyleHeroSection,
  StyledArrowDown,
} from "../../styles/section/HeroSection.styled";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("uses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyleHeroSection>
      <HeroContent id="about">
        <h1>LANE PROTOCOL</h1>
        <h3>Empowering Decentralized Connection on the core dao chain.</h3>
        <p>
          A decentralized Protocol that help to utilizes connection that allow
          users to easily discover and access decentralized services and
          application.
        </p>
        <StyledArrowDown onClick={handleClickScroll} className="cursor-pointer">
          <FaArrowDown />
        </StyledArrowDown>
      </HeroContent>
    </StyleHeroSection>
  );
};

export default HeroSection;
