import React from 'react'
import { useId } from 'react'
import BlogCard from '../../components/BlogCard'

const Item = ({ items }) => {
  return (
    <div className="overflow-hidden">
      {items.map((item) => (
        <BlogCard key={useId} />
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params

  const query = `*[_type == "blogs" && _id == "${id.nftId}"][0]{
    caption,
    imageTest,
    price,
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
        selectedNft: items,
      },
    }
  }
}

export default Item
