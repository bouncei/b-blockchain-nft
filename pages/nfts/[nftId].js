import React from 'react'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import { sanityClient } from '../../sanity'
import { client } from '../../lib/sanityClient'
import Purchase from '../../components/nft/Purchase'
import { urlFor } from '../../sanity'
import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import NFTImage from '../../components/nft/NFTImage'
import { TransactionContext } from '../../context/TransactionContext'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,

  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
}

const Nft = ({ nice }) => {
  const { formData, handleChange, sendTransaction } = useContext(TransactionContext)

  // const [ listings, setlistings ] = useState([])
  const router = useRouter()
  const { check } = router.query
  const [selectedNft, setSelectedNft] = useState({})

  console.log('nice', nice)

  //Payment Configurations
  const price = handleChange(selectedNft.price ? selectedNft.price : "0.001")

  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData
    e.preventDefault()

    console.log('got address', addressTo)
    console.log(amount.amount)

    if (!addressTo || !amount) return


    sendTransaction()
    // console.log(sendTransaction())
  }

  const fetchImageData = async (sanityClient = client) => {
    const query = `*[_type == "testImage" && _id == "${router.query.nftId}"]{
      caption,
      imageTest,
      price,
    }`

    const nftItem = await sanityClient.fetch(query)

    console.log(nftItem, '🔥')

    await setSelectedNft(nftItem[0])

    if (nftItem === []) {
      console.log('nothing here')
    } else {
      console.log('yessss')
    }
  }

  useEffect(() => {
    fetchImageData()
  }, [check])

  console.log(selectedNft)

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage
                selectedNft={selectedNft.imageTest?.asset}
                alt={selectedNft?.caption}
              />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                // listings="true"
                buyItem={(e) => handleSubmit(e)}
                // Get the id from the route.query

              />
              {/* <div className="border[#151c22] flex h-20 w-full items-center rounded-lg border bg-[#303339] px-12"> */}
                {/* <div
                  className="flex hover:bg-[#442a0ff] mr-8 cursor-pointer items-center rounded-lg bg-[#2081e2] py-2 px-12"
                  onClick={(e) => handleSubmit(e)}
                > */}
                  {/* <IoMdWallet className={style.buttonIcon} /> */}
                  {/* <div className="ml-2 text-lg font-semibold">Buy Now</div> */}

                {/* </div> */}
              {/* </div> */}

            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
      {/* yesss {selectedNft.caption} {nice} */}
      {/* <img src={urlFor(selectedNft.imageTest?.asset)}/> */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params

  return {
    props: {
      nice: id.nftId,
    },
  }
}

export default Nft
