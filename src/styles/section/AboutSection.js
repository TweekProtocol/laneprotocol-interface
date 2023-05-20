import { styled, keyframes, css } from "styled-components";
import { motion } from "framer-motion";

const typing = keyframes`
0%{
  width: 0ch;
}
100%{
  width: 9ch;
}
`;

const blink = keyframes`
0%{
  border-radius: 4px solid rgba(255, 255, 255, 0);
}
100%{
  border-right: 4px solid rgba(255, 255, 255, 0);
}
`;

const top = keyframes`
0%{
  transform: rotateY(-15deg);
}
100%{
  transform: rotateY(16deg);
}
`;

const navAnimation = ({ index }) => css`
  animation: ${top} 2s ease-in-out infinite ${index / 3 + 2}s;
`;

export const StyledAboutSection = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0 5rem 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const TypingUse = styled.h1`
  letter-spacing: 5px;
  font-size: 3rem;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  width: 9ch;
  font-family: "Poppins", sans-serif;
  animation: ${typing} 1s steps(9), ${blink} 1s ease-in-out infinite;
  border-right: 4px solid rgba(255, 255, 255, 1);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
    width: 11ch;
    justify-content: center;
  }
`;

export const StyledUses = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const SingleUses = styled(motion.div)`
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  width: 350px;
  height: 250px;
  border-radius: 9px;
  ${navAnimation};
  transition: ${({ theme }) => theme.transition};

  span {
    padding: 11px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 6px;
    font-size: 1rem;
  }

  p {
    font-weight: 600;
    font-size: 1.3rem;
    text-align: center;
    align-items: center;
    align-content: center;
    padding: 3rem;
    transform: translateY(5rem);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 300px;
    height: 200px;

    p {
      font-size: 1.1rem;
    }
  }
`;
