// import React from "react"
import { urlFor } from '../sanity'
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import Router from 'next/router';

const style = {
  wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:bg-grey-100 hover:scale-105 transition transform duration-100 ease-out`,
  imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full object-cover`,
  details: `p-3`,
  info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm text-[#8a939b]`,
  assetName: `font-bold text-lg text-[#ffffff] mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm text-[#8a939b]`,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
  likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
  likeIcon: `text-xl mr-2`,
}

const NftCard = ({title, likes, nftItem, listing}) => {
    const [isListed, setIsListed] = useState(false)
    const [price, setPrice] = useState(0)

    // console.log(nftItem)
    // console.log(nftItem.imageTest.asset)

    const id = Object.values(nftItem)[1]
    
    // console.log(id[1])

    useEffect(() => {
        if (Boolean(listing)){
            setIsListed(true)
            setPrice(nftItem.price)
        }

    }, [listing, nftItem])


    return (
        <div
            className={style.wrapper}
            onClick={() => {
                Router.push({
                    pathname: `/nfts/${id}`,
                    query: {isListed: isListed},
                })
            }}
        >
            <div className={style.imgContainer}>
                <img src={urlFor(nftItem.imageTest.asset).auto("format")} alt={nftItem.caption} height="266.83" width="266.83" />
                <h1></h1>
            </div>

            <div className={style.details}>
                <div className={style.info}>
                    <div className={style.infoLeft}>
                        <div className={style.collectionName}>{title}</div>
                        <div className={style.assetName}>#{nftItem.caption}</div>
                    </div>
                    {isListed && (
                        <div className={style.infoRight}>
                            <div className={style.priceTag}>Price</div>
                            <div className={style.priceValue}>
                                <img
                                    className={style.ethLogo}
                                    src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                                    alt='eth'
                                />
                                {
                                    price
                                    ? price
                                    : 0.1
                                }
                            </div>
                        </div>
                    )}
                </div>

                <div className={style.likes}>
                    <span className={style.likeIcon}>
                        <BiHeart />
                    </span>{' '}
                    {likes}
                </div>
                

            </div>
        </div>

    )
}


export default NftCard