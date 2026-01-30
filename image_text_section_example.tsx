import React from 'react';

export default function ImageTextSection() {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section - Left side */}
          <div className="lg:w-1/2 w-full">
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure className="px-10 pt-10">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Feature demonstration"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">Visual Representation</h2>
                <p className="text-base-content/80">This image demonstrates the feature in action</p>
              </div>
            </div>
          </div>

          {/* Text Section - Right side */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Feature Title</h2>
              <p className="text-lg text-base-content/80 leading-relaxed">
                This is where you describe your feature in detail. Explain what it does,
                how it benefits users, and why it's important. You can use multiple
                paragraphs to provide comprehensive information.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base-content">Key benefit or feature point</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base-content">Another important aspect</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base-content">Final compelling reason</p>
                </div>
              </div>
              <button className="btn btn-primary btn-lg mt-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}