import styled from 'styled-components';

export const NavigationMenu = styled.ul`
display: flex;
list-style: none;
flex-flow: row nowrap;

@media only screen and (max-width: 810px) {
  display:none;
  position: fixed;
  right: 0;
  top: 0;

  height: 100vh;
  width: 300px;

  flex-flow: column nowrap;

  background-color: red;
  padding: 1rem 2rem;
}

a{
  text-decoration: none;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 600;
}

.navActive{
  color:#DC5126;
}

li{
  padding: 0 1rem;
  cursor: pointer;

  @media only screen and (max-width: 810px) {
    padding: 1rem 0;
  }
}
`;


interface OpenState{
  open: boolean;
}

export const BurgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  bottom: 15px;
  right:20px;
  display:flex;
  justify-content:space-around;
  flex-flow: column nowrap;

  div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}:OpenState) => open ? '#DC5126;' : '#fff;'}
    border-radius: 10px;
    transform-origin: 1px;

    transition: all 0.3s linear;

    &:nth-child(1){
      transform: ${({open}:OpenState) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2){
    transform: ${({open}:OpenState) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({open}:OpenState) => open ? 0 : 1};
}

&:nth-child(3){
  transform: ${({open}:OpenState) => open ? 'rotate(-45deg)' : 'rotate(0)'};
}
`;