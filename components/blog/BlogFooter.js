import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import { FaDiscord } from "react-icons/fa"


const style = {
    SocialIcons: `text-3xl px-2 cursor-pointer`,
}

function BlogFooter() {
    return (
        <div className='overflow-hidden flex items-center px-0 md:px-10 justify-between'>

            {/* Link Button to home */}
            <Link href="/">

                <button className='relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#42a0ff] cursor-pointer'>Buy NFTs</button>
            </Link>


            {/* Follow us on ... */}
            <div className='md:flex items-center justify-between'>
                <p className='md:text-lg py-3 md:py-0'>Follow us on: </p>

                {/* Social Media Handles */}
                <div className='flex items-center pl-0 md:pl-10'>

                    <Link href="#">
                        <div className={style.SocialIcons}><BsTelegram /></div>

                    </Link>
                    <Link href="#">
                        <div className={style.SocialIcons}><BsInstagram /></div>

                    </Link>
                    <Link href="#">
                        <div className={style.SocialIcons}><BsTwitter /></div>

                    </Link>
                    <Link href="#">
                        <div className={style.SocialIcons}><FaDiscord /></div>

                    </Link>
                </div>





            </div>

        </div>
    )
}

export default BlogFooter