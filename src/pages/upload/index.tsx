import React, { useCallback, useEffect } from 'react'
import Head from 'next/head'
import { useDropzone } from 'react-dropzone'

import { useFiles } from '@/context/files'
import { useAuth } from '@/context/auth'

import { Table } from '@/components/Table'
import { PrimaryButton } from '@/components/PrimaryButton'

import { Container, Content } from '@/containers/MainContainer/style'

import { DropContainer, UploadMessage } from './style'

export default function Upload() {
  const { handleUpload, loadUserFiles } = useFiles()
  const { user, logOut } = useAuth()

  useEffect(() => {
    if (user) loadUserFiles(user.id)
  }, [])

  async function fetchUserFiles() {
    if (user && user.id) {
      loadUserFiles(user.id)
    }
  }

  const onDrop = useCallback(
    async (file) => {
      if (user) {
        handleUpload(file, user.id)
        fetchUserFiles()
      }
    },
    [handleUpload],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <UploadMessage>Drag your beautiful file over here...</UploadMessage>
    }

    return <UploadMessage type="success">Let it fall over here!</UploadMessage>
  }, [isDragActive])

  return (
    <>
      <Container>
        <Head>
          <title>Magicul Challenge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Content>
          <PrimaryButton style={{ top: 10, right: 10 }} onClick={logOut}>
            Logout
          </PrimaryButton>
          <DropContainer {...getRootProps()}>
            <input {...getInputProps()} />
            {renderDragMessage()}
          </DropContainer>
          <Table />
        </Content>
      </Container>
    </>
  )
}
