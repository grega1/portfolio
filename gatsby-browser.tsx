import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    color: ${({ theme }) => theme.colors.text};
   
  }
`;

export const theme = {
  sizes: {
    padding: "0 100px",
    maxWidth: "1240px",
  },

  colors: {
    primary: "#FFC107",
    secondaryYellow: "#FFEB3B",
    secondary: "#6A1B9A",
    secondaryPurple: "#8849AE",
    backGround: "#161313",
    text: "#FFFFFF",
  },
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
