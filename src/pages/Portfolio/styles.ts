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
    background-color: ${({ theme }) => theme.text};
    top:50%;
    left:0;
    transform: translate(0, -50%);
  }

  button{
    padding: 10px 40px;
    font-weight: bold;
    text-transform: uppercase;
    background-color:var(--orange);
    color:#fff;
    border: none;
    margin-top: 30px;

    &:hover{
      filter: brightness(0.9);
    }
  }

  .gitHeader-Wrapper{
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items:center;
    margin-top: 60px;

    img{
      width: 2 5rem;
      height: 2.5rem;
      margin-right: 1rem;
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
    position: relative;

    &:hover{
      .titleWrapper{
        opacity: 1;
      }
    }
  }

  .itemTitle{
    text-align: center;
  }

  .titleWrapper{
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;

    position:absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: auto;
    padding: 10px;

    background-color: var(--orange);
    color: var(--light-gray);

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  @media(max-width:810px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width:680px){
    grid-template-columns: repeat(2, 1fr);
  }
`;


export const GitWrapper = styled.div`
  max-height:300px;
  overflor-y: scroll;
`;