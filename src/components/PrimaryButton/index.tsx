import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPrimaryButton {
  children?: React.ReactNode

  // For all ...props
  [x: string]: any
}

type IProps = IPrimaryButton

const StyledButton = styled.button`
  position: absolute;
  padding: 15px;

  background-color: #ca60eb;
  color: #f7f7f7;

  border: 1px solid #ebe9e9;
  border-radius: 12px;

  &:hover {
    background: #cd75e7;
    cursor: pointer;
  }
`

// eslint-disable-next-line react/destructuring-assignment
export const PrimaryButton: React.FC<IProps> = (props) => <StyledButton {...props}> {props.children} </StyledButton>
