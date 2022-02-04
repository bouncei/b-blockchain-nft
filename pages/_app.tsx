import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";


const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg t`,
}

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>

      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
    
  )
}

export default MyApp
