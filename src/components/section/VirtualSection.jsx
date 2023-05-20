import { CTAButton } from "../../styles/common/CTAButton.styled";
import {
  VTextWrap,
  VerseLogo,
  VirtualWrapper,
} from "../../styles/section/Virtual.styled";
import React from "react";
import { toast } from "react-toastify";

const VirtualSection = () => {
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
      <hr className="h-6 text-neutral-800 bg-slate-800" />
      <VirtualWrapper className="border-b-top border-b-slate-800 max-[700px]:border-none">
        <div className="flex max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:justify-center max-[1024px]:text-center">
          <VTextWrap>
            <h2 className="mr-62 max-[700px]:ml-0 max-[700px]:text-center">
              <span>Introducing</span> A Decentralised MetaVerse on Core
              Network.
            </h2>
            <p className="text-neutral-400 font-medium max-[1024px]:mr-40 max-[1024px]:text-3xl max-[800px]:mr-0 max-[700px]:text-2xl max-[700px]:text-center max-[700px]:mr-0 text-2xl mr-62">
              Lane Protocol metaverse allows users to play , connect around the
              with other users in the metavserse, users could buy and own
              virtual asset, land's and more
            </p>
            <div className="flex flex-shrink-0 flex-wrap justify-start gap-4 items-start text-justify">
              <CTAButton primary onClick={alert}>
                Enter Verse
              </CTAButton>
              <CTAButton margin="0 0 0 20px">Learn More</CTAButton>
            </div>
          </VTextWrap>
          <VerseLogo
            src="./asset/m.png"
            alt=""
            className="img-b max-[700px]:w-80"
          />
        </div>
      </VirtualWrapper>
    </>
  );
};

export default VirtualSection;
