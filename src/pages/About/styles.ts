import styled from 'styled-components';

export const Container = styled.div`

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

  h2{
    font-size:2.5rem;
  }

  >div>p{
    font-size: 1.2rem;

    margin-bottom: 1rem;
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

    &:hover{
      filter: brightness(0.9);
    }

    &:first-child{
    margin-right: 1rem;
    }
  }
}
`;