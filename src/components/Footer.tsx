import type React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer p-4 sm:footer-horizontal bg-base-200 text-base-content py-10 px-40 mt-auto">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a href="/branding" className="link link-hover">
          Branding
        </a>
        <a href="/design" className="link link-hover">
          Design
        </a>
        <a href="/marketing" className="link link-hover">
          Marketing
        </a>
        <a href="/advertisement" className="link link-hover">
          Advertisement
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a href="/about" className="link link-hover">
          About us
        </a>
        <a href="/contact" className="link link-hover">
          Contact
        </a>
        <a href="/jobs" className="link link-hover">
          Jobs
        </a>
        <a href="/press" className="link link-hover">
          Press kit
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a href="/terms" className="link link-hover">
          Terms of use
        </a>
        <a href="/privacy" className="link link-hover">
          Privacy policy
        </a>
        <a href="/cookies" className="link link-hover">
          Cookie policy
        </a>
      </nav>
      <form className="ml-auto">
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label htmlFor="email">Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button type="button" className="btn btn-primary join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  )
}

export default Footer
