import { useWeb3 } from '@3rdweb/hooks'
import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { client } from '../lib/sanityClient';
import toast, { Toaster } from "react-hot-toast";// Receiving toast

const style = {
  wrapper: `overflow-hidden`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}



// export const getServerSideProps = async (sanityClient = client) => {
//   const query = `*[_type == "marketItems"]`

//   const marketItems = await sanityClient.fetch(query)

//   if (!marketItems.length) {
//     return {
//       props: {
//         marketItems : []
//       },
//     }
//   }else {
//     return {
//       props: {
//         marketItems
//       }
//     }
//   }
// }

export default function Home() {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (name, toastHandler = toast) => {    //toast function for welcome user
    toastHandler.success(
      `Welcome back${name !== 'Unnamed' ? ` ${name}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff'
        }
      }
    )
  }

  useEffect(() => {
    if (!address) return
      ; (async () => {           //IIFE(Immediately Invoked Function Expression)
        const userDoc = {
          _type: 'users',
          _id: address,
          userName: 'Unnamed',
          walletAddress: address,

        }

        const result = await client.createIfNotExists(userDoc)     //Creates a new user in the database
        welcomeUser(result.userName)
      })()

  }, [address])

  return (
    <div className={style.wrapper}>
      <Toaster position="top-right" reverseOrder={false} />
      {address ? (   //Conditional Rendering

        <>
          <div className='section1'>

            <Header />

            <Hero />
          </div>

          <main className='max-w-7xl mx-auto px-8 sm:px-16'> 
            <section className='section2'>
              <h2 className='text-4xl text-white font-semibold pb-5'>Featured Collections</h2>
            </section>

          </main>

        </>

      ) : (

        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={() => connectWallet("injected")}  //Prompts User to connect their metamask wallet

          >
            Connect Wallet

          </button>

          <div className={style.details}>
            Please connect your metamask wallet

          </div>

        </div>

      )}
    </div>

  )
}
