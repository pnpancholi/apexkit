import { Mail } from 'lucide-react'
export default function Contact() {
  return (
    <section className="min-h-screen bg-base-200 py-18 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Let's Get In Touch</h1>
          <p className="mt-4 text-xl text-base-content/70">We usually reply within a few hours</p>
        </div>
        <div className="card bg-base-200 shadow-2xl">
          <div className="card-body">
            <form className="space-y-8 lebel-column">
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text font-semibold">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-control ">
                <div className="label">
                  <span className="label-text font-semibold">Message</span>
                </div>
                <textarea
                  placeholder="Tell us how we can help..."
                  className="textarea textarea-bordered h-48 resize-none w-full"
                  required
                />
              </div>
              <button type="button" className="btn btn-primary w-full my-10">
                <Mail />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
