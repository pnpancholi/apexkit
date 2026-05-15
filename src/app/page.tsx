'use client'
import Card from '@/components/ui/Card'
import Image from 'next/image'
import { featuresList } from './_data/features'
import { builtWithTools } from './_data/tools'
import HeroSection from './HeroSection'

export default function Home() {
  const containerClasses = 'container mx-auto px-4 text-center'
  const sectionHeaderClasses = 'text-4xl font-bold mb-4'
  const sectionSubtitleClasses = 'text-lg mb-12 max-w-2xl mx-auto'

  return (
    <>
      <HeroSection />
      <section>
        <div className={containerClasses}>
          <h2 className={sectionHeaderClasses}>Features</h2>
          <p className={sectionSubtitleClasses}>Everything you need, Nothing you don't</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuresList.map((feature) => (
              <Card
                key={feature.title}
                icon={<feature.icon className="text-primary h-8 w-8" />}
                title={feature.title}
                desc={feature.description}
                hoverable
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={containerClasses}>
          <h3 className={sectionHeaderClasses}>
            Built on the mordern ecosystem, loved by developers
          </h3>
          <p className={sectionSubtitleClasses}>Lorem ipsum.</p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {builtWithTools.map((tool) => (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                key={tool.name}
                className="flex flex-col justify-center items-center gap-10 md:gap-16"
              >
                <div className="h-16">
                  <Image
                    src={tool.imageURL}
                    alt={tool.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm">{tool.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <p className="text-sm text-base-content/60 text-center py-12">
        Built with <span className="font-bold text-primary">sheer stubbornness</span>— by{' '}
        <a
          href="https://twitter.com/knowpradhumna"
          className="font-semibold text-primary hover:underline"
        >
          Pradhumna Pancholi (Prad)
        </a>
      </p>
    </>
  )
}
