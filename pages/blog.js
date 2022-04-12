import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Blog() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="bg-[#0a1d2e]">
        {/* Blog Posts */}

        <div className="text mx-auto max-w-7xl text-center text-[#c8cacd]">
          <h2 className="p-5 py-20 text-4xl font-semibold sm:px-16">
            NFT Blog
          </h2>
          <p className="pb-20 text-2xl">
            Learn how to get the most from your NFTs. Explore the latest NFTs
            news and tips and tricks all brought to you by your friendly,
            talkative NFT marketplace on BSC.
          </p>
        </div>

        {/* Reviews */}
      </div>

      <Footer />
    </div>
  )
}

export default Blog
