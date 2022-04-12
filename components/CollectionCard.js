import Link from 'next/link'
import Router from 'next/router'
import React, { cloneElement, useState } from 'react'
import { MdLocalPrintshop } from 'react-icons/md'
import { sanityClient, urlFor } from '../sanity'
// import { urlFor } from '../sanity';
import { Route } from 'react-router-dom'

const style = {
  wrapper: `bg-[#303339] max-w-sm flex-auto w-[14rem] h-[30rem] my-10 mx-5 overflow-hidden cursor-pointer rounded-xl hover:border-solid hover:shadow-2xl hover:bg-grey-100 hover:scale-105 transition transform duration-100 ease-out border-dashed border-2 border-[#6e7687] `,
  imagecontainer: `h-2/3 w-full overflow-hidden`,
  imgtag: `h-full w-full`,
  infoconainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white mx-4`,

  title: `flex flex-col justify-center ml-4 text-white`,
}

const CollectionCard = ({ title, image, contractAddress }) => {
  // console.log(contractAddress)

  return (
    <div
      className={style.wrapper}
      onClick={() => {
        Router.push({
          pathname: `contract/${contractAddress}`,
        })
      }}
    >
      <div className={style.imagecontainer}>
        <img
          className={style.imgtag}
          src={urlFor(image).auto('format')}
          alt={image}
        />
      </div>
      <div className={style.imagecontainer}>
        <div className="py-8 text-center text-2xl text-white">{title}</div>
      </div>
    </div>
  )
}

export default CollectionCard
