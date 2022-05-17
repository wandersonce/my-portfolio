import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position:relative;

  button{
    position:absolute;
    top:30px;
    right:30px;
    background:none;
    border:none;
    span{
      font-size: 30px;
    }
  }
`;
