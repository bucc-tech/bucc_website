import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ItemsCarousel from 'react-items-carousel';
import Layout from '../components/Layout';
import Card from '../components/primitives/Card';

const Button = ({ children }) => {
  return (
    <button
      className="bg-white font-bold"
      style={{
        width: '2.6em',
        lineHeight: '2.6em',
        color: 'black',
        borderRadius: '1.8em',
      }}
    >
      {children}
    </button>
  );
};

const blog = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          style={{
            background:
              "url('https://res.cloudinary.com/davak/image/upload/v1604251188/bucc/Mask_Group_iumxhz.png')",
          }}
          className="w-full h-64"
        >
          <div
            className="container mx-auto"
            style={{ lineHeight: '200px', whiteSpace: 'nowrap' }}
          >
            <h1 className="text-white text-3xl font-bold">Blog</h1>
            {/* <p className="text-white font-normal">All tickets availaible on Eventbrite</p> */}
          </div>
        </section>
        <section>
          <div className="container mx-auto mt-24">
            <div class="max-w-sm w-full lg:max-w-full lg:flex mb-10">
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-12 flex flex-col justify-between leading-normal ">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    long established
                  </div>
                  <p class="text-gray-700 text-base">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that....
                  </p>
                </div>
                <div class="flex flex-row justify-between">
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
              {/* image */}
              <div
                class="lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ height: '250px', width: '445px' }}
                title="Woman holding a mug"
              >
                <img src="https://tailwindcss.com/img/card-left.jpg" alt="" />
              </div>
            </div>

            {/* CARDS  */}
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={3.5}
              gutter={1}
              leftChevron={<Button>{'<'}</Button>}
              rightChevron={<Button>{'>'}</Button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ItemsCarousel>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default blog;
