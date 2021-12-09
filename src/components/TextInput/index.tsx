import React, { InputHTMLAttributes } from 'react'

import { InputContainer, InputField } from './style'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export const TextInput: React.FC<TextInputProps> = ({ label, name, value, onChange }) => (
  <InputContainer>
    <label htmlFor={name}>{label}</label>
    <InputField type="text" id={name} value={value} onChange={onChange} />
  </InputContainer>
)
