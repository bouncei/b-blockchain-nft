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
import Modal from 'react-modal'
import TransactionLoader from '../../components/TransactionLoader'
import Footer from '../../components/Footer'
// import TransactionContext from '../../context/TransactionContext'
import WelcomeUser from '../../components/toast/WelcomeUser'


Modal.setAppElement('#__next')

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb] overflow-hidden`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,

  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const Nft = ({ selectedNft }) => {
  const { formData, NftData, handleImage, handleName, handleChange, sendTransaction, currentAccount } = useContext(TransactionContext)
  
  // const [ listings, setlistings ] = useState([])
  // console.log("location", window.location.href)


  const router = useRouter()
  const { check } = router.query
  // const [selectedNft, setSelectedNft] = useState({})
  

  //Payment Configurations
  const price = handleChange(selectedNft.price ? selectedNft.price : "0.1")
  const image = handleImage(selectedNft.imageTest)
  const name = handleName(selectedNft.caption)


 
  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData
    const {image, name} = NftData
    e.preventDefault()

    // console.log('got image', image)
    // console.log('got name', name)

    if (!addressTo || !amount || !image || !name ) return
    
    
    
    sendTransaction()
 

  }


  return (
    <div className='overflow-hidden'>
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


            </div>
          </div>
          <ItemActivity />
        </div>
      </div>

      <Footer />
      <Modal isOpen={!! router.query.loading} style={customStyles}>
        {/* <TransactionLoader /> */}
      </Modal>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params


  const query = `*[_type == "testImage" && _id == "${id.nftId}"][0]{
    caption,
    imageTest,
    price,
  }`


  const items = await sanityClient.fetch(query)


  if (!items) {
    return {
        props: null,
        notFound: true,
    }

  }else {
    return {
      props:{
        selectedNft: items
      }
    }
  }
}

export default Nft
