import { createGlobalStyle } from 'styled-components';

export const theme = {
  body: String,
  text: String,
}

export type MyProps = {
  theme: typeof theme
}


export const GlobalStyles = createGlobalStyle<MyProps>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620'
};

export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1'
};