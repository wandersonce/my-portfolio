import { NavLink, Outlet } from "react-router-dom";

import {NavigationMenu} from './styles'

export function NavigationMenuList() {
  return(
    <NavigationMenu >
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/" > Home
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/about" > About
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/skills" > Skills
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/experience" > Experience
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/portfolio" > Portfolio
          </NavLink>
          </li>
          <li>
          <NavLink  
            className={({ isActive }) => isActive ? "navActive" : "navNotActive"} 
          to="/contact" > Contact
          </NavLink>
          </li>
        </NavigationMenu>
  )
}