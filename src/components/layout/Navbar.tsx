import Link from 'next/link'
import { FaBarsStaggered } from 'react-icons/fa6'
import type { User } from '@/types/auth'

const navLinks = [
  {
    name: 'blog',
    url: '/blog',
  },
  {
    name: 'about',
    url: '/about',
  },
  {
    name: 'contact',
    url: '/contact',
  },
]

const navLinkClasses =
  'relative capitalize after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100'

interface NavbarProps {
  user: User | null
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <nav className="navbar bg-base-200 px-6 shadow-md border-b border-base-300 md:px-40">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            ApexKit
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {!user &&
              navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className={navLinkClasses}>
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown">
            <button type="button" className="btn btn-ghost lg:hidden" aria-label="Toggle navigation menu">
              <FaBarsStaggered aria-hidden="true" />
            </button>
            <ul className="menu menu-sm dropdown-content fixed inset-x-0 top-16 z-50 items-center bg-base-200 p-4 shadow-lg lg:hidden">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className={navLinkClasses}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {user ? (
            <Link href="/profile" aria-label="Profile" className="avatar avatar-placeholder">
              <div className="w-10 rounded-full bg-primary text-primary-content">
                <span className="text-sm">{user.name?.charAt(0).toUpperCase()}</span>
              </div>
            </Link>
          ) : (
            <Link href="/sign-in" className="btn btn-primary rounded-none">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
