import { footerData, footerDataI } from "../../data/Footer";
import {
  FooterImg,
  FooterNav,
  StyledFooter,
  StyledIcon,
} from "../../styles/layout/Footer.styled";
import React from "react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterImg
        src="./asset/lane-logo.png"
        alt=""
        className="w-80 h-40 -translate-y-12"
      />
      <hr className="max-[2500px]:hidden max-[800px]:flex -translate-y-16 border-b-text-neutral-500" />
      <FooterNav>
        {footerData.map((fnav, index) => (
          <div className="flex flex-col" key={index}>
            <h3>{fnav.title}</h3>
            <a href={fnav.link}>{fnav.text}</a>
          </div>
        ))}
      </FooterNav>

      <FooterNav>
        {footerDataI.map((fnav, index) => (
          <div className="flex flex-col" key={index}>
            <h3>{fnav.title}</h3>
            <a href={fnav.link}>{fnav.text}</a>
          </div>
        ))}
      </FooterNav>
      <div className="flex flex-col gap-2 max-[800px]:pb-14 max-[700px]:pb-16">
        <h3 className="text-white text-3xl font-sofia">Socails</h3>
        <StyledIcon>
          <a
            href="https://twitter.com/lane_protocol"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://discord.gg/a37GPRSFpD"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord size={20} />
          </a>
          <a href="https://t.me/lane_protocol" target="_blank" rel="noreferrer">
            <FaTelegram size={20} />
          </a>
        </StyledIcon>
      </div>
    </StyledFooter>
  );
};

export default Footer;
