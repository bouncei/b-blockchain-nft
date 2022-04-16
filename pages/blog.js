import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sanityClient } from '../sanity'
import BlogCard from '../components/blog/BlogCard'
import BlogFooter from '../components/blog/BlogFooter'
import ReviewCard from '../components/blog/ReviewCard'
import SmallCard from '../components/SmallCard'


function Blog({ items, reviews }) {
  console.log(reviews)

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   if (!items) return

  //   setData(items)



  // }, [items])


  // // console.log("quarried Data", data.length)



  // const nums = [1, 2, 3, 4];

  // const doubles = nums.map(num => {
  //   return num * 2;
  // });

  // console.log(doubles); // [2, 4, 6, 8]


  // console.log(typeof (doubles))



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

            {items.map((item, id) => (
              <BlogCard key={id} image={item.mainImage} title={item.blogTitle} description={item.description} date={item.date} />
            ))}


          </div>

          {/* Reviews(use Grid) */}

          <h2 className="p-5 py-20 text-4xl text-left font-semibold sm:px-16">
            Reviews
          </h2>
          <hr className='border-gray-600 pb-7  ' />



          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
            {reviews.map((review, id) => (
              <ReviewCard
                key={id}
                name={review.name}
                index={reviews.indexOf(review)}
                image={review.picture}
                stars={review.stars}

              />
            ))}
          </div>











        </div>



      </div>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params
  console.log(id)

  const query = `*[_type == "blogs" ]{
    blogTitle,
    mainImage,
    blogDetails,
    date,
    description,
  }`


  const ReviewQuery = `*[_type == "reviews"]{
    name,
    picture,
    stars,
  }`

  const items = await sanityClient.fetch(query)
  const reviews = await sanityClient.fetch(ReviewQuery)


  if (!items && !reviews) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        items: items,
        reviews: reviews,
      },
    }
  }
}

export default Blog
