import { CTAButton } from "../../styles/common/CTAButton.styled";
import {
  LaneLogoWR,
  LastWrap,
  LastWrapper,
} from "../../styles/section/LastSection.styled";
import React from "react";
import { toast } from "react-toastify";

const LastSection = () => {
  const alert = () => {
    const functionThatReturnPromise = () =>
      new Promise((resolve) => setTimeout(resolve, 3000));
    toast.promise(
      functionThatReturnPromise,
      {
        pending: "Coming Soon",
        success: "After Mainnet",
      },
      { position: "top-center" }
    );
  };

  return (
    <>
      <LastWrapper className="border-b-bold border-b-slate-800 border-t-top border-t-slate-800">
        <LaneLogoWR
          src="./asset/lane-logo.png"
          alt=""
          className="max-[1024px]:w-1/2 max-[800px]:w-10/12"
        />
        <LastWrap>
          <h2>
            <span>Discover</span> the world
          </h2>
          <p className="text-neutral-400 font-medium max-[1024px]:mr-40 max-[1024px]:text-3xl max-[800px]:mr-0 max-[700px]:text-2xl max-[700px]:mr-0 text-2xl mr-80">
            Lane Protocol makes it easy to explore the web3 verse, and connect
            with users around the world
          </p>
          <div>
            <CTAButton primary onClick={alert}>
              Explore
            </CTAButton>
            <CTAButton margin="0 0 0 20px">Learn More</CTAButton>
          </div>
        </LastWrap>
      </LastWrapper>
    </>
  );
};

export default LastSection;
