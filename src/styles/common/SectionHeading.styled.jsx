import { styled } from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 7rem;

  h1 {
    text-transform: uppercase;
    display: inline-block;
    font-size: 2rem;
    margin: 0.5rem 0 1.5rem 0;
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 5px;
      width: 50%;
      background: ${({ theme }) => theme.colors.green};
      position: absolute;
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    margin-bottom: 5rem;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: left;
  }
`;
