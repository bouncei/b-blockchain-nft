import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { urlFor } from '../../sanity'
import BlogFooter from './BlogFooter'

const style = {
  wrapper: `bg-[#303339] max-w-sm flex-auto w-[14rem] h-[full] my-10 mx-5 overflow-hidden cursor-pointer rounded-sm hover:shadow-2xl hover:bg-grey-100 hover:scale-105 transition transform duration-500 ease-out`,
  imagecontainer: `h-2/3 w-full overflow-hidden`,
  imgtag: `h-full w-full object-cover`,
  infoconainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white mx-4`,
  infoimage: `h-[3.25rem] rounded-full w-[3.25rem] object-contain`,
  title: `flex flex-col justify-center ml-4 text-white`,
}

function BlogCard({ image, title, date, description }) {
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        Router.push({
          pathname: `blogs/${title}`,
        })
      }}
    >
      <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md ease-out duration-100">
        <img
          class="rounded-t-lg"
          src={urlFor(image).auto('format')}
          alt="Blog Image"
        />
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 pb-20">
            {description}
          </p>

          <hr />


          <p className='text-left pt-2 mb-3 font-normal text-gray-700 dark:text-gray-400 '>{date}</p>

        </div>
      </div>

      <BlogFooter />
    </div>
  )
}

export default BlogCard
