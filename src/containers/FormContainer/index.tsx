import React from 'react';

import { Container, Form, InnerContainer } from './style';

interface IFormContainer {
  headline: string;
}

export const FormContainer: React.FC<IFormContainer> = ({
  headline,
  children,
}) => (
  <Container>
    <InnerContainer>
      <p>{headline}</p>
      <Form>{children}</Form>
    </InnerContainer>
  </Container>
);
