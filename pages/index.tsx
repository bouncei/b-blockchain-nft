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
import Footer from '../components/Footer'
import SmallCard from '../components/SmallCard'

const style = {
  wrapper: `overflow-hidden`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
  cardgrid: `w-1/3 px-2`,
  sectionContainer: `max-w-7xl mx-auto px-8 sm:px-16 pt-6`,
}





export default function Home({
  items,

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

  console.log("yes", items.contactAddress)



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

  // console.log(items.images)

  return (
    <div className={style.wrapper}>
      <Toaster position="top-right" reverseOrder={false} />
      {address ? (   //Conditional Rendering

        <>
          <Header />
          <div className='section1'>



            <Hero />

            <br />


          </div>


          {/* FEATURED COLLECTION SECTION */}
          <div className='section2'>
            <section className={style.sectionContainer} >

              <h2 className='text-4xl text-white font-semibold pb-5'>Featured Collections</h2>



              <div className='flex flex-wrap'>

                {items?.map((item, id) => (
                  <HomeCard
                    key={id}
                    bannerImage={item.bannerUrl}
                    collectionItem={item.contractAddress}
                    title={item.title}
                    description={item.description}
                    profileImage={item.imageUrl}
                  />
                ))}

                <br />
                <br />
                <br />



              </div>






            </section>
          </div>



          {/* TOP COLLECTION SECTION */}
          <div className='section3'>
            <section className={style.sectionContainer} id="section3">
              <h2 className='text-4xl text-white font-semibold p-5 py-20'>Top Collections</h2>

              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>

                {items?.map((item, id) => (
                  <SmallCard
                    key={id}
                    name={item.title}
                    image={item.imageUrl}
                    noOfNfts={item.images}
                    volumeTraded={item.volumeTraded}
                  />
                ))}
           

              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              


            </section>
          </div>

          <Footer />

        





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



export async function getServerSideProps() {

  const query = `*[ _type == "marketItems" ]{
    "imageUrl" : profileImage.asset,
    "bannerUrl" : bannerImage.asset,
    title,
    description,
    contractAddress,
    volumeTraded,
    images,
  }`

  const items = await sanityClient.fetch(query)


  if (!items) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        items: items,
      },
    }
  }
}