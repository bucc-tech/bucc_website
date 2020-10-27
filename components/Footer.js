import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <section className="flex flex-wrap content-center justify-center justify-evenly my-16">
        {/* ONE */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="font-semibold text-lg text-blue-800">Quick Links</h1>
          </div>
          <div className="flex flex-col font-normal text-base text-gray-700 ">
            <Link href="/">
              <span className="mb-3">Home</span>
            </Link>
            <Link href="/">
              <span className="mb-3">Info Board</span>
            </Link>
            <Link href="/">
              <span className="mb-3">Department</span>
            </Link>
            <Link href="/">
              <span className="mb-3">Event</span>
            </Link>
          </div>
        </div>
        {/* TWO */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="font-semibold text-lg">About</h1>
          </div>
          <div className="flex flex-col font-normal text-base text-gray-700 ">
            <Link href="/">
              <span className="mb-3">Meet the Team</span>
            </Link>
            <Link href="/">
              <span className="mb-3">Our Story</span>
            </Link>
          </div>
        </div>
        {/* THREE */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="font-semibold text-lg">Socials</h1>
          </div>
          <div className="flex font-normal text-base text-gray-700 ">
            <Link href="/">
              <img src="" alt="fb" />
            </Link>
            <Link href="/">
              <img src="" alt="ig" />
            </Link>
            <Link href="/">
              <img src="" alt="li" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="font-semibold text-lg">Subscribe to News Letter</h1>
          </div>
          <div className="flex flex-col font-normal text-base text-gray-700 ">
            <div className="mb-3 max-w-md">
              <span>
                Subscribe to our newsletter to get exciting and upto date news
                about our club
              </span>
            </div>
            {/* form */}
            <form class="w-full max-w-md">
              <div class="flex items-center bg-white rounded-md py-2 pr-1">
                <input
                  class="appearance-none bg-white border-none w-full text-gray-700 font-bold mr-3 py-2 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="✉ Enter your email"
                />
                <button
                  class="flex-shrink-0 bg-blue-500 text-base text-white h-16 w-40 py-2 px-3 rounded"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
