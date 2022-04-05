import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
