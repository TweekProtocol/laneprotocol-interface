import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
 *::before,
 *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 html{
   font-family: "Share Tech Mono", monospace;
   scroll-behavior: smooth;
   color: ${(props) => props.theme.colors.white}; 
   background: ${(props) => props.theme.colors.navyBlue};
   font-size: 12px;
   overflow-x: hidden;

   @media(max-width: ${({ theme }) => theme.mobile}){
      margin-bottom: 11rem;
    padding-bottom: 11rem;
   }
 }   

 a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.green};
    transition: all 250ms ease-in-out;

    &:hover{
        color: ${(props) => props.theme.colors.orange};
    }
 }

 ul{
    list-style: none;
 }

 /* hr{
    background: linear-gradient(to right, rgba(249, 105, 14, 1) 10%, rgba(102, 51, 153, 1) 100% );
    background-color: rgb(163 163 163);
    border-bottom: 1px;
 } */


::-webkit-scrollbar{
   width: 10px;
} 
::-webkit-scrollbar-track{
   background: #7a8ba9;
}
::-webkit-scrollbar-thumb{
   background: #31435f;
   border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover{
   background: #202e46;
}

.loader{
   animation: 1.5s linear infinite spinner;
   align-items: center;
    text-align: center;
    align-content: center;
    margin-left: 5rem;
    margin-top: 5rem;
}

@keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    30% {
      color: rgba(249, 105, 14, 1);
    }
    60% {
      color: ${({ theme }) => theme.colors.green};
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
`;

export const LoaderImg = styled.img``;
