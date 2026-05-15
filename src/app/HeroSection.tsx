import HeroPulse from './HeroPulse'
import Hero from './Hero'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-primary">Start Your Next Venture</h1>
          <h2 className="text-7xl font-bold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards">
            The architecture for <br />
            <span className="text-accent">
              <HeroPulse />
            </span>
          </h2>
          <p className="py-6 max-w-2xl mx-auto">
            The ultimate starting point for any web application. Robust enough for enterprise scale,
            fast enough for hackathon deadlines. Stop configuring, start shipping.
            <br />
            No config overhead. No surprise invoices.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://docs.apexkit.site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-none"
            >
              Read the docs
            </a>
            <a
              href="https://github.com/pnpancholi/apexkit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent rounded-none"
            >
              Source Code
            </a>
          </div>
          <Hero />
        </div>
      </div>
    </section>
  )
}
