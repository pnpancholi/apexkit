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
      title: "Zero Vendor Prison",
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
  return (
    <>
      <main className="flex-grow">
        {/*Hero section*/}
        <div className="hero min-h-[70vh] bg-base-200">
          <div className="hero-content grid lg:grid-cols-2 gap-8 items-center justify-items-center">
            {/*Left Content*/}
            <div className="max-w-md ">
              <h1 className="text-5xl font-bold">
                You Next Startup Idea Starts Here
              </h1>
              <p className="py-6">
                Launch your groundbreaking venture! Build your app from concept
                to market
              </p>
              <button className="btn btn-primary btn-lg">Get Started</button>
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
        </div>
        {/*Featres*/}
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
      </main>
    </>
  );
}
