import { createContext, ReactNode, useContext, useState } from 'react'
import Router from 'next/router'
import { destroyCookie } from 'nookies'

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
}

interface AuthProviderProps {
  children?: ReactNode
}

const AuthContext = createContext({} as IAuthContextData)

export function logOut() {
  destroyCookie(null, `auth.token`)
  destroyCookie(null, `auth.refreshToken`)

  Router.push(`/`)
}

const AuthProvider: React.FC = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isLoggedIn = !!user

  async function logIn({ name }: LoginProps) {
    try {
      // eslint-disable-next-line no-console
      console.log(`Logging in ${name}`)
      const response = await api.post(Endpoints.LOGIN, {
        name,
      })

      const { id } = response.data

      setUser({ name, id })

      Router.push(`/upload`)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  return <AuthContext.Provider value={{ logIn, isLoggedIn, user }}>{children}</AuthContext.Provider>
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(`useAuth must be used within AuthProvider`)
  }

  return context
}

export { AuthProvider, useAuth }
