import React from 'react'
import { useEffect, useState } from 'react'
import { contractABI, contractAddress } from './lib/constants'
import { ethers } from 'ethers'
import { client } from '../lib/sanityClient'

export const TransactionContext = React.createContext()

let eth

if (typeof window != 'undefined') {
  eth = window.ethereum
}

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return transactionContract
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()
  const [isLoading, setIsLoading] = useState()
  const [amount, setAmount] = useState()
  const [image, setImage] = useState()
  const [name, setName] = useState()

  const address = '0x7E219E6f983187EB35F9B2D6816DF084a616d28c'

  const formData = {
    addressTo: { address },
    amount: { amount },
  }

  const NftData = {
    image: { image },
    name: { name },
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  /**
   * Create user profile in Sanity
   */
  useEffect(() => {
    if (!currentAccount) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: currentAccount,
        userName: 'Unnamed',
        walletAddress: currentAccount,
      }

      await client.createIfNotExists(userDoc)
    })()
  }, [currentAccount])

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask')
      const accounts = await metamask.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object.')
    }
  }

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask')
      const accounts = await metamask.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
        console.log('wallet is already connected to metamask')
      }
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object.')
    }
  }

  const sendTransaction = async (
    metamask = eth,
    connectedAccount = currentAccount
  ) => {
    try {
      if (!metamask) return alert('Please install metamask ')

      const { addressTo, amount } = formData // gets a destructured value for the receiver address and amount
      const { image, name } = NftData //gets a destructured value for the imageUrl and the NFT name from the usestate hook

      const transactionContract = getEthereumContract()

      const parsedAmount = ethers.utils.parseEther(amount.amount)
      const parsedAddress = addressTo.address

      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: connectedAccount,
            to: addressTo.address,
            gas: '0x7EF40', // 520000 Gwei
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionContract.publishTransaction(
        addressTo.address,
        parsedAmount,
        `Transferring ETH ${parsedAmount} to ${addressTo.address}`,
        'TRANSFER'
      )

      setIsLoading(true)

      await transactionHash.wait()

      // FOR DB
      await saveTransaction(
        transactionHash.hash,
        amount.amount,
        connectedAccount,
        parsedAddress,
        image.image,
        name.name
      )

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (price) => {
    return setAmount(price)
  }

  const handleImage = (image) => {
    return setImage(image)
  }

  const handleName = (name) => {
    return setName(name)
  }

  // Adding Selected Nft to set of Collected Item
  const saveTransaction = async (
    txHash,
    amount,
    fromAddress = currentAccount,
    toAddress,
    image,
    name
  ) => {
    const txDoc = {
      _type: 'transactions',
      _id: txHash,
      fromAddress: fromAddress,
      toAddress: toAddress,
      timestamp: new Date(Date.now()).toISOString(),
      txHash: txHash,
      cImg: image,
      cName: name,
      amount: parseFloat(amount),
    }

    await client.createIfNotExists(txDoc)

    await client
      .patch(currentAccount)
      .setIfMissing({ transactions: [] })
      .insert('after', 'transactions[-1]', [
        {
          _key: txHash,
          _ref: txHash,
          _type: 'reference',
        },
      ])
      .commit()
    return
  }

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        sendTransaction,
        handleChange,
        handleImage,
        handleName,
        formData,
        NftData,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
