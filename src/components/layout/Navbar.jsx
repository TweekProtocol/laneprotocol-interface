import React, { useState } from "react";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  MobileLogo,
  Nav,
  NavItem,
  NavLink,
  NavList,
  Profile,
} from "../../styles/layout/Nav.styles";
import { NavItems } from "../../data/NavItems";
import { CTAButton, CTButton } from "../../styles/common/CTAButton.styled";
import useScrollDirection from "../../hooks/useScrollDirection";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");
  const alert = () => {
    const functionThatReturnPromise = () =>
      new Promise((resolve) => setTimeout(resolve, 3000));
    toast.promise(
      functionThatReturnPromise,
      {
        pending: "Coming Soon",
        success: "After Testnet",
      },
      { position: "top-center" }
    );
  };

  return (
    <>
      <Nav scroll={scrollDirection}>
        <div>
          <a href="/">
            <Logo src="./asset/lane-logo.png" />
          </a>
        </div>
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => {
              return (
                <NavItem
                  key={index}
                  index={index}
                  menuOpen={menuOpen}
                  onClick={() => setMenuOpen(false)}
                >
                  {navItem.isProfile ? (
                    <NavLink href="#hero-section">
                      <Profile>
                        <MobileLogo
                          src="./asset/lane-logo.png"
                          alt="Lane Protocol"
                          className="w-24"
                        />
                        <span></span>
                      </Profile>
                    </NavLink>
                  ) : null}
                  {navItem.text ? (
                    <NavLink onClick={navItem.click} className="cursor-pointer">
                      {navItem.text}
                    </NavLink>
                  ) : null}
                  {navItem.hasCTA ? (
                    <CTButton onClick={alert}>Launch Dapp</CTButton>
                  ) : null}
                </NavItem>
              );
            })}
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
