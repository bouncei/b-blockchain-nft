import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import Head from 'next/head';
import { TransactionProvider } from '../context/TransactionContext'
import React from 'react';
// import "../styles/globals.css";
import LoadingScreen from "../components/PreLoader/LoadingScreen";
import { useState, useEffect } from "react";
// import Header from '../components/Header';
import { useRouter } from 'next/router';
import Header from '../components/Header';

// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// import Router from 'next/router';




// Router.events.on('routeChangeStart', (url) => {
//   console.log(`Loading: ${url}`);
//   NProgress.start();
// });

// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Base Mint</title>
        <link rel="icon" href="/opensea.ico" />
      </Head>


      <TransactionProvider>
        <Header />
        <LoadingScreen loading={loading} />

        <Component {...pageProps} />
      </TransactionProvider>
    </div>

  )
}

export default MyApp
