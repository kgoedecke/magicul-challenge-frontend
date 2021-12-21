import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import Router from 'next/router'

import { api, Endpoints } from '@/services/api/index'

export type User = {
  id: number
  name: string
}

type LoginProps = {
  name: string
}

type IAuthContextData = {
  user: User | undefined
  isLoggedIn: boolean
  logIn(name: LoginProps): void
  logOut(): void
}

interface AuthProviderProps {
  children?: ReactNode
}

const AuthContext = createContext({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isLoggedIn = !!user

  async function logIn({ name }: LoginProps) {
    try {
      const response = await api.post(Endpoints.LOGIN, {
        name,
      })

      const { id } = response.data

      setUser({ name, id })

      Router.push(`/upload`)
    } catch (err) {
      toast.error(JSON.stringify(err))
    }
  }

  async function logOut() {
    Router.push(`/`)
  }

  return <AuthContext.Provider value={{ logIn, isLoggedIn, user, logOut }}>{children}</AuthContext.Provider>
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(`useAuth must be used within AuthProvider`)
  }

  return context
}

export { AuthProvider, useAuth }
