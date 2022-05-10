import React from 'react'
import ReviewCard from '../components/blog/ReviewCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { sanityClient } from '../sanity'

function reviews({ items }) {
    // console.log(items)
    return (
        <div className='overflow-hidden'>


            <div className="bg-[#0a1d2e]">
                <div className="text md:p-auto mx-auto max-w-7xl p-7 text-left text-[#c8cacd] md:text-center">
                    <h2 className="p-5 py-20 text-4xl font-semibold sm:px-16">
                        Reviews
                    </h2>


                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">

                        {items.map((item, id) => (
                            <ReviewCard
                                key={id}
                                index={items.indexOf(item)}
                                name={item.name}
                                stars={item.stars}
                                image={item.picture}

                            />

                        ))}


                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const query = `*[_type == "reviews" ]{
        name,
        stars,
        picture,
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




export default reviews
