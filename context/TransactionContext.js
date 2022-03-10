import React from 'react'
import { useEffect, useState } from 'react'

export const TransactionContext = React.createContext()

let eth

if (typeof window != 'undefined') {
  eth = window.ethereum
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()
  
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

  return (
    <TransactionContext.Provider
      value={{
        connectWallet, 
        currentAccount,
      }}
    >
        {children}
        
    </TransactionContext.Provider>
  )
}
