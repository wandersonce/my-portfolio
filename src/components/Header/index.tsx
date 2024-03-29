import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import {Container, PersonalLogo, ThemeToggle } from './styles';

import LogoWhite from '../../assets/logoWhiteNew.png';
import LogoBlack from '../../assets/logoOrange.png';
import { Burger } from '../NavigationMenu/Burger';

interface FuncProps {
  themeModeProps:string;
  updateTheme: (arg: string) => void
}

export function Header({themeModeProps,updateTheme}:FuncProps) {
  const [theme, setTheme] = useState<string>("dark");
  const isDarkTheme = theme === "dark";

  const [firstChildName, setFirstChildName] = useState<string>('');

  //Theme handle useEffect
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
      <PersonalLogo>
       <Link to="/"> 
      {isDarkTheme ? <img src={LogoWhite} alt="Wanderson Castro" /> : <img src={LogoBlack} alt="Wanderson Castro" /> }
      </Link>
      </PersonalLogo>

    <Burger />
        
      <Outlet />
      <ThemeToggle>
        <button onClick={toggleTheme}>
        {isDarkTheme ?
          <span aria-label="Light mode" role="img">🌞</span> :
          <span aria-label="Dark mode" role="img">🌜</span>}
          </button>
      </ThemeToggle>
      </Container>
  )

}