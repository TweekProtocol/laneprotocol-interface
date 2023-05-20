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
import { CTAButton } from "../../styles/common/CTAButton.styled";
import useScrollDirection from "../../hooks/useScrollDirection";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

  return (
    <>
      <Nav
        scroll={scrollDirection}
        // className={`${router.pathname == "/dapp" ? "hidden" : "flex"}`}
      >
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
                    <CTAButton href="/dapp" target="_parent">
                      {" "}
                      Launch Dapp{""}
                    </CTAButton>
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
