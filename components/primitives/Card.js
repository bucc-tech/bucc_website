import Link from 'next/link';
import React from 'react';

const Card = ({ post }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden w-full shadow-lg bg-white smallTablet:mx-auto flex flex-col justify-between"
      style={{ maxWidth: '300px', height: '100%' }}
    >
      <div>
        <img
          className="w-full"
          src={post.image}
          alt={post.title}
        />
        <div className="px-6 py-4 phone:px-3">
          <div className="font-bold text-xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">{post.extract}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-6 phone:px-3">
        <div className="text-sm">
          <p className="text-gray-600">{post.date}</p>
        </div>
        <div className="text-sm">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-gray-900 font-semibold leading-none cursor-pointer">Read more</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
