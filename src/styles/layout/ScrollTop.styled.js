import { styled } from "styled-components";

export const StyledScroll = styled.div`
  display: ${({ visible }) => (visible ? "inline" : "none")};
  padding: 1rem;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.green};
  color: black;
  width: 3.8rem;
  justify-content: center;
  border-radius: 9px;
  text-align: center;
  z-index: 52;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.tab}) {
    right: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    right: 2rem;
  }
`;
