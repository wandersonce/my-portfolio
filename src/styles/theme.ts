import { createGlobalStyle } from 'styled-components';

export const theme = {
  body: String,
  text: String,
}

export type MyProps = {
  theme: typeof theme
}

export const GlobalStyles = createGlobalStyle<MyProps>`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing:antialiased;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  html{
    @media(max-width:1080px){
      font-size:93.75%; //15px
    }
    @media(max-width:720px){
      font-size:87.5%; //14px
    }
  }

  body, input, textarea, button{
    font-family: 'Montserrat', sans-serif;
    font-weight:400;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight:600;
  }

  a{
    color: ${({ theme }) => theme.text};
  }

  button{
    cursor:pointer;
  }
  
  [disabled]{
    opacity:0.6;
    cursor:not-allowed;
  }
`;

export const lightTheme = {
  body: '#f1f1f1',
  text: '#000000',
};

export const darkTheme = {
  body: '#000000',
  text: '#f1f1f1',
};