import { useWeb3 } from '@3rdweb/hooks'
import Head from 'next/head'
import { useEffect } from 'react'
import { sanityClient } from "../sanity";
import Header from '../components/Header'
import Hero from '../components/Hero'
import { client } from '../lib/sanityClient';
import toast, { Toaster } from "react-hot-toast";// Receiving toast
import { title } from 'process';
import HomeCard from '../components/HomeCard'
import { urlFor } from '../sanity';
import Link from 'next/link';

const style = {
  wrapper: `overflow-hidden`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
  cardgrid: `w-1/3 px-2`
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

export default function Home({
  imageUrl,
  title,
  description,
  banners,
  contractAddress,

}) {
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

  // const refer0 = `contract/${contractAddress[0]}`
  const refer1 = `contract/${contractAddress[1]}`
  // const refer0 = `contract/${contractAddress[o]}`

  console.log("yes", contractAddress[1])

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
            <section className='section2 pt-6'>
              <h2 className='text-4xl text-white font-semibold pb-5'>Featured Collections</h2>

              {title.map((t) => (
                <h1 className='text-white'>{t}</h1>
              ))}

  

              <div className='flex flex-wrap'>


                <HomeCard
                  bannerImage={banners[0]}
                  collectionItem={refer1}
                  title={title[0]}
                  description={description[0]}

                  profileImage={imageUrl[0]}
                />

                <HomeCard
                  bannerImage={banners[1]}
                  collectionItem={refer1}
                  title={title[1]}
                  description={description[1]}

                  profileImage={imageUrl[1]}
                />


              </div>
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



export async function getStaticProps() {
  const titles = []
  const descriptions = []
  const images = []
  const banners = []
  const contractAddress = []


  const query = `*[ _type == "marketItems" ]{
    "imageUrl" : profileImage.asset,
    "bannerUrl" : bannerImage.asset,
    title,
    description,
    contractAddress,
  }`

  const items = await sanityClient.fetch(query)



  for (var i = 0; i < items.length; i++) {

    titles.push(items[i].title)
    images.push(items[i].imageUrl)
    descriptions.push(items[i].description)
    banners.push(items[i].bannerUrl)
    contractAddress.push(items[i].contractAddress)
  }



  if (!items) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        // imageUrl: [items[0].imageUrl, items[1].imageUrl],
        // title: [items[0].title, items[1].title],
        // description: items.description,

        imageUrl: images,
        title: titles,
        description: descriptions,
        banners: banners,
        contractAddress: contractAddress,
      },
    }
  }
}