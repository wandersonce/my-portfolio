import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

margin: 60px auto;

  h2{
    font-size:2.5rem;
  }

  >p{
    text-align:right;
    position:relative;
    font-weight:bold;
    font-size:1.2rem;
  }

  >p::before{
    content:'';
    width:50%;
    height:2px;
    position:absolute;
    background-color: #fff;
    top:50%;
    left:0;
    transform: translate(0, -50%)
  }
`;

export const PortfolioBox = styled.div`

`;