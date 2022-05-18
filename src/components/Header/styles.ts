import styled from 'styled-components';

export const Container = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 100px;
margin-bottom: -100px;
z-index: 9990;
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
