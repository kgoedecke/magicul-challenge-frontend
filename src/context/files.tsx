/* eslint-disable no-console */
import React, { createContext, useState, useCallback, useContext } from 'react'

import filesize from 'filesize'

import { api, Endpoints } from '@/services/api/index'
import { useAuth } from './auth'

export interface IFile {
  userId: number
  id?: number
  filename: string
  mimeType: string
  size: string
  uploaded: boolean
  error: boolean
  progress?: number
  file: File
}

interface IFileContextData {
  uploadedFiles: IFile[]
  deleteFile(id: number): void
  handleUpload(file: any, userId: number): void
  loadUserFiles(userId: number): void
  processUpload(file: IFile): void
}

const FileContext = createContext<IFileContextData>({} as IFileContextData)

const FileProvider: React.FC = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState<IFile[]>([])
  const { user } = useAuth()

  const updateFile = useCallback((id, data) => {
    setUploadedFiles((state) => state.map((file) => (file.id === id ? { ...file, ...data } : file)))
  }, [])

  const loadUserFiles = useCallback(
    (userId: number) => {
      api
        .get<IFile[]>(Endpoints.GET_FILES, {
          params: {
            user_id: userId,
          },
        })
        .then((response) => {
          const fileFormatted: IFile[] = response.data.map((file) => ({
            ...file,
            id: file.id,
            size: file.size,
            filename: file.filename,
            mimeType: file.mimeType,
            error: false,
            uploaded: true,
          }))

          console.log(response.data)

          setUploadedFiles(fileFormatted)
        })
    },
    [updateFile],
  )

  const processUpload = useCallback(
    (uploadedFile: IFile) => {
      const data = new FormData()
      if (uploadedFile.filename) {
        data.append(`file`, uploadedFile.file)
        data.append(`user_id`, JSON.stringify(user && user.id))
      }

      api
        .post(Endpoints.UPLOAD_FILE, data, {
          onUploadProgress: (progressEvent) => {
            const progress: number = Math.round((progressEvent.loaded * 100) / progressEvent.total)

            console.log(`The file ${uploadedFile.filename} is ${progress}% processed... `)

            updateFile(uploadedFile.id, { progress })
          },
        })
        .then((response) => {
          updateFile(uploadedFile.id, {
            uploaded: true,
            id: response.data.id,
            name: response.data.name,
          })
        })
        .catch((err) => {
          console.log(err)

          updateFile(uploadedFile.id, {
            error: true,
          })
        })
    },
    [updateFile, user],
  )

  const handleUpload = useCallback(
    async (files: File[], userId: number) => {
      const newUploadedFiles: IFile[] = files.map((file: File) => ({
        file,
        userId,
        filename: file.name,
        size: filesize(file.size),
        mimeType: file.type,
        progress: 0,
        uploaded: false,
        error: false,
      }))

      setUploadedFiles((state) => state.concat(newUploadedFiles))
      newUploadedFiles.forEach(processUpload)
    },
    [processUpload],
  )

  const deleteFile = useCallback(
    (id: number) => {
      api.delete(Endpoints.DELETE_FILE, {
        params: {
          fileId: id,
        },
      })
      setUploadedFiles((state) => state.filter((file) => file.id !== id))
    },
    [updateFile],
  )

  return (
    <FileContext.Provider value={{ uploadedFiles, deleteFile, handleUpload, loadUserFiles, processUpload }}>
      {children}
    </FileContext.Provider>
  )
}

function useFiles(): IFileContextData {
  const context = useContext(FileContext)

  if (!context) {
    console.log(`useFiles must be used within FileProvider`)
  }

  return context
}

export { FileProvider, useFiles }
