// import { DappNavbar, Footer, NotFound } from "@/components";
import React, { useEffect } from "react";
import { NotFound } from "../components";

const Notfound = () => {
  useEffect(() => {
    document.title = "Lane Protocol";
  });
  return (
    <div>
      {/* <DappNavbar /> */}
      <NotFound />
      {/* <Footer /> */}
    </div>
  );
};

export default Notfound;
