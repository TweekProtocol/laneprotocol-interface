import React from "react";
import {
  BannerSection,
  StyledTopBanner,
} from "../../styles/layout/TopBanner.styled";
import { GrFormClose } from "react-icons/gr";

const TopBanner = () => {
  return (
    <StyledTopBanner
    // className={`${router.pathname == "/dapp" ? "hidden" : "flex"}`}
    >
      <BannerSection>
        {/* <img src="./asset/cover_prev_ui.png" className="w-56" alt="" /> */}
      </BannerSection>
      <BannerSection
        className="bg-neutral-400 p-3 rounded-lg max-[700px]:p-1 max-[700px]:top-0 max-[700px]:text-xs"
        showOnMobile
      >
        <p>
          <span className="font-semibold text-green-400">
            PHISHING WARNING:
          </span>{" "}
          {""}
          <span className="text-neutral-300">
            please make sure you're visiting
          </span>
          <span className="font-medium text-green-300">
            {" "}
            https://laneprotocol.vercel.app
          </span>{" "}
          <span className="text-neutral-300">- check the URL carefully.</span>
        </p>
      </BannerSection>
      <BannerSection>
        <GrFormClose size={20} className="cursor-pointer" />
      </BannerSection>
    </StyledTopBanner>
  );
};

export default TopBanner;
