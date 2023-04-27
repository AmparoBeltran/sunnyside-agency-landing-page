import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  box-sizing: border-box;
    
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }

  
  body {
    margin: 0 auto;
    /* display: flex; */
    font-size: 18px;
    color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};

    min-height: 100vh;

  }

  h1, h6{
    font-family: "Fraunces", serif;

  }

  

  @media (min-width: ${({ theme }) => theme.desktop}) {}

`;

export default GlobalStyles;
