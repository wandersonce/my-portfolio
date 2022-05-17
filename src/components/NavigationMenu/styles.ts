import styled from 'styled-components';

export const NavigationMenu = styled.ul`
display: flex;
list-style: none;

@media only screen and (max-width: 40em) {
  position: fixed;
  right: 0;
  top: 0;

  height: 100%;

  flex-direction: column;

  background-color: white;
  padding: 1rem 2rem;

  transition: 0.2s ease-out;

  transform: translateX(100%);
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

  @media only screen and (max-width: 40em) {
    padding: 1rem 0;
  }
}
`;