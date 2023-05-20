import {
  SingleUses,
  StyledAboutSection,
  StyledUses,
  TypingUse,
} from "../../styles/section/AboutSection";
import React from "react";
import { Item, NavItems } from "../../styles/motion";
import { UseData } from "../../data/uses";

const AboutSection = () => {
  return (
    <StyledAboutSection id="uses">
      <TypingUse
        className={`text-white font-semibold text-5xl text-center /text-neutral-800 justify-center items-center`}
      >
        Use Case
      </TypingUse>
      <StyledUses
        initial="hidden"
        animate="visible"
        variants={NavItems}
        id="home"
      >
        {UseData.map((uses, index) => (
          <SingleUses
            key={index}
            variants={Item}
            index={index}
            className="drop-shadow-2xl shadow-lg shadow-neutral-400/50"
          >
            <span>{uses.tag}</span>
            <p>{uses.text}</p>
          </SingleUses>
        ))}
      </StyledUses>
    </StyledAboutSection>
  );
};

export default AboutSection;
