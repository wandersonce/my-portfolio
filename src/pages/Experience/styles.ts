import styled, { keyframes } from 'styled-components';

import { fadeInUp, fadeInLeft, fadeInRight } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;

  margin: 60px auto;

  .header-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 680px) {
      flex-direction: column-reverse;

      > div:last-child {
        align-items: center;
        > div {
          width: 250px !important;
        }

        p {
          width: 235px !important;
        }
      }

      > div:first-child > div {
        width: 90vw !important;
      }
    }
  }

  .header-wrapper > div {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
  }

  .header-wrapper > div:last-child {
    justify-content: center;

    h2 {
      font-size: 2.5rem;
      animation: 1s ${fadeInUpAnimation};
      width: 100%;
    }

    > div {
      width: 100%;
      max-width: 300px;
    }

    > div > p {
      text-align: right;
      position: relative;
      font-weight: bold;
      font-size: 1.2rem;
      color: var(--orange);
      animation: 1s ${fadeInLeftAnimation};
      max-width: 270px;
      width: 100%;
    }

    > div > p::before {
      content: '';
      width: 50%;
      height: 2px;
      position: absolute;
      background-color: ${({ theme }) => theme.text};
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
    }

    a {
      padding: 10px 40px;
      font-weight: bold;
      text-transform: uppercase;
      background-color: var(--orange);
      transition: all 0.3s ease-in-out;
      text-align: center;
      margin-top: 30px;
      max-width: 220px;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .experience-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 30px;
    max-width: 1000px;

    > div:first-child {
      background-color: rgba(153, 159, 173, 0.5);
      padding: 30px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      flex-basis: 60%;
      max-height: 50%;
      margin-right: -80px;
      animation: 1s ${fadeInLeftAnimation};
    }

    > div:last-child {
      background-color: rgba(153, 159, 173, 0.2);
      padding: 30px 150px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      animation: 1s ${fadeInRightAnimation};
    }

    .company-name,
    .position {
      font-weight: 600;
      font-size: 1.2rem;
      text-align: center;
    }

    .work-date {
      font-style: italic;
      font-weight: 300;
      padding-top: 5px;
    }

    ul {
      list-style-type: square;
      list-style-position: inside;
      li {
        margin-bottom: 10px;
      }
    }

    @media (max-width: 680px) {
      flex-direction: column;

      > div:first-child {
        width: 100%;
        margin-right: 30px;
        margin-left: 30px;
        margin-bottom: -30px;
      }

      > div:last-child {
        width: 100%;
        padding: 60px 30px 30px 30px;
      }
    }
  }

  .experience-wrapper:nth-child(odd) {
    flex-direction: row-reverse;

    > div:first-child {
      margin-right: 0;
      margin-left: -80px;
      animation: 1s ${fadeInRightAnimation};
    }
    > div:last-child {
      animation: 1s ${fadeInLeftAnimation};
    }

    @media (max-width: 680px) {
      flex-direction: column;

      > div:first-child {
        width: 100%;
        margin-right: 30px;
        margin-left: 30px;
        margin-bottom: -30px;
      }

      > div:last-child {
        width: 100%;
        padding: 60px 30px 30px 30px;
      }
    }
  }
`;
