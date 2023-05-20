import { styled, keyframes, css } from "styled-components";

const navItemFade = keyframes`
 from{
  opacity: 0;
  transform: translate(50px);
 }  
 to {
    opacity: 1;
    transform: translate(0px);
 } 
`;

const navAnimation = ({ index }) => css`
  animation: ${navItemFade} 0.5s ease forwards ${index / 7 + 0.5}s;
`;

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 98;
  transition: all 1s ease-in-out;
  background: rgba(2, 12, 27, 0.8);
  border-bottom: 1px solid gray;
  top: ${({ scroll }) => (scroll === "down" ? "-80px" : "40px")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 60px;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
    top: 0;
  }
`;

export const Logo = styled.img`
  width: 280px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
  }
`;

export const MobileLogo = styled.img``;

export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${({ theme, menuOpen }) =>
    menuOpen ? "none" : theme.colors.lightNavyBlue};
  transition: ${({ theme }) => theme.transition};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
    display: inline-block;
  }
`;

export const LineOne = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) scaleX(2) translate(-4px, 4px) " : "none"};
`;

export const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
`;

export const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? "0" : "15px")};
  background: linear-gradient(
    135deg,
    rgba(249, 105, 14, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg) scaleX(2) translate(-4px, -4px) " : "none"};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
    background: ${(props) => props.theme.colors.lightNavyBlue};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }

  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 24rem;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
    background: ${(props) => props.theme.colors.lightNavyBlue};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const NavItem = styled.li`
  margin: 0.2rem 0.7rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ menuOpen }) => (menuOpen ? navAnimation : null)}
  }
`;

export const NavLink = styled.p`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.5px;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({ theme }) => theme.colors.orange};
    transition: all ease-in-out 300ms;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const Profile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 9rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
    }
  }
`;

export const SocialIcons = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`;
