import React from 'react';
import Link from 'next/link'

const Card = () => {
  return (
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg bg-white"
      style={{ width: '300px', height: 'auto' }}
    >
      <img
        class="w-full"
        src="https://res.cloudinary.com/davak/image/upload/v1604677821/bucc/image_2_t72s2o.png"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="flex flex-row justify-between p-6">
        <div class="text-sm">
          <p class="text-gray-600">Aug 18th 2020</p>
        </div>
        <div className="text-sm">
          <Link href="/">
            <p className="text-gray-900 font-semibold leading-none cursor-pointer">
              Read more
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
