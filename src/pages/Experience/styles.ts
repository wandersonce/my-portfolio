import styled, { keyframes } from 'styled-components';

import { fadeInUp, fadeInLeft } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const Container = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

margin: 60px auto;

.header-wrapper{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.header-wrapper > div{
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
}

.header-wrapper >div:last-child{
justify-content:center;

  h2{
    font-size:2.5rem;
    animation: 1s ${fadeInUpAnimation};
    width: 100%;
  }

  >div{
    width: 100%;
    max-width:300px;
  }

  >div >p{
    text-align:right;
    position:relative;
    font-weight:bold;
    font-size:1.2rem;
    color: var(--orange);
    animation: 1s ${fadeInLeftAnimation};
    max-width:270px;
    width: 100%;
  }

  >div>p::before{
    content:'';
    width:50%;
    height:2px;
    position:absolute;
    background-color: ${({ theme }) => theme.text};
    top:50%;
    left:0;
    transform: translate(0, -50%);
  }
}
`;