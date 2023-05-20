import React, { useCallback, useEffect, useState } from "react";
import { AdData } from "../../data/AdData";
import { CTAButton } from "../../styles/common/CTAButton.styled";

const AdWrapper = () => {
  const [current, setCurrent] = useState(0);
  const length = AdData.length;

  const next = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  useEffect(() => {
    setTimeout(() => {
      next();
    }, 3000);
  }, [next]);

  if (!Array.isArray(AdData) || AdData.length <= 0) {
    return null;
  }

  return (
    <div className="bg-neutral-600 bg-cover w-full p-5 border border-neutral-600 h-96 max-[700px]:h-64 mt-10">
      {AdData.map((ad, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <div className={ad.hasSubText === true ? "" : `flex flex-col`}>
              <img
                src={ad.side}
                className="w-96 h-44 absolute -top-16 max-[700px]:w-28 max-[700px]:-top-12 max-[700px]:h-20"
                alt=""
              />
              <div
                className={
                  ad.hasSubText === true
                    ? "items-center text-center justify-center self-center"
                    : `flex gap-5 relative w-full justify-evenly`
                }
              >
                {ad.hasImg && (
                  <img src={ad.img} alt="" className="w-80  max-[700px]:w-36" />
                )}
                <div className="flex flex-col items-center text-center">
                  {ad.hasText && (
                    <>
                      <h1 className="text-white font-semibold font-sofia text-6xl">
                        {ad.isText}
                      </h1>
                    </>
                  )}
                  {ad.hasSubText && <h2 className="text-4xl">{ad.SubText}</h2>}
                  {ad.hasSubText && (
                    <p className="text-xl font-semibold">{ad.desc}</p>
                  )}
                  {ad.hasBtn && (
                    <CTAButton href="/notfound" primary margin="2rem">
                      Get Started
                    </CTAButton>
                  )}
                </div>
                <div className="flex flex-col">
                  {ad.rightText && (
                    <>
                      <h1 className="text-5xl font-semibold font-sofia">
                        {ad.title}
                      </h1>
                      <p className="text-lg font-semibold">{ad.desc}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdWrapper;
