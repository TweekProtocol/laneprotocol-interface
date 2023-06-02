import React, { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const DappLoader = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="h-auto w-full flex items-center justify-center mb-5">
      <div className="flex flex-col justify-between">
        <img
          src="./asset/portal-nft.png"
          alt="Portal"
          className="w-80 bg-blue-200 p-5 rounded-xl hover:-translate-y-2 ease-linear duration-1000 hover:bg-green-500 transition-all cursor-pointer shadow shadow-white"
        />
        <h1 className="text-3xl font-semibold">LaneDrop</h1>
      </div>
    </div>
  );
};

export default DappLoader;
