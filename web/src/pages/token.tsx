import { GetServerSideProps } from 'next'
import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Token({ token }) {
  return (
    <div style={{ padding: '20px' }}>
      <pre>{token}</pre>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    const { accessToken } = await getAccessToken(req, res)

    return {
      props: { token: `Bearer ${accessToken}` }
    }
  }
})
