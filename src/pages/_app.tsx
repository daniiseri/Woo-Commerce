import { Footer } from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios'
import { NextPageContext } from 'next'
import { IFooter, IHeader } from '@/types'
import { HEADER_FOOTER_ENDPOINT } from '@/utils/constants/endpoints'

interface InitialProps extends AppProps {
  data: {
    header: IHeader,
    footer: IFooter
  }
}

App.getInitialProps = async (context: NextPageContext) => {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT)
  return data || {}
}

export default function App({ Component, pageProps, data }: InitialProps) {
  const { header, footer } = data

  return (
    <>
      <Header {...header} />
      <Component {...pageProps} />
      <Footer {...footer} />
    </>
  )
}
