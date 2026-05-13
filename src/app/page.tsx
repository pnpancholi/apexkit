'use client'
import Card from '@/components/ui/Card'
import Hero from '@/assets/Hero'
import HeroPulse from '@/assets/HeroPulse'
import { featuresList } from './_data/features'
import { builtWithTools } from './_data/tools'

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center pt-32 pb-16 overflow-hidden">
        {/*Grid*/}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/*Hero Section*/}
        <div className="z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-primary">Start Your Next Venture</h1>
            <h1 className="text-7xl font-bold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards">
              The architecture for <br />
              <span className="text-accent">
                <HeroPulse />
              </span>
            </h1>
            <p className="py-6 max-w-2xl mx-auto">
              The ultimate starting point for any web application. Robust enough for enterprise scale, fast enough for hackathon deadlines. Stop configuring,
              start shipping.
              <br />
              No config overhead. No surprise invoices.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://docs.apexkit.site" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Read the docs
              </a>
              <a href="https://github.com/pnpancholi/apexkit" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg">
                Source Code
              </a>
            </div>
            <Hero />
          </div>
        </div>
      </section>
      {/*Featres Section*/}
      <section className="py-16 bg-base-100 text-base-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">Everything you need, Nothing you don't</p>
          {/*grid to showcase features*/}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuresList.map((feature) => (
              <Card
                key={feature.title}
                icon={<feature.icon className="text-primary h-8 w-8" />}
                title={feature.title}
                desc={feature.description}
                hoverable={true}
              />
            ))}
          </div>
        </div>
      </section>
      {/*Built With Section*/}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Built on the mordern ecosystem, loved by developers</h3>
          <p className="text-xl text-base-content/70 mb-12 max-w-2xl mx-auto">Lorem ipsum.</p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-80">
            {builtWithTools.map((tool) => (
              <a
                href={tool.imageURL}
                target="_blank"
                rel="noopener noreferrer"
                key={tool.name}
                className="flex flex-col justify-center items-center gap-10 md:gap-16"
              >
                <img src={tool.imageURL} alt={tool.name} className="h-20 mb-2 object-contain" />
                <p className="text-sm">{tool.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/*Made by - ribbon footer*/}
      <p className="text-sm text-base-content/60 text-center py-12">
        Built with <span className="font-bold text-primary">sheer stubbornness</span>— by{' '}
        <a href="https://twitter.com/knowpradhumna" className="font-semibold text-primary hover:underline">
          Pradhumna Pancholi (Prad)
        </a>
      </p>
    </>
  )
}
