import React, { useEffect, useState } from "react";
import { HomeText, DappSkeleton } from "../components";
import { Load } from "../components/dapp/Skeleton";

const Dapp = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Dapp | Lane Protocol";
  }, []);
  return (
    <div className="flex flex-col mt-32 max-[700px]:mt-12 gap-10 max-[800px]:mt-12">
      <HomeText />
      <div className="flex flex-col items-center text-center justify-center mt-1 p-10">
        <DappSkeleton />
      </div>
    </div>
  );
};

export default Dapp;
