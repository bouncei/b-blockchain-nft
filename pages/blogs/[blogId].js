import React from 'react'
import { useId } from 'react'
import { useRouter } from 'next/router'
// import BlogCard from '../../components/BlogCard'
import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogFooter from '../../components/blog/BlogFooter'

const style = {
  pText: `text-2xl font-normal text-grey-700 pb-10`,
}


const Item = ({ details, mainImage, description, another, date }) => {
  // const path = useRouter()

  // console.log(path);


  // console.log("Blog Details", items)
  console.log(date)
  return (
    <div className=' overflow-hidden'>
      <Header />

      <div className='bg-[#0a1d2e]'>

        <div className='md:p-auto mx-auto max-w-5xl p-7 text-left text-[#c8cacd]  pt-[150px]'>


          {/* Blog Posts */}
          <div className=''>
            <h1 className='text-left text-6xl font-semibold pb-10'>{details[0].caption}</h1>

            <p className={style.pText}>{description}</p>

            <p className={style.pText}>{date}</p>

            <img
              className="rounded-xl"
              src={urlFor(mainImage).auto('format')}
              alt="Blog Image"
            />

            <p className={`${style.pText} pt-10`}>{another}</p>

          </div>


          {/* Reviews */}
          <div></div>

          <hr className='border border-gray-700 ' />
          <br />
          <br />


          <BlogFooter />


        </div>


      </div>

      <Footer />

    </div>

  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const id = Object.values(params)[0]


  const query = `*[_type == "blogs" && blogTitle == "${id}"][0]{
    description,
    mainImage,
    date,
    another,
    "Details": blogDetails[]->,
}   
`

  const items = await sanityClient.fetch(query)

  if (!items) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        mainImage: items.mainImage,
        details: items.Details,
        description: items.description,
        another: items.another,
        date: items.date,
        // items: items
      },
    }
  }
}

export default Item
