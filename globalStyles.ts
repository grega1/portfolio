import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    color: ${({ theme }) => theme.colors?.white};
   
  }
  
`;
export default GlobalStyles;