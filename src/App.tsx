import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles, lightTheme, darkTheme} from './styles/theme';

import {Header} from './components/Header/index';
import { Main } from './components/Main';

function App() {
  const [theme, setTheme] = useState<string>("dark");
  const [themeMode, setThemeMode] = useState<string>('dark')
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    //Getting the last theme choosed from localStorage
    const savedTheme = localStorage.getItem("theme");
    //Checking user preference
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    //If the theme has been set use it, else use the user preference
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const changeThemeMode = (themeMode: string):void => {
    setTheme(themeMode)
}

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Header  themeModeProps={themeMode} updateTheme={changeThemeMode} />
        <Main />

      </>
    </ThemeProvider>
  );
}

export default App;
