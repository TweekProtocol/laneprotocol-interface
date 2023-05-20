import React from "react";
import { CTAButton } from "../../styles/common/CTAButton.styled";

const HomeText = () => {
  return (
    <div className="bg-neutral-700 p-36 relative mt-8 w-full h-96">
      <div className="flex gap-2 justify-evenly">
        <div className="flex flex-col gap-4 max-[1024px]:-translate-y-20">
          <h1 className="text-white text-6xl font-sofia font-semibold max-[800px]:text-4xl">
            First Stop for Popular Crypto
          </h1>
          <p className="text-neutral-300 text-3xl max-[800px]:text-2xl">
            Trade over 50 cryptocurrencies on Lane Ex
          </p>
          <CTAButton href="/notfound" primary className="w-44 p-44">
            Get Started
          </CTAButton>
        </div>
        <img
          src="./asset/crypto-jet.png"
          alt=""
          className="w-96 -translate-y-40 max-[800px]:w-72 max-[800px]:-translate-y-36"
        />
      </div>
    </div>
  );
};

export default HomeText;
