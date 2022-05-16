import React, { useEffect, useState } from 'react';

interface FuncProps {
  name:string;
  updateTheme: (arg: string) => void
}

export function Header({name,updateTheme}:FuncProps) {
  const [theme, setTheme] = useState<string>("light");
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

  useEffect(() => {  setFirstChildName(name)},[name])

  return (
    <div>
    <button onClick={toggleTheme}>
    {isDarkTheme ?
      <span aria-label="Light mode" role="img">🌞</span> :
      <span aria-label="Dark mode" role="img">🌜</span>}
      </button>
      </div>
  )

}