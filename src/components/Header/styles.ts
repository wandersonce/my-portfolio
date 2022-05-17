import styled from 'styled-components';

export const Container = styled.header`
  display:fixed;
  width: 100%;
  position:relative;
  height: 100px;
  margin-bottom: -100px;
  z-index: 9999;
`;

export const PersonalLogo = styled.div`
margin: auto;

img{
  width: 300px;
}
`;
export const NavigationMenu = styled.nav`
margin: auto;

a{
  text-decoration: none;
  padding: 0 10px;
  font-size: 1rem;
  font-weight: 600;
}

.navActive{
  color:#DC5126;
}

`;
export const ThemeToggle = styled.div`
margin: auto;
button{
  margin: auto;
  background:none;
  border:none;
  span{
    font-size: 30px;
  }
}
`;
