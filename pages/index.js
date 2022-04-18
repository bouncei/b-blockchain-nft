import { useWeb3 } from '@3rdweb/hooks'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { sanityClient } from '../sanity'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast' // Receiving toast
import { title } from 'process'
import HomeCard from '../components/HomeCard'
import { urlFor } from '../sanity'
import Link from 'next/link'
import Footer from '../components/Footer'
import SmallCard from '../components/SmallCard'
// import { TransactionContext } from '../context/TransactionContext'

const style = {
  wrapper: `overflow-hidden`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
  cardgrid: `w-1/3 px-2`,
  sectionContainer: `max-w-7xl mx-auto px-8 sm:px-16 pt-6`,
}

export default function Home({ items }) {
  // const { isLoading, currentAccount } = useContext(TransactionContext)

  // useEffect(() => {
  //   setIs

  // }, [isLoading, currentAccount])

  return (
    <div className={style.wrapper}>
      {/* {address ? (   //Conditional Rendering */}

      <>
        <Header />
        <div className="section1">
          <Hero />

          <br />
        </div>

        {/* FEATURED COLLECTION SECTION */}
        <div className="section2">
          <section className={style.sectionContainer}>
            <h2 className="pb-5 text-4xl font-semibold text-white">
              Featured Collections
            </h2>

            <div className="flex flex-wrap">
              {/* {items?.map((item, id) => (
                  <HomeCard
                    key={id}
                    bannerImage={item.bannerUrl}
                    collectionItem={item.contractAddress}
                    title={item.title}
                    description={item.description}
                    profileImage={item.imageUrl}
                  />
                ))} */}

              <HomeCard
                bannerImage={items[0].bannerUrl}
                collectionItem={items[0].contractAddress}
                title={items[0].title}
                description={items[0].description}
                profileImage={items[0].imageUrl}
              />

              <HomeCard
                bannerImage={items[3].bannerUrl}
                collectionItem={items[3].contractAddress}
                title={items[3].title}
                description={items[3].description}
                profileImage={items[3].imageUrl}
              />

              <HomeCard
                bannerImage={items[2].bannerUrl}
                collectionItem={items[2].contractAddress}
                title={items[2].title}
                description={items[2].description}
                profileImage={items[2].imageUrl}
              />

              <br />
              <br />
              <br />
            </div>
          </section>
        </div>

        {/* TOP COLLECTION SECTION */}
        <div className="section3">
          <section className={style.sectionContainer} id="section3">
            <h2 className="p-5 py-20 text-4xl font-semibold text-white">
              Top Collections
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {items?.map((item, id) => (
                <SmallCard
                  key={id}
                  index={items.indexOf(item)}
                  name={item.title}
                  image={item.imageUrl}
                  noOfNfts={item.images}
                  volumeTraded={item.volumeTraded}
                  collectionItem={item.contractAddress}
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
