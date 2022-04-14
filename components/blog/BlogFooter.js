import Link from 'next/link'
import React from 'react'

function BlogFooter() {
    return (
        <div className='overflow-hidden flex items-center'>

            {/* Link Button to home */}
            <Link href="/">

                <button className='relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer'>Buy NFTs</button>
            </Link>


            {/* Follow us on ... */}
            <div className='flex'>
                <p>Follow us on </p>
                {/* Social Media Handles */}

            </div>

        </div>
    )
}

export default BlogFooter