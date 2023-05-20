import { styled, keyframes } from "styled-components";

const bounce = keyframes`
0%, 20%, 50%, 80%, 100%{
  transform: translateY(0);
}
40%{
 transform: translateY(-30px);
}
60%{
 transform: translateY(-15px);
}
`;

export const StyleHeroSection = styled.section`
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.8) 100%
    ),
    url("./print.svg") center no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 5px;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 58rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  overflow: hidden;

  h1 {
    letter-spacing: 1.2rem;
    font-size: 6rem;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    margin: auto;
    font-family: "Share Tech Mono", monospace;
  }
  h3 {
    font-size: 4rem;
    margin: 1.5rem 0;
    font-family: "Share Tech Mono", monospace;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.orange} 0%,
      ${({ theme }) => theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: capitalize;
    overflow-x: hidden;
    font-family: "Share Tech Mono", monospace;
  }

  div {
    margin: 2.5rem 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      letter-spacing: 1.2rem;
      font-size: 2rem;
    }
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

export const StyledArrowDown = styled.span`
  position: absolute;
  bottom: 50px;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    animation: ${bounce} 2s infinite 8s;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const HeroSocailsIcons = styled.div`
  position: fixed;
  right: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    bottom: 50px;
  }
`;

export const SocailIcon = styled.a`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(249, 105, 14, 0.1);
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 1rem;
`;
