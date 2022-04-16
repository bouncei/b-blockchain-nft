import React from 'react'
import { urlFor } from '../../sanity'
import { useState } from 'react'

const style = {
    imgClass: `relative h-[3.25rem] rounded-lg w-[3.25rem] object-contain`,
}



function ReviewCard({ name, image, stars, index, collectionItem }) {
    const [displayStars, setStars] = useState()

    const starList = []

    for (var i = 0; i < stars; i++) {
        starList.push("⭐")


    }

    console.log("complet star list", starList);

    // setStars(starList)
    // console.log(displayStars)

    return (
        <div className="flex items-center justify-between m-2 mt-5 p-2 bg-[#04111d] border-solid border-2 border-[#687da7] space-x-10 rounded-xl cursor-pointer hover:scale-105 transition transform duration-500 ease-out "
        >
            {/* LEFT */}
            <div className='flex items-center space-x-3'>
                <div className='text-[#718096]'>
                    {index + 1}.
                </div>
                <img
                    className={style.imgClass}
                    src={urlFor(image).auto('format')}
                    alt=""
                />

                <div>

                    <h2 className='text-lg text-left'>{name}</h2>

                    <h4 className='text-[#718096] text-left'>{starList} </h4>
                </div>
            </div>

            {/* RIGHT */}
            <div className='order-last'>

                {/*<div className=''>
                    <h4 className='text-[#718096]'>{noOfNfts.length}</h4>
                </div>*/}

            </div>
        </div>


    )
}

export default ReviewCard




