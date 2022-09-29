import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar-track {
      background-color: #F4F4F4;
  }
  ::-webkit-scrollbar {
      width: 10px;      
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: #EF4369;
      border: 1px solid white;
      border-radius: 8px;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
  }

  button {
    cursor: pointer;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  } 
`;

export interface ThemeInterface {
  colors: {
    primary: string;
    secondary: string;
    secondaryLight: string;
    pinkLight: string;
    black: string;
    white: string;
    purple: string;
    neutral: string;
    neutralMedium: string;
    purpleMedium: string;
  };
}

export const theme: ThemeInterface = {
  colors: {
    primary: '#2B0914',
    secondary: '#B78C96',
    secondaryLight: '#E8CAD3',
    pinkLight: '#F3CAC6',
    black: '#0E0B20',
    white: '#fff',
    purple: '#1C105A',
    purpleMedium: '#2B1E69',
    neutral: '#EBF3FA',
    neutralMedium: '#CBCAE9',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
