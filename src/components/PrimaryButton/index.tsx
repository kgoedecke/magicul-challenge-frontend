import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPrimaryButton {
  type?: string
}

type IProps = IPrimaryButton

const StyledButton = styled.button`
  position: relative;
  background-color: #ca60eb;
  border: 1px solid #ebe9e9;
  padding: 15px;
  margin-top: 200px;
  color: #f7f7f7;

  border-radius: 12px;

  &:hover {
    content: '';
    background: #cd75e7;
  }
`

export const PrimaryButton: React.FC<IProps> = ({ children }) => <StyledButton>{children}</StyledButton>
