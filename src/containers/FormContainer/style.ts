import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  position: flex;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  max-width: 500px;
  margin: 180px;
  background: #9871f5;
  padding: 200px;

  > p {
    text-align: center;
    font-size: 35px;

    position: flex;
    padding: 20px;
  }

  border-radius: 10px;
  border: 1px solid #9871f5;
`;

export const Form = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
`;
