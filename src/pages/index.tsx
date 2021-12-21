import Head from 'next/head'
import { FormEvent, useState } from 'react'

import { useAuth } from '@/context/auth'

import { PrimaryButton } from '@/components/PrimaryButton'
import { TextInput } from '@/components/TextInput'

import { Container, Content } from '@/containers/MainContainer/style'
import { LoginForm } from './style'

export default function LandingPage() {
  const { logIn } = useAuth()
  const [name, setName] = useState(``)

  function handleLogin(e: FormEvent) {
    e.preventDefault()
    const data = { name }

    logIn(data)
  }

  return (
    <Container>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <LoginForm onSubmit={handleLogin}>
          <h3>Tell us your name!</h3>
          <TextInput
            name="name"
            label="It has to be unique, like you..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <PrimaryButton style={{ bottom: 102, right: 50 }} type="submit">
            Login
          </PrimaryButton>
        </LoginForm>
      </Content>
    </Container>
  )
}
