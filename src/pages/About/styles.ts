import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInLeft } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const Container = styled.main`
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

  @media (max-width:680px){
    flex-flow: column-reverse wrap;

    >div{
      flex-basis: 100%;
    }

    >div:first-child > div{
      width: 90vw !important;
      height: auto !important;
    }
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

  @media(max-width:680px){
    flex-flow: row wrap;

    a{
      padding: 10px 20px;
    }
  }
}

.education-wrapper{
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  padding-bottom: 60px;

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
    align-items:center;
    overflow: visible;
  }

  .edu-right{
    border-lef: 2px solid var(--light-gray);
    margin-left: 30px;
  }

  .edu-left{
    border-right: 2px solid var(--light-gray);
    justify-content: flex-end;
  }

  .edu-right div:first-child, .edu-left div:last-child{
    font-size:5rem;
    color:${({ theme }) => theme.textLight};
    transition: color 0.3s ease-in-out;
    overflow: visible;
    width: 190px;

    &:hover{
      color:var(--orange);
    }
  }

  .edu-right:nth-child(4n+2) div:first-child,.edu-left:nth-child(3) div:last-child{
    position: relative;

    &:after{
      content:'';
      position: absolute;
      top:50%;
      left:-35px;
      border-radius: 50%;
      transform: translate(0, -50%);
      width: 10px;
      height: 10px;
      background-color: var(--orange);
      z-index: 10;
      transition: all 0.3s ease-in-out;
    }

    &:hover:after{
      transform: scale(1.5);
    }
  }

  .edu-left:nth-child(3) div:last-child{
    &:after{
      right:-06px;
      left:unset;
    }
  }

  .edu-right  div:last-child{
    padding-left: 30px;
  }

  .edu-left div:first-child {
    text-align:right;
    padding-right: 30px
  }

  @media(max-width:680px){
    .education-items-wrapper{
      padding-left: 30px ;
      padding-right: 30px;
    }

    .edu-right div:first-child, .edu-left div:last-child{
    font-size:3.5rem;
  }

  .edu-right{
     margin-left: 10px;
     justify-content:flex-start;
   }

   .edu-right  div:last-child{
    padding-left: 0;
  }

  .edu-left{
    flex-direction:column-reverse;
  }
  .edu-left div:first-child{
    padding-right: 10px ;
  }

  .edu-left:nth-child(3) div:last-child{
    text-align:right;
    padding-right: 10px;
  }

  .edu-right:nth-child(4n+2) div:first-child{
    &:after{
      left: -16px ;
    }
  }

  .edu-left:nth-child(3) div:last-child::after{
    right: -6px ;
  }
}

  h3{
    font-size:1.5rem;
    margin-top: 60px;
    animation: 1s ${fadeInUpAnimation};
  }

  .licensesWrapper{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
    background: ${({ theme }) => theme.block};

    @media(max-width:680px){
      min-height: 45vh;
    }
  }

  .licCert-wrapper{
    display: flex;
    flex-flow: row wrap;
    max-width: 1000px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border: 1px solid ${({ theme }) => theme.border};
    
    >div{
      flex-basis: 50%;
    }

    >div:first-child{
      text-align: center;
      padding-right: 10px;

      img {
        width: 100px;
      }
    }

    >div:last-child{
      font-size: 1.2rem;
      font-weight: 600;
      text-align: left;
      padding-left: 10px;
    }

    @media(max-width:680px){
      padding: 20px;
      flex-flow: column nowrap;
      >div:last-child{
        font-size: 1rem;
        overflow: initial;
      }
    }
  }

}
`;

