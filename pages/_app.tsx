import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { TransactionProvider } from '../context/TransactionContext'
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// import Router from 'next/router';
import Head from 'next/head';




// Router.events.on('routeChangeStart', (url) => {
//   console.log(`Loading: ${url}`);
//   NProgress.start();
// });

// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Base Mint</title>
        <link rel="icon" href="/opensea.ico" />
      </Head>


      <TransactionProvider>
        <Component {...pageProps} />
      </TransactionProvider>
    </>

  )
}

export default MyApp
