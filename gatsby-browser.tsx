import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import  theme  from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    color: ${({ theme }) => theme.colors.text};
   
  }
  
`;
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
