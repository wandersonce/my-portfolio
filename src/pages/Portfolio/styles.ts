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
    var(--orange);
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

  @media (max-width: 810px){
    h2{
      font-size: 1.8rem;
    }

    >div>p::before{
      content:'';
      width:35%;
      height:2px;
      position:absolute;
      background-color: ${({ theme }) => theme.text};
      top:50%;
      left:0;
      transform: translate(0, -50%);
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
  gap: 30px;


   >div a{
    max-width: 250px;
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;
    position: relative;
    border: 2px solid var(--dark-gray);
    -webkit-box-shadow: 0px 0px 4px 6px rgba(0,0,0,0.3); 
    box-shadow: 0px 0px 4px 6px rgba(0,0,0,0.3);

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

    >div a{
      height: 150px ;

      img{
        width: 100%;
        height:100%;
        object-fit:cover;
      }
    }
  }
`;


export const GitWrapper = styled.div`
  max-height:300px;
  overflow-y: scroll;
  background-color: var(--dark-gray);
  padding: 20px;
  margin: 10px;
  margin-top: 40px;
  max-width: 1000px;

  >div{
    margin-bottom: 20px;
    border-bottom: 1px dotted var(--light-gray);
  }

  a{
    text-decoration: none;

    &:hover{
      h3, p{
        color: var(--orange);
      }
    }
  }

  h3{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2rem;
  }

  p{
    font-weight: 600;
  }

  @media(max-width: 810px){
    margin: 40px 30px 05px 30px;
  }
`;