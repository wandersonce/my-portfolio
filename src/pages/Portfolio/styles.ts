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

  >div >p{
    text-align:right;
    position:relative;
    font-weight:bold;
    font-size:1.2rem;
  }

  >div>p::before{
    content:'';
    width:50%;
    height:2px;
    position:absolute;
    background-color: #fff;
    top:50%;
    left:0;
    transform: translate(0, -50%);
  }

  button{
    padding: 10px 40px;
    font-weight: bold;
    text-transform: uppercase;
    background-color:#DC5126;
    color:#fff;
    border: none;
    margin-top: 30px;

    &:hover{
      filter: brightness(0.9);
    }
  }

`;

export const PortfolioBox = styled.div`
  display: grid;
  width: 100%;
  max-width: 1000px;
  padding: 0 30px;
  margin-top: 40px;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

   >div a{
    max-width: 200px;
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;
  }

  .itemTitle{
    text-align: center;
  }

  @media(max-width:810px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width:680px){
    grid-template-columns: repeat(2, 1fr);
  }
`;