import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const DappLoader = () => {
  return (
    <div className="h-96 w-full">
      <SkeletonTheme color="#202020" highlightColor="#444">
        <div className="mt">
          <Skeleton height={`100px`} width={`50%`} />
          <Skeleton height={`50%`} width={`30%`} />
          <Skeleton height={`30%`} width={`30%`} />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default DappLoader;
