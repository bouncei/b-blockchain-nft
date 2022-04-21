import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient } from '../sanity'
import BlogCard from '../components/blog/BlogCard'
import BlogFooter from '../components/blog/BlogFooter'
import ReviewCard from '../components/blog/ReviewCard'
import SmallCard from '../components/SmallCard'
import Link from 'next/link'
import { WiDirectionRight } from 'react-icons/wi'

function Blog({ items }) {
  // console.log(another)



  return (
    <div className="overflow-hidden">
      <Header />
      <div className="bg-[#0a1d2e]">
        {/* Blog Posts */}

        <div className="text md:p-auto mx-auto max-w-5xl p-7 text-left text-[#c8cacd] md:text-center">
          <h2 className="p-5 py-20 text-4xl font-semibold sm:px-16">
            NFT Blog
          </h2>
          <p className="pb-20 text-2xl">
            Learn how to get the most from your NFTs. Explore the latest NFTs
            news and tips and tricks all brought to you by your friendly,
            talkative NFT marketplace on BSC.
          </p>
          <div className='flex flex-wrap'>

            {items.map((item, id) => (
              <BlogCard key={id} image={item.mainImage} title={item.blogTitle} description={item.description} date={item.date} />
            ))}


          </div>

          {/* Reviews(use Grid) */}

          <h2 className="p-5 py-20 text-4xl text-left font-semibold sm:px-16">
            Reviews
          </h2>

          <Link href="/reviews">

            <button className='relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#42a0ff] cursor-pointer '>Check Reviews</button>

          </Link>

          <br />
          <br />
          <br />
          <br />

          <hr className='border-gray-600 pb-7  ' />








        </div>



      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps() {


  const query = `*[_type == "blogs" ]{
    blogTitle,
    mainImage,
    blogDetails,
    date,
    refReview,
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

        items: items,
      },
    }
  }
}

export default Blog
