import React from 'react'
import { urlFor } from '../../sanity'
import PortableText from '@sanity/block-content-to-react'  //Serializes Portable Text from sanity.io using GraphQL


const style = {
    pText: `text-2xl font-normal text-grey-700 pb-10`,
    h1Tag: `text-left text-7xl font-semibold pb-10 text-[#ced6e0]`,
    h2Tag: `text-left text-3xl md:text-5xl font-semibold pb-10 text-[#ced6e0]`
}

function Stack({ details, block }) {

    return (

        <div className='overflow-hidden'>
            <h2 className={style.h2Tag} >{details.caption}</h2>
            <img
                className="rounded-xl h-[40rem] object-contain"
                src={urlFor(details.blogImage).auto('format')}
                alt="Blog Details Image"

            />



            <div className={`${style.pText} pt-10`}>

                <PortableText
                    // all custom type blocks are filtered out
                    blocks={block}
                />
            </div>


        </div>





    )
}

export default Stack