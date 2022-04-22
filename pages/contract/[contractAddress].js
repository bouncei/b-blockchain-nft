import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/Header'
import { sanityClient } from '../../sanity'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import NewImage from '../../components/NftCard'
import NftCard from '../../components/NftCard'
import Footer from '../../components/Footer'

const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-fit md:w-full flex justify-center text-white items-center`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem] invisible md:visible`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-full md:w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4 mx-[27px]`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}

const Item = ({
  imageUrl,
  bannerImageUrl,
  volumeTraded,
  createdBy,
  images,
  nftItems,
  contractAddress,
  creator,
  title,
  floorPrice,
  allOwners,
  description,
  params,
}) => (
  <div className="overflow-hidden">
    <div className={style.bannerImageContainer}>
      <img
        className={style.bannerImage}
        src={bannerImageUrl ? bannerImageUrl : 'https://via.placeholder.com/200'}
        alt="banner" />
    </div>

    <div className={style.infoContainer}>
      <div className={style.midRow}>
        <img
          className={style.profileImg}
          src={imageUrl ? imageUrl : 'https://via.placeholder.com/200'}
          alt="profile image" />
      </div>

      <div className={style.endRow}>
        <div className={style.socialIconsContainer}>
          <div className={style.socialIconsWrapper}>
            <div className={style.socialIconsContent}>
              <div className={style.socialIcon}>
                <CgWebsite />
              </div>

              <div className={style.divider}></div>

              <div className={style.socialIcon}>
                <AiOutlineInstagram />
              </div>

              <div className={style.divider}></div>

              <div className={style.socialIcon}>
                <AiOutlineTwitter />
              </div>

              <div className={style.divider}></div>

              <div className={style.socialIcon}>
                <HiDotsVertical />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.midRow}>
        <div className={style.title}>{title}</div>
      </div>

      <div className={style.midRow}>
        <div className={style.createdBy}>
          Created by <span className="text-[#2081e2]">{creator}</span>
        </div>
      </div>

      <div className={style.midRow}>
        <div className={style.statsContainer}>
          <div className={style.collectionStat}>
            <div className={style.statValue}>{nftItems.length}</div>
            <div className={style.statName}>Items</div>
          </div>
          {/* <div className={style.collectionStat}>
                        <div className={style.statValue}>
                            {allOwners ? allOwners.length : ""}
                        </div>
                        <div className={style.statName}>owners</div>
                    </div> */}
          <div className={style.collectionStat}>
            <div className={style.statValue}>
              <img
                className={style.ethLogo}
                src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                alt="eth" />
              {floorPrice}
            </div>
            <div className={style.statName}>Floor Price</div>
          </div>

          <div className={style.collectionStat}>
            <div className={style.statValue}>
              <img
                className={style.ethLogo}
                src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                alt="eth" />
              {volumeTraded}.5k
            </div>
            <div className={style.statName}>Volume Traded</div>
          </div>
        </div>
      </div>

      <div className={style.midRow}>
        <div className={style.description}>{description}</div>
      </div>
    </div>

    <div className="flex flex-wrap ">
      {nftItems.map((nftItem, id) => {
        return (
          <NftCard
            key={id}
            nftItem={nftItem}
            title={title}
            listing="true" />
        )
      })}

    </div>

    <Footer />
  </div>
)

export const getServerSideProps = async (context) => {
  const { params } = context
  const id = Object.values(params)[0]

  const query = `*[_type == "marketItems" && contractAddress == "${id}"][0] {
        "imageUrl": profileImage.asset->url,
        "bannerImageUrl": bannerImage.asset->url,
        volumeTraded,
        createdBy,
        contractAddress,
        "creator": createdBy->userName,
        title, floorPrice,
        "allOwners": owners[]->,
        "nftItems": images[]->,
        description,
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
        imageUrl: items.imageUrl,
        bannerImageUrl: items.bannerImageUrl,
        volumeTraded: items.volumeTraded,
        createdBy: items.createdBy,
        // images: items.nftImage,
        nftItems: items.nftItems,
        contractAddress: items.contractAddress,
        creator: items.creator,
        title: items.title,
        floorPrice: items.floorPrice,
        allOwners: items.allOwners,
        description: items.description,
        params,
      },
    }
  }
}

export default Item
