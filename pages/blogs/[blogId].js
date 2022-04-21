import React from 'react'
import { useId } from 'react'
import { useRouter } from 'next/router'
// import BlogCard from '../../components/BlogCard'
import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogFooter from '../../components/blog/BlogFooter'
import PortableText from '@sanity/block-content-to-react'


const style = {
  pText: `text-2xl font-normal text-grey-700 pb-10`,
  h1Tag: `text-left text-7xl font-semibold pb-10 text-[#ced6e0]`,
  h2Tag: `text-left text-5xl font-semibold pb-10 text-[#ced6e0]`
}

// function toPlainText(blocks = []) {
//   return blocks
//     // loop through each block
//     .map(block => {
//       // if it's not a text block with children, 
//       // return nothing
//       if (block._type !== 'block' || !block.children) {
//         return ''
//       }
//       // loop through the children spans, and join the
//       // text strings
//       return block.children.map(child => child.text).join('')
//     })
//     // join the paragraphs leaving split by two linebreaks
//     .join('\n\n')
// }


const Item = ({ details, blogTitle, mainImage, description, another, date }) => {
  // const path = useRouter()

  // console.log(details[0].portableText, "Portable Text Displayed");
  // console.log(toPlainText(details[0].portableText))


  // console.log("Blog Details", items)
  console.log(date)
  return (
    <div className=' overflow-hidden'>
      <Header />

      <div className='bg-[#0a1d2e]'>

        <div className='md:p-auto mx-auto max-w-5xl p-7 text-left text-[#c8cacd]  pt-[150px]'>


          {/* Blog Posts */}
          <div className=''>
            <h1 className={style.h1Tag}>{blogTitle}</h1>

            <p className={style.pText}>{description}</p>

            <p className={style.pText}>{date}</p>

            <img
              className="rounded-xl"
              src={urlFor(mainImage).auto('format')}
              alt="Blog Image"
            />

            <p className={`${style.pText} pt-10`}>


              <PortableText blocks={another} /></p>

          </div>


          {/* Details Div Block */}
          <div className=''>
            <h2 className={style.h2Tag} >{details[0].caption}</h2>
            <img
              className="rounded-xl"
              src={urlFor(details[0].blogImage).auto('format')}
              alt="Blog Details Image"

            />



            <div className={`${style.pText} pt-10`}>

              <PortableText
                // all custom type blocks are filtered out
                blocks={details[0].portableText.filter(({ _type }) => _type === "block")}
              />
            </div>


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
    blogTitle,
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
        blogTitle: items.blogTitle,
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
