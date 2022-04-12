import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import appLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { TransactionContext } from '../context/TransactionContext'
import toast, { Toaster } from 'react-hot-toast' // Receiving toast
import { HiMenu } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] md:flex md:justify-between`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center md:bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` md:flex md:items-center justify-end bg-white md:bg-inherit z-[1] md:z-auto md:static absolute left-0 h-1/3 w-full md:w-auto rounded-xl md:opacity-100 opacity-0`,
  MenuItems: ` md:flex md:items-center justify-end bg-inherit md:bg-inherit z-[1] md:z-auto md:static absolute left-0  w-full md:w-auto rounded-xl md:opacity-100 opacity-100 mt-3`,

  headerItem: `text-white px-4 font-bold md:text-[#c8cacd] hover:text-white duration-500 cursor-pointer py-2`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white duration-500 cursor-pointer`,
  addressProfile: `flex items-center space-x-2 pt-0 md:pt-0`,

  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center md:bg-[#191B1F] bg-none rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
  menuButton: ``,
}

const Header = () => {
  const { ab, currentAccount } = useContext(TransactionContext)
  const [userName, setUserName] = useState()
  const [checkMenu, setcheckMenu] = useState(true)

  const value = useContext(TransactionContext)
  const connectWallet = Object.values(value)[0]

  useEffect(() => {
    if (!currentAccount) return

    const str1 = currentAccount.slice(0, 4)
    const str2 = currentAccount.slice(38)
    const finalStr = str1 + '...' + str2
    setUserName(finalStr)
  }, [currentAccount])

  // Dropdown Menu
  // function menu(e) {
  //   e.preventDefault()
  //   console.log('You clicked on this menu icon ')
  //   setcheckMenu(false)
  //   console.log(checkMenu)

  return (
    <div className={style.wrapper}>
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className={style.logoContainer}>
            <Image src={appLogo} height={40} width={40} />
            <div className={style.logoText}>BaseMint</div>
          </span>
        </Link>

        <span className=" block flex items-center justify-center text-3xl text-white md:hidden">
          {currentAccount ? (
            <div className={`${style.headerIcon} ${style.addressProfile} `}>
              <Link href="/profile">
                <div className="flex items-center">
                  <CgProfile />

                  <div className={`${style.button} ${style.buttonPadding}`}>
                    <div className={style.buttonTextContainer}>{userName}</div>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            ''
          )}

          <div className="text-white" onClick={() => setcheckMenu(!checkMenu)}>
            <div className="cursor-pointer">
              {checkMenu ? <HiMenu /> : <AiOutlineClose />}
            </div>
          </div>
        </span>
      </div>

      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>

        <input
          className={style.searchInput}
          placeholder="Search items, collections and accounts"
        />
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      {!currentAccount ? (
        <div className={`${checkMenu ? style.headerItems : style.MenuItems}`}>
          <Link href="/">
            <div className={style.headerItem}> Home </div>
          </Link>

          <Link href="/collections">
            <div className={style.headerItem}> Collections </div>
          </Link>

          <Link href="/allnfts">
            <div className={style.headerItem}> NFTs </div>
          </Link>

          <Link href="/blog">
            <div className={style.headerItem}>NFT Blog</div>
          </Link>
        </div>
      ) : (
        ''
      )}

      {currentAccount ? (
        // <div className={`${style.button} ${style.buttonPadding}`}>
        //   <div className={style.buttonTextContainer}>0x672...38a</div>
        // </div>

        <div className={`${checkMenu ? style.headerItems : style.MenuItems}`}>
          <Link href="/">
            <div className={style.headerItem}> Home </div>
          </Link>

          <Link href="/collections">
            <div className={style.headerItem}> Collections </div>
          </Link>

          <Link href="/allnfts">
            <div className={style.headerItem}> NFTs </div>
          </Link>

          {checkMenu ? (
            <div className={`${style.headerIcon} ${style.addressProfile} `}>
              <Link href="/profile">
                <div className="flex items-center">
                  <CgProfile />
                  <div className={`${style.button} ${style.buttonPadding}`}>
                    <div className={style.buttonTextContainer}>{userName}</div>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div
          onClick={() => connectWallet()}
          className={`${style.button} ${style.buttonPadding}`}
        >
          <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
            Connect Wallet
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
