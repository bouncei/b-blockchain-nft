import Link from 'next/link'
import Router from 'next/router'
import React, { cloneElement } from 'react'
import { MdLocalPrintshop } from 'react-icons/md'
import { sanityClient, urlFor } from '../sanity'
// import { urlFor } from '../sanity';
import { Route } from 'react-router-dom'

const style = {
  wrapper: `bg-[#303339] max-w-sm flex-auto w-[14rem] h-[36rem] my-10 mx-5 overflow-hidden cursor-pointer rounded-sm hover:shadow-2xl hover:bg-grey-100 hover:scale-105 transition transform duration-100 ease-out`,
  imagecontainer: `h-2/3 w-full overflow-hidden`,
  imgtag: `h-full w-full object-cover`,
  infoconainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white mx-4`,
  infoimage: `h-[3.25rem] rounded-full w-[3.25rem] object-contain`,
  title: `flex flex-col justify-center ml-4 text-white`,
}

const HomeCard = ({
  profileImage,
  title,
  collectionItem,
  description,
  bannerImage,
}) => {
  // const refer = `contract/${collectionItem}`
  // console.log(refer)

  console.log(collectionItem)

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        Router.push({
          pathname: `contract/${collectionItem}`,
        })
      }}
    >
      <div className={style.imagecontainer}>
        <img
          src={urlFor(bannerImage).auto('format')}
          className={style.imgtag}
        />
      </div>
      <div className={style.imagecontainer}>
        <div className={style.infoconainer}>
          <img
            className={style.infoimage}
            src={urlFor(profileImage)}
            alt="image"
          />

          <div className={style.title}>{title}</div>
        </div>
        <h4 className="px-3 pb-6 text-sm text-white">{description}</h4>
      </div>
    </div>
  )
}

export default HomeCard
