import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 20rem;
  padding: 3rem;
  color: #7e91ae;
  text-align: center;
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #7e91ae;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: start;
  }

  @media (max-width: ${({ theme }) => theme.tab}) {
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: start;
  }
`;

export const FooterNav = styled.div`
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Sofia Sans Semi Condensed", sans-serif;
  }

  a {
    font-size: 18px;
    font-family: "Share Tech Mono", monospace;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: translateY(-5rem);
  }

  @media (max-width: ${({ theme }) => theme.tab}) {
    transform: translateY(-3rem);
  }
`;

export const StyledIcon = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-bottom: 1px solid #7e7e7e;
    padding-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.tab}) {
    border-bottom: 1px solid #7e7e7e;
    padding-bottom: 1rem;
  }
`;

export const FooterImg = styled.img``;

export const ProductsText = styled.p`
  cursor: pointer;
  font-size: 18px;
  color: ${(props) => props.theme.colors.green};
  transition: all 250ms ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;
