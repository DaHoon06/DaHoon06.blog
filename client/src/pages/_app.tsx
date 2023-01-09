import type { AppProps } from 'next/app'
import '@styles/index.scss'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import Scripts from '@components/Scripts'

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Scripts />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
