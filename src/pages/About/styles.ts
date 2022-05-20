import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInLeft } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const Container = styled.div`
h2{
  font-size:2.5rem;
  animation: 1s ${fadeInUpAnimation};
}

.title-wrapper{
  max-width: 230px;
  margin-bottom: 30px;
}

.subtitle-header{
  text-align:right;
  position:relative;
  font-weight:bold;
  font-size:1.2rem;
  color: var(--orange);
  animation: 1s ${fadeInLeftAnimation};
}

.subtitle-header::before{
  content:'';
  width:50%;
  height:2px;
  position:absolute;
  background-color: ${({ theme }) => theme.text};
  top:50%;
  left:0;
  transform: translate(0, -50%);
}

.about-wrapper{
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  align-items:center;
  min-height: 60vh;
  margin: 60px 30px;

  >div{
    display: flex;
    flex-flow: column wrap;
    justify-content:center;
    flex-basis:50%;
  }



  >div>p{
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }


}

.button-wrapper {
  display: flex;
  flex-flow: row wrap;
  margin-top:20px;

  a{
    padding: 10px 40px;
    font-weight: bold;
    text-transform: uppercase;
    background-color:var(--orange);
    transition: all 0.3s ease-in-out;

    &:hover{
      filter: brightness(0.9);
    }

    &:first-child{
    margin-right: 1rem;
    }
  }
}

.education-wrapper{
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;

  .title-wrapper{
    max-width: 250px;
  }

  .education-items-wrapper{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .edu-right, .edu-left{
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items:center;
  }

  .edu-right{
    border-lef: 2px solid var(--light-gray);
    margin-left: 30px;
  }

  .edu-left{
    border-right: 2px solid var(--light-gray);
  }

  .edu-right div:first-child, .edu-left div:last-child{
    font-size:5rem;
    color:${({ theme }) => theme.textLight};
    transition: color 0.3s ease-in-out;

    &:hover{
      color:var(--orange);
    }
  }

  .edu-right div:first-child{
    position: relative;

    &:after{
      content:'';
      position: absolute;
      top:0;
      left:-10px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: var(--orange);
      z-index: 10;
    }
  }

  .edu-right  div:last-child{
    padding-left: 30px;
  }

  .edu-left div:first-child {
    text-align:right;
    padding-right: 30px
  }

}
`;

