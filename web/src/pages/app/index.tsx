import {
  getAccessToken,
  useUser,
  withPageAuthRequired
} from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'

export default function MyHome() {
  const { user } = useUser()

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h1>Hello</h1>

      {/*
        Não é possível limpar cookies server-side através do navegador, para isso
        chamamos a rota logout, onde a mesma se encarrega de fazer a limpeza.
      */}
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    console.log(getAccessToken(req, res))

    return {
      props: {}
    }
  }
})
