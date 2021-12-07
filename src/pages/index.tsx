import Head from 'next/head';

import { FormContainer } from '@/containers/FormContainer';

import { PrimaryButton } from '@/components/PrimaryButton';
import { TextInput } from '@/components/TextInput';

import { Container } from './style';

export default function LandingPage() {
  return (
    <Container>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormContainer headline="Tell us your name!">
        <TextInput name="username" label="It has to be unique, like you..." />
        <PrimaryButton> Hop in! </PrimaryButton>
      </FormContainer>
    </Container>
  );
}
