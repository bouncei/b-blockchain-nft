import Link from 'next/link'
import Router from 'next/router'
import React, { cloneElement } from 'react'
import { MdLocalPrintshop } from 'react-icons/md'
import { sanityClient, urlFor } from '../sanity'
// import { urlFor } from '../sanity';
import { Route } from 'react-router-dom'

const style = {
  wrapper: `bg-[#303339] max-w-sm flex-auto w-[14rem] h-[30rem] my-10 mx-5 overflow-hidden cursor-pointer`,
  imagecontainer: `h-2/3 w-full overflow-hidden`,
  imgtag: `h-full w-full`,
  infoconainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white mx-4`,
  infoimage: `h-[3.25rem] rounded-full w-[3.25rem]`,
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

  function linkFunction() {
    return <Link href={collectionItem} />
  }
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        Router.push({
          pathname: '/contract/mutant-ape-yacht-club',
        })
      }}
    >
      <div className={style.imagecontainer}>
        <img
          src={urlFor(bannerImage).auto('format')}
          className={style.imgtag}
        />
      </div>

      <div className={style.infoconainer}>
        <img
          className={style.infoimage}
          src={urlFor(profileImage)}
          alt="image"
        />

        <div className={style.title}>
          {title}</div>
      </div>

      <h4 className='px-3 text-white text-sm pb-6'>{description}</h4>
    </div>
  )
}

export default HomeCard
