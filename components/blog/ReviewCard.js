import React from 'react'
import { urlFor } from '../../sanity'
import { useState } from 'react'

const style = {
    imgClass: `relative h-[3.25rem] rounded-lg w-[3.25rem] object-contain`,
}



function ReviewCard({ name, image, stars, index }) {
    const [displayStars, setStars] = useState()
    // const [checkList, setCheckList] = useState(true)

    const starList = []

    for (var i = 0; i < stars; i++) {
        starList.push("⭐")

    }

    // setCheckList(true)

    // while (checkList) {

    //     if (starList.length < 6) {
    //         starList.push(".")
    //     } else if (starList === 5) {
    //         setCheckList(false)
    //         break
    //     }




    // }





    console.log("complete star list", starList);

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
                    <div className='flex items-center '>
                        <h2 className='text-lg text-left pr-3'>{name}</h2>

                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-gray-600 "><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>

                    </div>


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




