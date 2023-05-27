import React from "react";
import {  ThemeProvider } from "styled-components";
import  Theme  from "./theme";
import GlobalStyles from "./globalStyles";

export const wrapRootElement = ({ element }) => (
  
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
