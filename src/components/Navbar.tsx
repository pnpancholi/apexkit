import Link from "next/link";
import React from "react";
import type { User } from "@/types/auth"

const Navbar: React.FC<{ user: User | null }> = async ({ user }) => {
  const navLinks = [
    {
      name: "blog",
      url: "/blog",
    },
    {
      name: "about",
      url: "/about",
    },
    {
      name: "contact",
      url: "/contact",
    },
  ];

  console.log(user)

  return (
    <div className="navbar sticky shadow-md px-4 lg:px-40">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Apex Kit
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          {!user &&

            navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className=" capitalize relative after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:translate-x-0"
                >
                  {link.name}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content w-screen fixed z-50 mt-3 p-4 shadow bg-base-100 inset-x-0 rounded-none items-center"
          >
            <li>
              <a className="text-lg font-medium">Blog</a>
            </li>
            <li>
              <a className="text-lg font-medium">About</a>
            </li>
            <li>
              <a className="text-lg font-medium">Contact</a>
            </li>
          </ul>
        </div>
        {user ?
          <Link href="/profile">
            <div className="avatar placeholder">
              <div className="flex items-center justify-center bg-primary text-primary-content rounded-full w-10">
                <span className="text-sm">
                  {user.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </Link>
          :
          <Link href="/sign-in" className="btn btn-primary">Sign In</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
