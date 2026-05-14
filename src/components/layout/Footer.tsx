import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Link from 'next/link'

const footerLinks = {
  services: [
    { label: 'Branding', url: '/branding' },
    { label: 'Design', url: '/design' },
    { label: 'Marketing', url: '/marketing' },
    { label: 'Advertisement', url: '/advertisement' },
  ],
  company: [
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Jobs', url: '/jobs' },
    { label: 'Press', url: '/press' },
  ],
  legal: [
    { label: 'Terms', url: '/terms' },
    { label: 'Privacy', url: '/privacy' },
    { label: 'Cookies', url: '/cookies' },
  ],
}
export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content px-4 py-10 md:px-20">
      {Object.entries(footerLinks).map(([section, items]) => (
        <nav key={section}>
          <h6 className="footer-title">{section}</h6>
          {items.map((item) => (
            <Link key={item.label} href={item.url}>
              {item.label}
            </Link>
          ))}
        </nav>
      ))}
      <form className="ml-auto">
        <h6 className="footer-title">Newsletter</h6>
        <label htmlFor="email" className="mb-1">
          Enter your email address
        </label>
        <div className="join">
          <Input type="email" placeholder="username@site.com" className="join-item" name="email" />
          <Button type="submit" color="primary" className="join-item">
            Subscribe
          </Button>
        </div>
      </form>
    </footer>
  )
}
