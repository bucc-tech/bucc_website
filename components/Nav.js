import Link from 'next/link';
import React from 'react';
import Navbrand from '../components/Navbrand';
const Nav = () => {
  return (
    <nav className="flex justify-between bg-white shadow h-24 p-3 w-screen">
      <div className="flex ml-12">
        <Navbrand />
        {/* <span className="font-semibold text-xl tracking-tight">BUCC</span> */}
      </div>
      <div className="flex text-gray-600 p-6 smallTablet:hidden">
        <Link href="/">
          <a className="font-normal mr-8 text-base hover:text-blue-500 hover:font-bold">Home</a>
        </Link>
        <a href="#" className="font-normal mr-8 text-base hover:text-blue-500 hover:font-bold">
          Departments
        </a>
        <div className="dropdown mr-8 flex relative">
          <Link href="/teams">
            <a className="flex items-center font-normal text-base hover:text-blue-500 hover:font-bold">
              <span>Teams</span>
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 11L0.937822 0.5L13.0622 0.5L7 11Z" fill="#2D9CDB" />
              </svg>
            </a>
          </Link>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-6">
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                One
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
          </ul>
        </div>
        <Link href="/about">
          <a className="font-normal mr-8 text-base hover:text-blue-500 hover:font-bold">About us</a>
        </Link>
        <Link href="/event">
          <a className="font-normal mr-8 text-base hover:text-blue-500 hover:font-bold">Events</a>
        </Link>
        <Link href="/blog">
          <a className="font-normal mr-8 text-base hover:text-blue-500 hover:font-bold">Blog</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
