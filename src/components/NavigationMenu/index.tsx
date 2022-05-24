import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import {NavigationMenu} from './styles';

interface NavigationMenuListProps{
  open: boolean;
  updateOpen: (open: boolean) => void;
}


export function NavigationMenuList({open,updateOpen }:NavigationMenuListProps) {

  const handleClick = () => {
    updateOpen(!open);
  }

  return(
    <NavigationMenu open={open}>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/"  onClick={handleClick} > Home
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/about" onClick={handleClick} > About
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/skills" onClick={handleClick} > Skills
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/experience" onClick={handleClick} > Experience
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/portfolio" onClick={handleClick}> Portfolio
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/contact" onClick={handleClick}> Contact
          </NavLink>
          </li>
        </NavigationMenu>
  )
}