import styled from 'styled-components';

export const Container = styled.header`
  display:fixed;
  width: 100%;
  position:relative;
  height: 100px;
  margin-bottom: -100px;
  z-index: 9999;

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
