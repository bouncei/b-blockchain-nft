import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient } from '../sanity'
import BlogCard from '../components/blog/BlogCard'
import BlogFooter from '../components/blog/BlogFooter'
import ReviewCard from '../components/blog/ReviewCard'
import SmallCard from '../components/SmallCard'

function Blog({ items }) {
  // console.log(items)

  const [data, setData] = useState([])

  useEffect(() => {
    if (!items) return

    setData(items)



  }, [items])


  console.log("quarried Data", data)



  const nums = [1, 2, 3, 4];

  const doubles = nums.map(num => {
    return num * 2;
  });

  console.log(doubles); // [2, 4, 6, 8]


  console.log(typeof (doubles))



  return (
    <div className="overflow-hidden">
      <Header />
      <div className="bg-[#0a1d2e]">
        {/* Blog Posts */}

        <div className="text md:p-auto mx-auto max-w-7xl p-7 text-left text-[#c8cacd] md:text-center">
          <h2 className="p-5 py-20 text-4xl font-semibold sm:px-16">
            NFT Blog
          </h2>
          <p className="pb-20 text-2xl">
            Learn how to get the most from your NFTs. Explore the latest NFTs
            news and tips and tricks all brought to you by your friendly,
            talkative NFT marketplace on BSC.
          </p>
          <div className='flex flex-wrap'>

            <BlogCard image={items.mainImage} title={items.blogTitle} description={items.description} date={items.date} />


          </div>

          {/* Reviews(use Grid) */}







        </div>



      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params
  console.log(id)

  const query = `*[_type == "blogs" ][0]{
    blogTitle,
    mainImage,
    blogDetails,
    date,
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
