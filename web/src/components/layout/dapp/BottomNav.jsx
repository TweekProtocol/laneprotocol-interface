import React, { useEffect, useState } from "react";
import {
  DappInfo,
  DappInfoI,
  EarnSub,
  NFTSub,
  TradeSub,
  dappNavData,
} from "../../../data/DappNav";
import { TbDots } from "react-icons/tb";
import { MdLogout } from "react-icons/md";

const BottomNav = () => {
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
    <div className="flex bg-black fixed bottom-0 h-28 w-full z-50 justify-between p-5 border-t border-t-neutral-500 max-[2500px]:hidden max-[700px]:flex">
      {dappNavData.map((nav, index) => (
        <div key={index}>
          <div className="flex gap-5" onClick={() => setValue(nav.text)}>
            <p className="p-5 hover:bg-neutral-600 rounded-xl text-lg font-semibold cursor-pointer">
              {nav.text}
            </p>
          </div>
        </div>
      ))}
      {trade && (
        <div className="flex flex-col bottom-28 border border-white absolute bg-neutral-900 shadow-md shadow-white w-56 h-32 left-5 rounded-xl">
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
      {/* Earn */}
      {earn && (
        <div className="flex flex-col bottom-28 border border-white absolute bg-neutral-900 shadow-md shadow-white w-56 h-32 left-5 rounded-xl">
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
      {/* NFT */}
      {nft && (
        <div className="flex flex-col bottom-28 border border-white absolute bg-neutral-900 shadow-md shadow-white w-56 h-32 left-5 rounded-xl">
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
        className="flex ml-1 cursor-pointer p-5 hover:bg-neutral-600 rounded-full relative"
        onClick={() => setInfo(!info)}
      >
        <TbDots size={25} className="text-neutral-300" />
      </div>
      {info && (
        <div className="/flex flex-col absolute bg-neutral-900 p-0 border border-white rounded-2xl h-96 bottom-28 shadow-md shadow-white left-1/3 w-80 transition-all ease-linear duration-1000">
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
    </div>
  );
};

export default BottomNav;
