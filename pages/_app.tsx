import Layout from 'components/layout/layout'
import 'styles/globals.css'
import { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
