import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";

import {Container, NavigationMenu, PersonalLogo, ThemeToggle } from './styles';

import LogoWhite from '../../assets/logoWhite.svg';
import LogoBlack from '../../assets/logoBlack.svg';

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
      <PersonalLogo>
       
      {isDarkTheme ? <img src={LogoWhite} alt="Wanderson Castro" /> : <img src={LogoBlack} alt="Wanderson Castro" /> }
    
      </PersonalLogo>
        <NavigationMenu>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/" > Home
          </NavLink>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/about" > About
          </NavLink>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/skills" > Skills
          </NavLink>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/experience" > Experience
          </NavLink>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/portfolio" > Portfolio
          </NavLink>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/contact" > Contact
          </NavLink>
        </NavigationMenu>
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