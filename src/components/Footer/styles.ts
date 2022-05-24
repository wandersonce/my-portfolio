import styled, { keyframes } from 'styled-components';

export const Container = styled.footer`
display: flex;
justify-content: center;
align-items: center;  
border-top: 1px solid var(--dark-gray);

div{
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  align-items:center;
  flex-grow: 1;
  padding: 10px 30px;
}

@media(max-width:680px){
  flex-flow: column wrap;
  margin-bottom: 40px;
}
`