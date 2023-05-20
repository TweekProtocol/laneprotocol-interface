import React, { useEffect, useState } from "react";
import { ImArrowUp2 } from "react-icons/im";
import { StyledScroll } from "../../styles/layout/ScrollTop.styled";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <StyledScroll
      visible={visible}
      onClick={scrollToTop}
      className="drop-shadow-2xl shadow-lg shadow-cyan-500/50"
    >
      <ImArrowUp2 size={20} />
    </StyledScroll>
  );
};

export default ScrollTop;
