import styled, { keyframes } from 'styled-components';
import { flipInX} from 'react-animations';

const flipIn = keyframes`${flipInX}`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  a img{
    max-width:50px;
    animation: 1s ${flipIn};

    &:hover{
      filter: brightness(0.9);
    }
  }
`