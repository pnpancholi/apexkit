import Link from 'next/link'
import type { User } from '@/types/auth'
import { FaBarsStaggered } from 'react-icons/fa6'

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

export default function Navbar({ user }: { user: User | null }) {
  const navLinkClasses =
    'capitalize relative after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:translate-x-0'

  return (
    <nav className="navbar fixed top-0 w-full shadow-md px-6 lg:px-40 bg-base-200 z-20 border-b-text">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
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
          <button type="button" tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBarsStaggered />
          </button>
          <ul className="menu menu-compact bg-base-200 dropdown-content w-screen fixed z-50 space-y-6 p-4 shadow inset-x-0 rounded-none items-center">
            {navLinks.map((navItem) => (
              <li key={navItem.name} className={navLinkClasses}>
                <Link href={navItem.url}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {user ? (
          <Link href="/profile">
            <div className="bg-primary text-primary-content rounded-full w-10 h-10 flex items-center justify-center">
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
  )
}
