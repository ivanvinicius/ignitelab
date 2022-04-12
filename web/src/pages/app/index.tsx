import {
  getAccessToken,
  useUser,
  withPageAuthRequired
} from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'

import { WithApollo } from '../../lib/withApollo'
import {
  getServerPageGetProducts,
  ssrGetProducts
} from '../../graphql/generated/page'
import { useMeQuery } from '../../graphql/generated/graphql'

function MyHome({ data }) {
  const { user } = useUser()
  const { data: me } = useMeQuery()
  // const { data, loading, error } = useGetProductsQuery()

  return (
    <div>
      <h2>Auth0 useUser</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h2>useMeQuery</h2>
      <pre>{JSON.stringify(me, null, 2)}</pre>

      <h2>getServerPageGetProducts</h2>
      <pre>{JSON.stringify(data?.products, null, 2)}</pre>
      {/*
        Não é possível limpar cookies server-side através do navegador, para isso
        chamamos a rota logout, onde a mesma se encarrega de fazer a limpeza.
      */}
      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (context) => {
    console.log(getAccessToken(context.req, context.res))

    const query = () => getServerPageGetProducts(undefined, context)

    return {
      props: { ...query }
    }
  }
})

export default WithApollo(ssrGetProducts.withPage()(MyHome))
