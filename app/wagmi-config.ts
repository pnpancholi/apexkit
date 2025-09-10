import {getDefaultConfig} from '@rainbow-me/rainbowkit'
import {mainnet, polygon, optimism, arbitrum, base, sepolia} from 'wagmi/chains'
//wagmi config//
export const config = getDefaultConfig({
  appName: "The Next Startup",
  projectId: "",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
  ],
  ssr: true

})
