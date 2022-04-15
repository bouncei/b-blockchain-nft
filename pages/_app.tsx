import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { TransactionProvider } from '../context/TransactionContext'
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// import Router from 'next/router';




// Router.events.on('routeChangeStart', (url) => {
//   console.log(`Loading: ${url}`);
//   NProgress.start();
// });

// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (

    // <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>

    //   <Component {...pageProps} />
    // </ThirdwebWeb3Provider>

    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  )
}

export default MyApp
