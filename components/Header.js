import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import appLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { TransactionContext } from '../context/TransactionContext'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center md:bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
  addressProfile: `flex items-center space-x-2`,


  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
  buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Header = () => {
  const { ab, currentAccount } = useContext(TransactionContext)
  const [userName, setUserName] = useState()

  const value = useContext(TransactionContext)
  const connectWallet = Object.values(value)[0]



  useEffect(() => {
    if(!currentAccount) return


    const str1 = currentAccount.slice(0,7)
    const str2 = currentAccount.slice(35)
    const finalStr = str1 + "..." + str2
    setUserName(finalStr)

  }, [currentAccount])

  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={appLogo} height={40} width={40} />
          <div className={style.logoText}>BaseMint</div>
        </div>
      </Link>

      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>

        <input
          className={style.searchInput}
          placeholder="Search items, collections and accounts"
        />
      </div>

      {currentAccount ? (
        // <div className={`${style.button} ${style.buttonPadding}`}>
        //   <div className={style.buttonTextContainer}>0x672...38a</div>
        // </div>

        <div className={style.headerItems}>
          <Link href="/">
            <div className={style.headerItem}> Home </div>
          </Link>

          <Link href="/collections">
            <div className={style.headerItem}> Collections </div>
          </Link>

          <Link href="/allnfts">
            <div className={style.headerItem}> NFTs </div>
          </Link>
{/* 
          <Link href="/contract/mutant-ape-yacht-club">
            <div className={style.headerItem}> Stats </div>
          </Link> */}

          {/* <Link href="nice/joshme5">
            <div className={style.headerItem}> Resources </div>
          </Link> */}

          <div className={`${style.headerIcon} ${style.addressProfile}`}>
            <Link href="/profile">
              <div className='flex items-center'>

              <CgProfile />
              <div className={`${style.button} ${style.buttonPadding}`}>
                  <div className={style.buttonTextContainer}>{userName}</div>
              </div>
              </div>
            </Link>
          </div>

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
