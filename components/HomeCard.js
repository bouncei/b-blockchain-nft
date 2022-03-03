import { Router } from 'next/router';
import React from 'react';
import { sanityClient, urlFor } from '../sanity';

const style = {
    wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
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
    collectionimg: `h-[2.25rem] rounded-full`,
    profileimg: `h-[2.25rem] rounded-full`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  }

const HomeCard = (({ profileImage, title, collectionItem, description, bannerImage }) =>{
    return (
        <div
            className={style.wrapper}
            onClick={() => {
                Router.push({
                    pathname: `contract/${collectionItem}`,  //It is not co there's a prob here
                })
            }} 
        >
            <div className={style.imgContainer}>
                <img src={
                    bannerImage 
                        ? urlFor(bannerImage).auto("format")
                        : 'https://via.placeholder.com/200'
                    
                    }
                    alt={collectionItem}
                />

            </div>

            <div className={style.details}>
                <div className={style.infoContainer}>
                    <img 
                        className={style.profileimg}
                        src={
                            profileImage
                                ? urlFor(profileImage).auto("format")
                                : 'https://via.placeholder.com/200'

                        }
                    />

                    <p>{title}</p>
                </div>


            </div>

        </div>
    )
})




export default HomeCard