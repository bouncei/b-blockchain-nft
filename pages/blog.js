import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient } from '../sanity'
import BlogCard from '../components/BlogCard'

function Blog({ items }) {
  console.log(items)
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

          {items.map((item) => {
            ;<BlogCard key={id} image={item.mainImage} />
          })}
          <BlogCard />
        </div>

        {/* Reviews */}
      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params
  console.log(id)

  const query = `*[_type == "blogs" ][0]{
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