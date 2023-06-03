import { toast } from "react-toastify";
import { footerData } from "../../data/Footer";
import { CTAButton } from "../../styles/common/CTAButton.styled";
import {
  FooterImg,
  FooterNav,
  ProductsText,
  StyledFooter,
  StyledIcon,
} from "../../styles/layout/Footer.styled";
import React from "react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
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
    <StyledFooter className="rounded-2xl">
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
            {/* <a
              href={fnav.link}
              aria-disabled={true}
              onClick={alert}
              className="disabled:cursor-not-allowed disabled:opacity-70"
            >
              {fnav.text}
            </a> */}
            <ProductsText onClick={alert}>{fnav.text}</ProductsText>
          </div>
        ))}
      </FooterNav>

      {/* <FooterNav>
        {footerDataI.map((fnav, index) => (
          <div className="flex flex-col" key={index}>
            <h3>{fnav.title}</h3>
            <a href={fnav.link}>{fnav.text}</a>
          </div>
        ))}
      </FooterNav> */}
      <div className="flex flex-col gap-2 max-[800px]:pb-14 max-[700px]:pb-16">
        <h3 className="text-white text-3xl font-sofia">Socails</h3>
        <StyledIcon>
          <a
            href="https://twitter.com/lane_protocol"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://discord.gg/a37GPRSFpD"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord size={30} />
          </a>
          <a href="https://t.me/lane_protocol" target="_blank" rel="noreferrer">
            <FaTelegram size={30} />
          </a>
        </StyledIcon>
      </div>
      <FooterNav>
        <CTAButton href="https://scan.test.btcs.network/token/0xa135d86d0d4061fcd72f81d74b414e407b36bac8">
          View on Core Scan
        </CTAButton>
      </FooterNav>
    </StyledFooter>
  );
};

export default Footer;
