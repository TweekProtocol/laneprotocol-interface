import { FeaturesData } from "../../data/features";
import {
  FItemsWrap,
  FeaturesWrap,
  FeaturesWrapper,
} from "../../styles/section/Features.styled.";
import React from "react";

const Features = () => {
  return (
    <FeaturesWrapper id="features">
      <FeaturesWrap className="border border-neutral-500 rounded-lg">
        <h1 className="text-white text-5xl text-center">Features</h1>
        <div className="flex gap-5 max-[700px]:flex-col flex-wrap mt-10">
          {FeaturesData &&
            FeaturesData.map((data, index) => (
              <div className="flex gap-5" key={index}>
                <FItemsWrap className="flex gap-5 border border-neutral-500 rounded-lg hover:bg-slate-900">
                  <p>{data.text}</p>
                </FItemsWrap>
              </div>
            ))}
        </div>
      </FeaturesWrap>
    </FeaturesWrapper>
  );
};

export default Features;
