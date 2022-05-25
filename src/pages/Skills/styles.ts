import styled, { keyframes } from 'styled-components';

import { fadeInUp, fadeInLeft } from 'react-animations';

import backImg from '../../assets/codeback.png';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const Container = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

margin: 60px auto;

h2{
  font-size:2.5rem;
  animation: 1s ${fadeInUpAnimation};
  width: 100%;
  text-align: center;
}

>div:first-child{
  width: 100%;
  max-width:250px;
}

>div >p{
  text-align:right;
  position:relative;
  font-weight:bold;
  font-size:1.2rem;
  color: var(--orange);
  animation: 1s ${fadeInLeftAnimation};
  max-width:230px;
}

>div>p::before{
  content:'';
  width:40%;
  height:2px;
  position:absolute;
  background-color: ${({ theme }) => theme.text};
  top:50%;
  left:20px;
  transform: translate(0, -50%);
}
`

export const SkillsWrapper = styled.div`
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 60px 30px;

h3{
  font-size: 1.5rem;
  margin-bottom: 50px;
}

>div{
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  >div{
    flex-basis:50%;
  }

  >div:last-child{
    display:grid;
    grid-template-columns: repeat(3, minmax(50px, 1fr));
    gap: 30px;

    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      align-self: center;
      text-align: center;
      font-weight: 600;
      filter: opacity(0.5);
      transition: filter 0.3s ease-in-out;

      &:hover{
        filter: opacity(1);
      }
    }

    img{
      padding-bottom: 15px;
      max-width: 120px;
      max-height: 80px;
    }
  }
}
`

export const FixedBack = styled.div`
  width: 100%;
  height:  150px;
  background: url(${backImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin: auto;

  >div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`