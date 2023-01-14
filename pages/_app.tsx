import Footer from '@/components/footer'
import Header from '@/components/header'
import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <div className='text-slate-700 flex flex-col gap-4 font-serif'>
      <Header />
      <div>  <Component {...pageProps} /></div>
      <Footer />
    </div>
  </Layout>
}
