import { styled } from "styled-components";

export const FeaturesWrapper = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 10rem 0 5rem 0;
`;

export const FeaturesWrap = styled.div`
  background: #000;
  width: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const FItemsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  p {
    font-size: 1.2rem;
    display: flex;
    font-weight: 600;
    padding: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 1rem;
      padding: 0.7rem;
    }
  }
`;
