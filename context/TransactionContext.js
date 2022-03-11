import React from 'react'
import { useEffect, useState } from 'react'

export const TransactionContext = React.createContext()

let eth

if (typeof window != 'undefined') {
  eth = window.ethereum
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()
  const [isLoading, setIsLoading] = useState()
  const [amount, setAmount] = useState()

  const address = "0x7E219E6f983187EB35F9B2D6816DF084a616d28c"
  

  const formData = {
    addressTo: {address},
    amount: {amount}
  }


  useEffect(() => {
      checkIfWalletIsConnected()
  }, [])

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
            console.log("wallet is already connected to metamask")
        }
      } catch (error) {
          console.log(error)
          throw new Error('No ethereum object.')
      }

  }


  const sendTransaction = async (
    metamask = eth,
    connectedAccount = currentAccount,
  ) => {
    try {
      if (!metamask) return alert('Please install metamask ')
      const { addressTo, amount } = formData  // gets a destructured value for the receiver address and amount
      const transactionContract = getEthereumContract()

      const parsedAmount = ethers.utils.parseEther(amount)

      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: '0x7EF40', // 520000 Gwei
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionContract.publishTransaction(
        addressTo,
        parsedAmount,
        `Transferring ETH ${parsedAmount} to ${addressTo}`,
        'TRANSFER',
      )

      setIsLoading(true)

      await transactionHash.wait()

      // FOR DB
      // await saveTransaction(
      //   transactionHash.hash,
      //   amount,
      //   connectedAccount,
      //   addressTo,
      // )

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }


  const handleChange = (price) => {
    return setAmount(price)
  }


  return (
    <TransactionContext.Provider
      value={{
        connectWallet, 
        currentAccount,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
        {children}
        
    </TransactionContext.Provider>
  )
}
