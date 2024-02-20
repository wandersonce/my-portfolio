import styled from 'styled-components';

import backgroundNameImg from '../../assets/coding6.jpg';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 200px);
  position: relative;

  .center-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      flex-basis: 50%;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 4rem;

      &:first-child {
        padding-bottom: 0;
        display: flex;
        align-items: center;
      }

      h3 {
        font-size: 1.6rem;
      }
    }

    div h1 {
      font-size: 5rem;
      font-weight: bold;

      overflow: hidden;
    }

    .fadeIn-item {
      opacity: 0;
      animation-name: fadein;
      animation-duration: 500ms;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    @keyframes fadein {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .center-container {
      div {
        width: 100%;
        display: flex;
      }
      div h1 {
        width: 100%;
        font-size: 4rem;
        line-height: 1em;
      }
    }
  }

  @media only screen and (max-width: 810px) {
    .center-container {
      flex-direction: column-reverse;
      div {
        padding: 2rem;
      }
      div h1 {
        font-size: 4rem;
        line-height: 1.5em;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    height: 100%;
    .center-container {
      div h1 {
        font-size: 3.5rem;
      }

      div {
        img {
          max-height: 400px;
        }
      }
    }
  }
`;
