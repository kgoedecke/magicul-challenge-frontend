import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-top: 22px;

  > label {
    font-size: 18px;
    position: absolute;
    margin-bottom: 50px;
  }
`;

export const InputField = styled.input`
  width: 300px;
  height: 50px;
  margin-top: 30px;
  padding: 0 25px;
  font: 25px Archivo;

  border-radius: 12px;
  border: 1px solid #916bea;

  background: #f8f8fc;
  outline: 0;

  &:focus {
    content: '';
    background: #916bea;
    left: 25px;
    right: 25px;
    bottom: 0;
  }
`;
