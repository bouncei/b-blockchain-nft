import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { TransactionProvider } from '../context/TransactionContext'

// const supportedChainIds = [4]
// const connectors = {
//   injected: {},
// }

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
