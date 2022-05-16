import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {GlobalStyles, lightTheme, darkTheme} from './styles/theme';

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

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


  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />

        <button onClick={toggleTheme}>
          {isDarkTheme ?
            <span aria-label="Light mode" role="img">🌞</span> :
            <span aria-label="Dark mode" role="img">🌜</span>}
        </button>
      </>
    </ThemeProvider>
  );
}

export default App;
