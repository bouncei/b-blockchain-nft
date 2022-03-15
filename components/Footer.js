import Image from 'next/image'
import Link from 'next/link'
import appLogo from '../assets/opensea.png'

const style = {
  mainContainer: `grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600 space-x-4`,
  mainDiv: `space-y-4 text-grey-800 text-xs`,
  h5Element: `font-bold text-lg `,
  ptag: `text-base text-left`,
}

function Footer() {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.mainDiv}>
          <Link href="/">
            <div className="flex cursor-pointer items-center">
              <Image src={appLogo} height={40} width={40} />

              <div className="ml-[0.8rem] text-2xl font-bold">
                <span className="hover:scale-102 transform transition duration-200 ease-out hover:text-white  ">
                  BaseMint
                </span>
              </div>
            </div>
            {/* <h1 className='text-xl font-bold cursor-pointer'>BaseMint</h1> */}
          </Link>

          <p className={style.ptag}>
            Base Mint is the largest and most active NFT marketplace on the
            Ethereum blockchain. Through BaseMint, anybody can easily and
            quickly, mint, and buy NFTs at a fraction of the cost of other NFT
            platforms. Base Mint also provides feeless NFT transfers.
          </p>
        </div>
        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>GENERAL</h5>
          <Link href="/collection">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Explore
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Auctions
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Offers
            </div>
          </Link>
          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Stats
            </div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>HOST</h5>
          <Link href="/collection">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Explore
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Auctions
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Offers
            </div>
          </Link>
          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Stats
            </div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>ECOSYSTEM</h5>
          <Link href="/collection">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Buy Mint Token
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Trade Mint
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline ">
              Mint RIch List
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer text-base transition duration-200 ease-out hover:text-white hover:underline">
              Mint Telegram
            </div>
          </Link>
        </div>
      </div>

      <div className={style.mainContainer}>
        <div className="text-grey-800">
          <div>
            © Copyright 2022 &nbsp;
            <Link href="/">
              <span className="cursor-pointer hover:text-[#0198E1] hover:underline">
                BaseMint
              </span>
            </Link>
            &nbsp; -All Rights Reserved
          </div>
        </div>

        {/* <div className='flexorde  r-last'>Social Media Handles</div> */}
      </div>
    </div>
  )
}

export default Footer
