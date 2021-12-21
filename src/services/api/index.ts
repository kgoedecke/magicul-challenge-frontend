import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.DEV_API_URL,
  timeout: 5000,
})

export * from './endpoints'
