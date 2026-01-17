"use client"

import { FingerprintPattern, ShieldX, Rocket, Braces, Palette, Zap } from "lucide-react"
import HeroAsset from "./assets/HeroAsset";
import HeroPulse from "./assets/HeroPulse"
export default function Home() {
  const featuresList = [
    {
      icon: FingerprintPattern,
      title: "Auth that just works",
      description:
        "Sign-up, Sign-in, Magic Links, Password Reset and Social Logins - all ready to go. And here's more, no vendor lock-in and you own the data",
    },
    {
      icon: ShieldX,
      title: "Avoid Vendor Prison",
      description:
        "Supabase today, Neon tomorrow, Railway next week — Switching to the data platform that meet your needs is super easy",
    },
    {
      icon: Rocket,
      title: "Prototype in Hours",
      description:
        "Stop copy-pasting boilerplate. Apex Kit handles the boring and repetive stuff for yur. So, you can focus on your core feature and product-market fit.",
    },
    {
      icon: Braces,
      title: "Type-Safe End-to-End ",
      description:
        "Drizzle + TypeScript = no more “any” surprises. Catch bugs before they catch your users (or your sleep).",
    },
    {
      icon: Palette,
      title: "Themes Out of the Box",
      description:
        "Light, dark, cyberpunk, cupcake — your MVP doesn't need to look bland or unappealing. Extend to your own design language when your team is ready",
    },
    {
      icon: Zap,
      title: "Built for 2026",
      description:
        "A healthy mix of modern and battle-tested approaches. Build to provide mordern developer experience without sacrificing security",
    },
  ];
  const builtWithTools = [
    {
      name: "Next JS",
      imageURL:
        "https://assets.vercel.com/image/upload/v1662130272/nextjs-black-logo.svg",
    },
    {
      name: "TypeScript",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      name: "Tailwind CSS",
      imageURL: "https://tailwindcss.com/favicons/favicon-32x32.png",
    },

    { name: "daisy UI", imageURL: "https://daisyui.com/favicon.ico" },
    { name: "Better Auth", imageURL: "https://www.better-auth.com/logo.svg" },
    {
      name: "Drizzle",
      imageURL: "https://drizzle.team/assets/logo.svg",
    },
  ];
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>
        {/*Hero Section*/}
        <div className="hero-content  items-center mx-auto">
          <div className="space-y-8">
            <div className="text-center max-w-3xl">
              <h1 className="text-5xl font-bold mb-8 text-primary">
                Start Your Next Venture
              </h1>
              <h1 className="text-7xl font-bold tracking-tight mb-8  animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-backwards">
                The architecture for <br />
                <span className="text-accent"><HeroPulse /></span>
              </h1>
              <p className="py-6">
                The ultimate starting point for any web application. Robust enough
                for enterprise scale, fast enough for hackathon deadlines. Stop
                configuring, start shipping.
                <br />
                No config overhead. No surprise invoices.
              </p>
              <button className="btn btn-primary btn-lg">Read the docs</button>
              <button className="btn btn-accent btn-lg ml-5">Switch Theme</button>
            </div>
            <HeroAsset />
          </div>
        </div>
      </section>
      {/*Featres Section*/}
      <section className="py-16 bg-base-100 text-base-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Everything you need, Nothing you don't
          </p>
          {/*grid to showcase features*/}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body items-center text-center">
                  <feature.icon className="text-primary h-8 w-8" />
                  <h3 className="card-title text-xl mb-3">{feature.title}</h3>
                  <p className="text-base-content/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Built With Section*/}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Built on the mordern ecosystem, loved by developers
          </h3>
          <p className="text-xl text-base-content/70 mb-12 max-w-2xl mx-auto">
            Lorem ipsum.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-80">
            {builtWithTools.map((tool, index) => (
              <a
                key={index}
                className="flex flex-col justify-center items-center gap-10 md:gap-16"
              >
                <img
                  src={tool.imageURL}
                  alt={tool.name}
                  className="h-20 mb-2 object-contain"
                />
                <p className="text-sm">{tool.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/*Made by - ribbon footer*/}
      <p className="text-sm text-base-content/60 text-center py-12">
        Built with{" "}
        <span className="font-bold text-primary">sheer stubbornness</span>— by{" "}
        <a
          href="https://twitter.com/knowpradhumna"
          className="font-semibold text-primary hover:underline"
        >
          Pradhumna Pancholi (Prad)
        </a>
      </p>
    </>
  );
}
