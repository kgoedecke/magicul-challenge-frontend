import fileSize from 'filesize'
import React, { useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdMoodBad } from 'react-icons/md'

import { useFiles, IFile } from '@/context/files'
import { useAuth } from '@/context/auth'

import { Container, FileInfo } from './style'

export const Table = () => {
  const { uploadedFiles: files, deleteFile, loadUserFiles } = useFiles()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      loadUserFiles(user.id)
    }
  }, [])

  if (files && !files.length)
    return (
      <span>
        <MdMoodBad style={{ marginLeft: `45%`, marginTop: 10 }} size={24} color="#d5d2d2" />
      </span>
    )

  return (
    <Container>
      {files.map((uploadedFile: IFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            {uploadedFile && uploadedFile.id && (
              <div>
                <strong>{uploadedFile.filename}</strong>
                <span>
                  {fileSize(parseInt(uploadedFile.size, 10))}
                  {` `}
                  {!!uploadedFile.id && (
                    <button type="button" onClick={() => deleteFile(uploadedFile.id as number)}>
                      Delete
                    </button>
                  )}
                </span>
              </div>
            )}
          </FileInfo>

          <div>
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: `#7159c1` },
                }}
                strokeWidth={10}
                text={String(uploadedFile.progress)}
                value={uploadedFile.progress || 0}
              />
            )}

            {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {uploadedFile.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      ))}
    </Container>
  )
}
