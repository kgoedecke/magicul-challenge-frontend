import React from 'react'

import { StyledContainer, StyledHeadline } from './style'

interface ISelectFileContainer {
  headline: string
}

export const SelectFileContainer: React.FC<ISelectFileContainer> = ({ children, headline }) => (
  <StyledContainer>
    <StyledHeadline>{headline}</StyledHeadline>
    {children}
  </StyledContainer>
)
