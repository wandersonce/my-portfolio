import React, {useState} from 'react';
import { NavigationMenuList } from '.';

import {BurgerMenu} from './styles';

type OpenState = {
  openStatus: boolean;
}

export function Burger() {
  const [open , setOpen] = useState<boolean>(false);

  return(
    <>
    <BurgerMenu open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerMenu>
    <NavigationMenuList   open={open}/>
    </>
  )
}