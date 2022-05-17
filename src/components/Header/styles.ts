import styled from 'styled-components';

export const Container = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 100px;
margin-bottom: -100px;
z-index: 9999;
position:relative;

  @media only screen and (max-width: 640px) {
    bottom: 0;
    position: fixed;
    margin-bottom: 0;
  }
`;

export const PersonalLogo = styled.div`
margin: auto;

img{
  width: 300px;
}

@media only screen and (max-width: 640px) {
  img{
    width: 200px;
  }
}
`;



export const HamburgerButton  = styled.button`
height: 3rem;
width: 3rem;
position: relative;
font-size: 12px;

display: none;

@media only screen and (max-width: 640px) {
  display: block;
}

/* Remove default button styles */
border: none;
background: transparent;
outline: none;

cursor: pointer;

&:after {
  content: "";
  display: block;
  position: absolute;
  height: 150%;
  width: 150%;
  top: -25%;
  left: -25%;
}
`;

export const Lines  = styled.div`
top: 50%;
margin-top: -0.125em;

&,
&:after,
&:before {
  height: 2px;
  pointer-events: none;
  display: block;
  content: "";
  width: 100%;
  background-color:${({ theme }) => theme.text};
  position: absolute;
}

&:after {
  /* Move bottom line below center line */
  top: -0.8rem;
}

&:before {
  /* Move top line on top of center line */
  top: 0.8rem;
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
