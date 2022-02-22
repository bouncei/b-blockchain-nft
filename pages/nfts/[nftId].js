import React from 'react'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NFTImage from '../../components/nft/NFTImage'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  )
}

export default Nft
