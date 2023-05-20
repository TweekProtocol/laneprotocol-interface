import { styled } from "styled-components";

export const DappNav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  position: fixed;
  z-index: 98;
  background: ${({ theme }) => theme.colors.navyBlue};
  border-bottom: 1px solid #7e7e7e;
  display: flex;
  top: 0;
  top: ${({ scroll }) => (scroll === "down" ? "-80px" : "40px")};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 60px;
  }
  @media (max-width: ${({ theme }) => theme.tab}) {
    top: 0;
  }
`;

export const DappNavLogo = styled.img`
  width: 280px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
  }
`;

export const NavList = styled.div`
  display: flex;
  gap: 3rem;

  a {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
  }
  &:hover.drop {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
