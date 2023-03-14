import Layout from '@/components/layouts/layout'
import '@/styles/globals.css'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import type { AppProps } from 'next/app'
import { Address, WagmiConfig, createClient } from 'wagmi'
import { goerli , sepolia } from 'wagmi/chains'
import dotenv from "dotenv"
import { createContext } from 'react'
import { Context } from 'react';
dotenv.config()

export const ContractContext = createContext<Address>("0x0f");

export default function App({ Component, pageProps }: AppProps) {
  const chains = [goerli, sepolia]

  const client = createClient(
    getDefaultClient({
      appName: "WAC Market",
      alchemyId: process.env.ALCHEMY_ID,
      chains
    })
  )

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ContractContext.Provider value="0x681f330e49f9df96fca4b61ebc24b2426df3c639">
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </ContractContext.Provider>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
