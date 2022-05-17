import styled from 'styled-components';

import backgroundNameImg from '../../assets/coding6.jpg';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
position:relative;

.center-container{
  height:100%;
  width:100%;
  display:flex;
  flex-direction:row;

  div{
    display:flex;
    flex-basis:50%;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    padding:4rem;

    h3{ 
      font-size:1.6rem;
    }
  }

  div h1{
    font-size:7rem;
    font-weight:bold;
    background: url(${backgroundNameImg})  no-repeat left;
    background-size: contain;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .fadeIn-item {
    opacity: 0;
    animation-name: fadein;
    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }
}
`