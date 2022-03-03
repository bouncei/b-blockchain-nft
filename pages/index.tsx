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
  banners
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

  console.log("yes", banners)

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

              {/* <div className="px-2">
                <div className="flex -mx-2">
                  <div className="w-1/3 px-2">
                    <div className="bg-gray-400 h-12"></div>
                  </div>
                  <div className="w-1/3 px-2">
                    <div className="bg-gray-500 h-12"></div>
                  </div>
                  <div className="w-1/3  px-2">
                    <div className="bg-gray-400 h-12"></div>
                  </div>
                  <div className="w-1/3 px-2">
                    <div className="bg-gray-400 h-12"></div>
                  </div>
                </div>
              </div> */}

              <div className='flex flex-wrap'>
                <div className='bg-[#303339] max-w-sm flex-auto w-[14rem] h-[30rem] my-10 mx-5 overflow-hidden cursor-pointer'>
                  <div className='h-2/3 w-full overflow-hidden'>
                    <img src={urlFor(imageUrl[0]).auto("format")} className="h-full w-full"/>


                  </div>

                
                </div>

                <div className='bg-[#303339] max-w-sm flex-auto w-[14rem] h-[30rem] my-10 mx-5 overflow-hidden cursor-pointer'>
                  <div className='h-2/3 w-full overflow-hidden'>
                    <img src={urlFor(imageUrl[1]).auto("format")} alt="yes" className="h-full w-full"/>


                  </div>

                
                </div>

                <div className='bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer'>
                  <div className='h-2/3 w-full overflow-hidden flex justify-center items-center'>
                  <div className="bg-gray-500 h-12"></div>

                  </div>

                
                </div>


              </div>

              <HomeCard
                key={title}
                profileImage={imageUrl[0]}
                title={title[0]}
                collectionItem="mutant-ape-yacht-club"
              />

              <HomeCard
                key={title[1]}
                profileImage={imageUrl[1]}
                title={title[1]}
              />


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


  const query = `*[ _type == "marketItems" ]{
    "imageUrl" : profileImage.asset,
    "bannerUrl" : bannerImage.asset,
    title,
    description,
  }`

  const items = await sanityClient.fetch(query)



  for (var i = 0; i < items.length; i++) {

    titles.push(items[i].title)
    images.push(items[i].imageUrl)
    descriptions.push(items[i].description)
    banners.push(items[i].bannerUrl)
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
        banners: banners
      },
    }
  }
}