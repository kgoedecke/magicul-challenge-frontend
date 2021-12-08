import Head from 'next/head';

import { Container, Content } from '@/containers/MainContainer/style';

import { PrimaryButton } from '@/components/PrimaryButton';
import { TextInput } from '@/components/TextInput';

export default function LandingPage() {
  return (
    <Container>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <h3>Tell us your name!</h3>
        <TextInput name="username" label="It has to be unique, like you..." />
        <PrimaryButton> Hop in! </PrimaryButton>
      </Content>
    </Container>
  );
}
