'use client'
import {WagmiProvider, createConfig, http} from "wagmi"
import {sepolia, polygon, optimism, arbitrum, base, mainnet} from "wagmi/chains"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {getDefaultConfig, ConnectKitProvider} from "connectkit"
import React, {ReactNode} from "react"

interface ConnectKitWrapper {
  children: ReactNode
}
const config = createConfig(
  getDefaultConfig({
    chains: [sepolia, polygon, optimism, arbitrum, base, mainnet],
    transports: {
      [mainnet.id]: http(
        `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      )
    },

    walletConnectProjectId: '0f5d1c7d8d5d4b8d9d8d7d6d5d4d3d2d1',
    appName: "The Next Startup",
    //opti<D->onal 
    /*appDescription: "The blazing fast tool to help you build your next billion dollar, unicorn company",
    appUrl: "https://the-next-startup.vercel.app",
    appIcon: "https://the-next-startup.vercel.app/favicon.ico",*/
  })
) 

const queryClient = new QueryClient()

export const  WalletProvider: React.FC<ConnectKitWrapper> = ({children}) => {
     return (
        <WagmiProvider config={config} >
          <QueryClientProvider client={queryClient}>
            <ConnectKitProvider theme="midnight">{children}</ConnectKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
     )
}
