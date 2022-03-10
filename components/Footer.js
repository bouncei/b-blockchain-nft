import Link from 'next/link'

const style = {
  mainContainer: `grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600`,
  mainDiv: `space-y-4 text-grey-800 text-xs`,
  h5Element: `font-bold`,
}

function Footer() {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>GENERAL</h5>
          <Link href="/collection">
            <div className="transform cursor-pointer transition duration-200 ease-out hover:text-white hover:underline  ">
              Explore
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer transition duration-200 ease-out hover:text-white hover:underline  ">
              Auctions
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer transition duration-200 ease-out hover:text-white hover:underline  ">
              Offers
            </div>
          </Link>
          <Link href="/">
            <div className="transform cursor-pointer transition duration-200 ease-out hover:text-white hover:underline  ">
              Stats
            </div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>HOST</h5>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>ECOSYSTEM</h5>
          <Link href="/collection">
            <div className="transform cursor-pointer transition duration-200 ease-out hover:text-white hover:underline  ">
              Buy Mint Token
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer transition duration-200 ease-out hover:text-white hover:underline  ">
              Trade Mint
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer transition duration-200 ease-out hover:text-white hover:underline  ">
              Mint RIch List
            </div>
          </Link>

          <Link href="/">
            <div className="transform cursor-pointer transition duration-200 ease-out hover:text-white hover:underline  ">
              Mint Telegram
            </div>
          </Link>
        </div>
      </div>

      <hr />

      <br />
      <br />

      <div className={style.mainContainer}>
        <div className="text-white">
          <p>
            © Copyright 2022 &nbsp;
            <Link href="/">BaseMint</Link>
            &nbsp; -All Rights Reserved
          </p>
        </div>

        <div>Social Media Handles</div>
      </div>
    </div>
  )
}

export default Footer
