import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdMoodBad } from 'react-icons/md'
import { useFiles, IFile } from '../../context/files'

import { Container, FileInfo } from './style'

const Table = () => {
  const { uploadedFiles: files, deleteFile } = useFiles()

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
            <div>
              <strong>{uploadedFile.filename}</strong>
              <span>
                {uploadedFile.size}
                {` `}
                {!!uploadedFile.mimeType && (
                  // eslint-disable-next-line react/button-has-type
                  <button onClick={() => deleteFile(uploadedFile.id as number)}>Delete</button>
                )}
              </span>
            </div>
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

export default Table
