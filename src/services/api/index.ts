import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:4000`,
  timeout: 3000,
});

export * from './endpoints';
