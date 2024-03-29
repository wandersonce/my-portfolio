import { createGlobalStyle } from 'styled-components';

export const theme = {
  body: String,
  text: String,
  block: String,
  textLight: String,
  border: String
}

export type MyProps = {
  theme: typeof theme
}

export const GlobalStyles = createGlobalStyle<MyProps>`
:root{
  --orange: #F58735;
  --light-gray: #DDDDDD;
  --middle-gray: #A8ACB8;
  --dark-gray: #999FAD;
  --blue:#3F547F;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  overflow-x:hidden;
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
    @media(max-width:720px){
      padding-bottom: 40px;
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
    text-decoration:none;
  }

  button{
    cursor:pointer;
  }
  
  [disabled]{
    opacity:0.6;
    cursor:not-allowed;
  }

  #tsparticles{
    position: absolute;
    height: 100%;
    z-index: -1;
    width: 100vw;
  }

  @media only screen and (max-width: 640px) {
    body{
      overflow-x:hidden;
    }
  }
`;

export const lightTheme = {
  body: '#f1f1f1',
  text: '#323a4f',
  block: '#DDDDDD;',
  textLight: 'var(--light-gray);',
  border: 'var(--dark-gray);'
};

export const darkTheme = {
  body: '#323a4f',
  text: '#f1f1f1',
  block: '#999FAD;',
  textLight: 'var(--dark-gray);',
  border: 'var(--light-gray);'
};