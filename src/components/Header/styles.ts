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

  @media only screen and (max-width: 810px) {
    bottom: 0;
    position: fixed;
    height: 80px;
    margin-bottom: 0;
    background-color: ${({ theme }) => theme.block};
    -webkit-box-shadow: 0px -2px 15px -4px rgba(0,0,0,0.45); 
    box-shadow: 0px -2px 15px -4px rgba(0,0,0,0.45);
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

@media(max-width:810px){
  button{
    margin: auto 40px;
  }
}
`;
