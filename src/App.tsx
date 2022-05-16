import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles, lightTheme, darkTheme} from './styles/theme';

import {Header} from './components/Header/index';

type ButtonProps ={
  darkTheme:boolean;
}

function App() {
  const [theme, setTheme] = useState<string>("light");
  const isDarkTheme = theme === "dark";

  const [parentName, setParentName] = useState<string>('John Obi')

  const themeResult = (themeResult:boolean):void => {
    const updatedTheme = themeResult ? "light" : "dark";
    setTheme(updatedTheme);
  }

  const updateName = (name: string):void => {
    setTheme(name)
}

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Header  name={parentName} updateName={updateName} />

      </>
    </ThemeProvider>
  );
}

export default App;
