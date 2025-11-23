import {
  LockClosedIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  SwatchIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
export default function Home() {
  const featuresList = [
    {
      icon: ShieldCheckIcon,
      title: "Auth that just works",
      description:
        "Sign-up, Sign-in, Magic Links, Password Reset and Social Logins - all ready to go. And here's more, no vendor lock-in and you own the data",
    },
    {
      icon: LockClosedIcon,
      title: "Avoid Vendor Prison",
      description:
        "Supabase today, Neon tomorrow, Railway next week — Switching to the data platform that meet your needs is super easy",
    },
    {
      icon: RocketLaunchIcon,
      title: "Prototype in Hours",
      description:
        "Stop copy-pasting boilerplate. Apex Kit handles the boring and repetive stuff for yur. So, you can focus on your core feature and product-market fit.",
    },
    {
      icon: CodeBracketIcon,
      title: "Type-Safe End-to-End ",
      description:
        "Drizzle + TypeScript = no more “any” surprises. Catch bugs before they catch your users (or your sleep).",
    },
    {
      icon: SwatchIcon,
      title: "Themes Out of the Box",
      description:
        "Light, dark, cyberpunk, cupcake — your MVP doesn't need to look bland or unappealing. Extend to your own design language when your team is ready",
    },
    {
      icon: SparklesIcon,
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
      <main className="flex-col">
        {/*Hero Section*/}
        <section className="hero min-h-[70vh] bg-base-200">
          <div className="hero-content grid lg:grid-cols-2 gap-8 items-center justify-items-center">
            {/*Left Content*/}
            <div className="max-w-md ">
              <h1 className="text-5xl font-bold">Start Your Next Venture</h1>
              <p className="py-6">
                Full auth, Drizzle ORM, built-in (extendable) themes, zero
                vendor lock-in — all battle-tested and ready on day one.
                <br />
                No config hell. No surprise invoices.
              </p>
              <button className="btn btn-primary btn-lg">Read the docs</button>
              <button className="btn btn-accent btn-lg ml-5">
                Switch Theme
              </button>
            </div>
            {/*Right Content*/}
            <div className="hidden lg:block">
              <div className="mockup-code bg-neutral text-neutral-content rounded-box shadow-2xl overflow-x-auto">
                <pre data-prefix="$" className="text-info">
                  <code>
                    git clone
                    https://github.com/PradhumnaPancholi/the-next-startup
                  </code>
                </pre>
                <pre data-prefix="$" className="text-info">
                  cd the-next-startup
                </pre>
                <pre data-prefix="$" className="text-info">
                  pnpm install
                </pre>
                <pre data-prefix="$" className="text-success">
                  <code>Start Building!!!</code>
                </pre>
              </div>
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
                    <p className="text-base-content/80">
                      {feature.description}
                    </p>
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
      </main>
    </>
  );
}
