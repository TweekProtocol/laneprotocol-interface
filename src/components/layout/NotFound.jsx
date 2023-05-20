import {
  NotFoundImg,
  NotFoundWrapper,
} from "../../styles/layout/NotFound.styled";
import React from "react";
import BackArrow from "./BackArrow";
import { CTAButton } from "../../styles/common/CTAButton.styled";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundImg src="./asset/lane-logo.png" alt="" className="w-80" />
      <h1 className="text-white text-6xl font-bold">404</h1>
      <p className="text-xl font-poppin text-neutral-400">
        Page not found. Work in Progress Follow our Socials for Development
        updates
      </p>
      <CTAButton margin="1rem">
        <BackArrow />
      </CTAButton>
    </NotFoundWrapper>
  );
};

export default NotFound;
