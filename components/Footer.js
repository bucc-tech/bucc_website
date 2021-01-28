import Link from 'next/link';
import React from 'react';
import Ig from './icons/Ig';
import Fb from './icons/Fb';
import Li from './icons/Li';

const Footer = () => {
  return (
    <div className="px-16 phone:px-8">
      <section className="grid grid-cols-6 mt-6 mb-16">
        {/* ONE */}
        <div className="col-span-2 mt-10 phone:col-span-3">
          <div className="mb-6">
            <h1 className="font-semibold text-lg text-blue-800">Quick Links</h1>
          </div>
          <div className="flex flex-col font-normal text-base text-gray-700 cursor-pointer ">
            <Link href="/">
              <span className="mb-3">Home</span>
            </Link>
            <Link href="/">
              <span className="mb-3">Info Board</span>
            </Link>
            <Link href="/departments">
              <span className="mb-3">Department</span>
            </Link>
            <Link href="/event">
              <span className="mb-3">Event</span>
            </Link>
          </div>
        </div>
        {/* TWO */}
        <div className="col-span-1 mt-10 tablet:col-span-2 phone:col-span-3 cursor-pointer">
          <div className="mb-6">
            <h1 className="font-semibold text-lg text-blue-800">About</h1>
          </div>
          <div className="flex flex-col font-normal text-base text-gray-700 ">
            <Link href="/teams">
              <span className="mb-3">Meet the Team</span>
            </Link>
            <Link href="/about">
              <span className="mb-3">Our Story</span>
            </Link>
          </div>
        </div>
        {/* THREE */}
        <div className="col-span-1 mt-10 tablet:col-span-2 phone:col-span-3">
          <div className="mb-6">
            <h1 className="font-semibold text-lg text-blue-800">Socials</h1>
          </div>
          <div className="flex font-normal text-base text-gray-700 cursor-pointer">
            <Link href="/">
              <div className="mr-1">
                <Fb />
              </div>
            </Link>
            <Link href="https://www.instagram.com/bu_computerclub/">
              <div className="mr-1">
                <Ig />
              </div>
            </Link>
            <Link href="https://wwww.linkedin.com/company/bucomputerclub/">
              <div className="mr-1">
                <Li />
              </div>
            </Link>
            <Link href="https://www.youtube.com/channel/UCwmM4cQ4_acxSYfMm8BIn6w">
              <div className="mr-1">
                <img src="/images/yt.png" style={{ width: '100px' }} />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-2 mt-10 tablet:col-span-4 smallTablet:col-span-6">
          <div className="mb-6">
            <h1 className="font-semibold text-lg text-blue-800">
              Subscribe to News Letter
            </h1>
          </div>
          <div className="flex flex-col font-normal text-base text-gray-700 w-full">
            <div className="mb-3 w-full">
              <span>
                Subscribe to our newsletter to get exciting and upto date news
                about our club
              </span>
            </div>
            {/* form */}
            <form className="w-full">
              <div className="flex items-center bg-white rounded-md py-2 pr-1 phone:flex-wrap phone:p-2">
                <input
                  className="appearance-none bg-white border-none w-full text-gray-700 font-bold mr-3 py-2 px-2 leading-tight focus:outline-none phone:h-20"
                  type="text"
                  placeholder="✉ Enter your email"
                />
                <button
                  className="flex-shrink-0 bg-blue-500 text-base text-white h-16 w-40 py-2 px-3 rounded phone:w-full"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
