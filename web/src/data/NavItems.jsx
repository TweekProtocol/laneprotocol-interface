const handleClickScroll = () => {
  const element = document.getElementById("about");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScrollB = () => {
  const element = document.getElementById("benefit");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScrollF = () => {
  const element = document.getElementById("features");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClickScrollR = () => {
  const element = document.getElementById("roadmap");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const NavItems = [
  {
    isProfile: true,
  },
  {
    href: "#about",
    text: "About",
    click: handleClickScroll,
  },
  {
    href: "#Benefit",
    text: "Benefit",
    click: handleClickScrollB,
  },
  {
    href: "#features",
    text: "Features",
    click: handleClickScrollF,
  },
  {
    href: "#roadmap",
    text: "Roadmap",
    click: handleClickScrollR,
  },
  {
    hasSocialIcons: true,
  },
  {
    hasCTA: true,
  },
];
