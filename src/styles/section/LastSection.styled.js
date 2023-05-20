import { styled } from "styled-components";

export const LastWrapper = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  padding: 10rem 0 5rem 0;
  overflow: hidden;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.8) 100%
    ),
    url("./asset/world.svg") center no-repeat;
  background-size: contain;
  position: relative;
  justify-content: center;
  text-align: center;
  /* margin-top: 40px; */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.tab}) {
    flex-direction: column;
  }
`;

export const LastWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 5rem;
  text-align: justify;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    font-family: "Sofia Sans Semi Condensed", sans-serif;
  }

  span {
    color: ${({ theme }) => theme.colors.orange};
  }

  p {
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.tab}) {
    text-align: center;
    padding: 0;
  }
`;

export const LaneLogoWR = styled.img``;
