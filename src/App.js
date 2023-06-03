import { ThemeProvider } from "styled-components";
import { GlobalStyles, LoaderImg } from "./styles/Global";
import {
  BottomNav,
  DappNavbar,
  Footer,
  NavBar,
  ScrollTop,
  TopBanner,
} from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { Dapp, Home, NotFoundPage } from "./pages";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ReactTypingEffect from "react-typing-effect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = {
    colors: {
      black: "#000",
      white: "rgba(240, 247, 255,1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158, 1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51, 153, 1)",
      gray: "rgb(38 38 38 )",
      taskBg: "rgba(255,255,255,0.1)",
      taskTextColor: "rgba(255,255,255,.6)",
    },
    mobile: "700px",
    tab: "800px",
    ipad: "1024px",
    transition: "all 650ms ease-in-out",
  };

  const location = useLocation();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    setTimeout(() => {
      setLoad(false);
    }, 15000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      {load ? (
        <div className="flex flex-col justify-center items-center gap-5 mt-44">
          <LoaderImg src="./asset/lane-logo.png" className="w-fit" alt="Logo" />
          <ReactTypingEffect
            text={[
              "Empowering Decentralized Connection on the core dao chain.",
            ]}
            cursorRenderer={(cursor) => <h3 className="text-2xl">{cursor}</h3>}
            displayTextRenderer={(text, i) => {
              return (
                <h3 className="text-2xl">
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return <span key={key}>{char}</span>;
                  })}
                </h3>
              );
            }}
          />
          <AiOutlineLoading3Quarters
            size={55}
            className="mt-16 text-center items-center self-center justify-center loader"
          />
        </div>
      ) : (
        <>
          <TopBanner />
          {location.pathname === "/" ? <NavBar /> : <DappNavbar />}
          <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route path="/dapp" element={<Dapp />} />
            <Route path="/notfound" element={<NotFoundPage />} />
          </Routes>
          <ScrollTop />
          {location.pathname === "/" ? "" : <BottomNav />}
          <div className="p-5">
            <Footer />
          </div>
        </>
      )}
      {/* </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;
