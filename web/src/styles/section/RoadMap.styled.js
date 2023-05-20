import { styled } from "styled-components";

export const RoadMapWrapper = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0 5rem 0;
`;

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const TaskText = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 5rem;
  font-family: "Share Tech Mono", monospace;
  text-align: center;
`;

export const SingTask = styled.div`
  color: ${({ theme }) => theme.colors.taskTextColor};
  padding: 1rem;
  position: relative;
  text-align: left;
  width: 450px;
  margin-bottom: -1rem;

  .span {
    animation: 1.5s linear infinite spinner;
  }

  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 350px;
  }
`;

export const RoadmapContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.black};
  backdrop-filter: blur(10rem);
  -webkit-backdrop-filter: blur(10rem);

  h3 {
    margin-bottom: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    margin-left: 1rem;
    font-family: "Share Tech Mono", monospace;
  }

  li {
    font-size: 1.5rem;
    font-family: "Share Tech Mono", monospace;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
    letter-spacing: 1px;
    margin-left: 1rem;
  }
`;

export const RoadmapHold = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.tab}) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Date = styled.p`
  display: inline-block;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    90deg,
    #feed7a,
    #ff8400 55%,
    #df90f7 80%,
    #feed7a
  );
  -webkit-background-clip: text;
  background-clip: text;
  border-radius: 100px;
  font-weight: 800;
  font-size: 1.5rem;
  color: transparent;
  position: absolute;
  top: -15px;
  left: 50%;
  z-index: 1;
  text-align: center;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  -webkit-animation: text-transition 3s linear infinite;
  animation: text-transition 3s linear infinite;
  background-size: 300% 100%;

  @keyframes text-transition {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -150% 0;
    }
  }
`;
