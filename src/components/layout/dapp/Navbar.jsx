import {
  DappInfo,
  DappInfoI,
  EarnSub,
  NFTSub,
  TradeSub,
  dappNavData,
} from "../../../data/DappNav";
import useScrollDirection from "../../../hooks/useScrollDirection";
import {
  DappNav,
  DappNavLogo,
  NavList,
} from "../../../styles/layout/dapp/Navbar";
import React, { useEffect } from "react";
import { useState } from "react";
import { TbDots } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const DapNavbar = () => {
  const scrollDirection = useScrollDirection("down");
  const [nft, setNft] = useState(false);
  const [info, setInfo] = useState(false);
  const [trade, setTrade] = useState(false);
  const [earn, setEarn] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "Trade") {
      setTrade(true);
    } else {
      setTrade(false);
    }

    if (value === "Earn") {
      setEarn(true);
    } else {
      setEarn(false);
    }

    if (value === "NFT") {
      setNft(true);
    } else {
      setNft(false);
    }
  }, [value]);

  return (
    <DappNav scroll={scrollDirection}>
      <div>
        <a href="/">
          <DappNavLogo src="./asset/lane-logo.png" />
        </a>
      </div>
      {dappNavData.map((nav, index) => (
        <div key={index}>
          <NavList key={index} onClick={() => setValue(nav.text)}>
            <p className="p-5 hover:bg-neutral-600 rounded-xl text-lg font-semibold cursor-pointer">
              {nav.text}
            </p>
          </NavList>
        </div>
      ))}
      {trade && (
        <div className="flex flex-col top-28 absolute border border-white bg-neutral-900 shadow-md shadow-white w-56 h-32 left-96 rounded-xl">
          {TradeSub.map((sub, index) => (
            <div
              className="flex flex-col gap-5 hover:bg-neutral-800 p-2 first:rounded-t-xl cursor-pointer first:mt-1 transition-all ease-linear duration-700"
              key={index}
            >
              <a href={sub.link} className="text-2xl p-1">
                {sub.text}
              </a>
            </div>
          ))}
        </div>
      )}
      {/* earn path */}
      {earn && (
        <div className="flex flex-col top-28 absolute border border-white bg-neutral-900 shadow-md shadow-white w-56 h-32 left-96 rounded-xl">
          {EarnSub.map((sub, index) => (
            <div
              className="flex flex-col gap-5 hover:bg-neutral-800 p-2 first:rounded-t-xl cursor-pointer first:mt-1 transition-all ease-linear duration-700"
              key={index}
            >
              <a href={sub.link} className="text-2xl p-1">
                {sub.text}
              </a>
            </div>
          ))}
        </div>
      )}
      {/* NFT Sub */}
      {nft && (
        <div className="flex flex-col top-28 absolute bg-neutral-900 border border-white shadow-md shadow-white w-56 h-32 left-96 rounded-xl">
          {NFTSub.map((sub, index) => (
            <div
              className="flex flex-col gap-5 hover:bg-neutral-800 p-2 first:rounded-t-xl cursor-pointer first:mt-1 transition-all ease-linear duration-700"
              key={index}
            >
              <a href={sub.link} className="text-2xl p-1">
                {sub.text}
              </a>
            </div>
          ))}
        </div>
      )}
      <div
        className="flex ml-10 cursor-pointer p-2 hover:bg-neutral-600 rounded-full relative max-[700px]:hidden"
        onClick={() => setInfo(!info)}
      >
        <TbDots size={25} className="text-neutral-300" />
      </div>
      {info && (
        <div className="/flex flex-col absolute bg-neutral-900 border border-white p-0 rounded-2xl h-96 top-24 shadow-md shadow-white left-1/3 w-80 max-[1024px]:left-1/2 transition-all ease-linear duration-1000">
          {DappInfo.map((info, index) => (
            <div
              className="flex flex-col gap-5 hover:bg-neutral-800 p-2 first:rounded-t-xl cursor-pointer first:mt-1 transition-all ease-linear duration-700"
              key={index}
            >
              <a href={info.link} className="text-2xl p-1">
                {info.text}
              </a>
            </div>
          ))}
          <div className="flex flex-col gap-5">
            <hr className="text-neutral-800" />
            <hr className="text-neutral-800" />
          </div>
          {DappInfoI.map((info, index) => (
            <div
              className="flex flex-col gap-5 hover:bg-neutral-800 p-2 first:rounded-t-xl cursor-pointer first:mt-1 transition-all ease-linear duration-700"
              key={index}
            >
              <a href={info.link} className="text-2xl p-1 flex justify-between">
                {info.text} <MdLogout size={20} />
              </a>
            </div>
          ))}
        </div>
      )}
    </DappNav>
  );
};

export default DapNavbar;
