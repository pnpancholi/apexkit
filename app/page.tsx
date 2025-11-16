import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        {/*hero section*/}
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
              Out of the box, you get
            </p>
            {/*grid to showcase features*/}
          </div>
        </section>
      </main>
    </>
  );
}
