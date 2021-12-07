import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPrimaryButton {
  // Props
}

type IProps = IPrimaryButton;

const StyledButton = styled.button`
  position: absolute;
  background-color: #d8d8d8;
  border: 1px solid #ebe9e9;
  padding: 15px;
  margin-top: 200px;
  color: #2d0d85;

  border-radius: 12px;

  &:hover {
    content: '';
    background: #ebe9e9;
  }
`;

export const PrimaryButton: React.FC<IProps> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);
