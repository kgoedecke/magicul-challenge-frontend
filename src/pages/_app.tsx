import { AuthProvider } from '@/context/auth'
import { FileProvider } from '@/context/files'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <FileProvider>
        <Component {...pageProps} />
      </FileProvider>
    </AuthProvider>
  )
}
