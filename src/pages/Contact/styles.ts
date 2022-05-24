import styled, { keyframes } from 'styled-components';

import { fadeInUp, fadeInLeft } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

margin: 60px auto;

  h2{
    font-size:2.5rem;
    animation: 1s ${fadeInUpAnimation};
    width: 100%;
  }

  >div{
    width: 100%;
    max-width:320px;
  }

  >div >p{
    text-align:right;
    position:relative;
    font-weight:bold;
    font-size:1.2rem;
    color: var(--orange);
    animation: 1s ${fadeInLeftAnimation};
    max-width:300px;
  }

  >div>p::before{
    content:'';
    width:60%;
    height:2px;
    position:absolute;
    background-color: ${({ theme }) => theme.text};
    top:50%;
    left:0;
    transform: translate(0, -50%);
  }

  >p{
    margin-top: 20px;
  }

  .contact-Wrapper{
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items:center;
    max-width: 1000px;

    div{
      text-align: center;
    }

    p{
      margin-bottom: 15px;
      font-weight: 600;
      font-size: 1.2rem;

      &:last-child{
        margin-top: 20px;
      }

      a{
       &:hover{
          text-decoration: underline;
          color: var(--orange);
       } 
      }
    }
  }
`;