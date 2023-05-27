 import { DefaultTheme } from "styled-components";
 declare module 'styled-components' {
  export interface DefaultTheme {
    sizes:{
      padding:string,
      maxWidth:string

    },
    colors: {
      primary: string;
      secondaryYellow: string;
      secondary: string;
      secondaryPurple: string;
      background: string;
      white: string;
    };
  }
}
 const Theme:DefaultTheme  = {
    sizes: {
        padding: '0 100px' ,
        maxWidth: '1240px',
    },

  colors: {
    primary: '#FFC107',
    secondaryYellow: '#FFEB3B',
    secondary: '#6A1B9A',
    secondaryPurple: '#8849AE',
    background: '#161313',
    white: '#FFFFFF',
  },
};

export default Theme;