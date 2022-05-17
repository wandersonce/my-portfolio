import styled from 'styled-components';

import backgroundNameImg from '../../assets/test.jpeg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position:relative;

  button{
    position:absolute;
    top:30px;
    right:30px;
    background:none;
    border:none;
    span{
      font-size: 30px;
    }
  }

  .center-container{
    height:100%;
    width:100%;
    display:flex;
    flex-direction:row;

    div{
      display:flex;
      flex-basis:50%;
      align-items:center;
      justify-content:center;
      padding:4rem;
    }

    div h1{
      font-size:7rem;
      font-weight:bold;
      background: url(${backgroundNameImg})  no-repeat center;
      background-size: cover;
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
`;
