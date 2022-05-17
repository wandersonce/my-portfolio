import React, { useEffect, useState } from 'react';

import {Container } from './styles';

interface FuncProps {
  themeModeProps:string;
  updateTheme: (arg: string) => void
}

export function Header({themeModeProps,updateTheme}:FuncProps) {
  const [theme, setTheme] = useState<string>("dark");
  const isDarkTheme = theme === "dark";

  const [firstChildName, setFirstChildName] = useState<string>('');

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

  const toggleTheme = ( ) => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);

    updateTheme(updatedTheme);
  };

  useEffect(() => {  setFirstChildName(themeModeProps)},[themeModeProps])

  return (
    <Container>
      <button onClick={toggleTheme}>
      {isDarkTheme ?
        <span aria-label="Light mode" role="img">🌞</span> :
        <span aria-label="Dark mode" role="img">🌜</span>}
        </button>

        <div className="center-container">
          <div></div>
          <div>
            <h1 className="fadeIn-item">
            I'm <br />
            Wanderson <br />
            Castro
          </h1>
          </div>
        </div>
      </Container>
  )

}