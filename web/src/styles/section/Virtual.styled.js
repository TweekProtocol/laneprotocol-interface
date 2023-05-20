import { styled } from "styled-components";

export const VirtualWrapper = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15rem;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.8) 100%
    ),
    url("./asset/house.svg") center no-repeat;
  background-size: contain;
  position: relative;
  justify-content: center;
  text-align: center;

  img {
    animation: pulse 3s ease-in-out 1s infinite normal none running;
    transition: ${({ theme }) => theme.transition};
    position: relative;
    filter: drop-shadow(3px 4px 3px red);
    z-index: 1;
  }

  @keyframes pulse {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(3px, 15px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    align-content: center;

    img {
      order: 3;
    }
  }

  @media (max-width: ${({ theme }) => theme.tab}) {
    flex-direction: column;
  }
`;

export const VTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 5rem;
  text-align: justify;

  h2 {
    font-size: 3.5rem;
    font-weight: 600;
    font-family: "Sofia Sans Semi Condensed", sans-serif;
  }

  span {
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    order: 1;
    text-align: center;
    justify-content: center;
    justify-items: center;
    margin-left: 1rem;
    h2 {
      font-size: 3rem;
      margin-top: 6rem;
    }
  }
`;

export const VerseLogo = styled.img``;
