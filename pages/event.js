import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const event = () => {
  return (
    <>
      <Head>
        <title>Events</title>
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
            <h1 className="text-white text-3xl font-bold">Events</h1>
            {/* <p className="text-white font-normal">All tickets availaible on Eventbrite</p> */}
          </div>
        </section>

        <section>
          <div className="container mx-auto flex flex-row flex-wrap mt-24">
            <div>
              <span
                className="absolute"
                style={{
                  background: 'rgba(37, 138, 255, 0.9)',
                  padding: '20px',
                }}
              >
                26
              </span>
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1604254634/bucc/sydney-rae-jk6Kt2jMy4w-unsplash_jyieec.png"
                alt=""
                style={{ width: '500px' }}
              />
            </div>
            <div className="flex flex-col justify-between p-16">
              <div className="">
                <h1 className="text-lg font-bold mb-4">hello world</h1>
                <p className="text-sm font-normal text-gray-700">short text</p>
              </div>

              <div className="flex flex-row justify-evenly">
                <button className="border border-blue-500 rounded w-40 h-12">
                  Join us
                </button>
                <button className="w-40 h-12">Read more</button>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-row flex-wrap">
            <div className="flex flex-col justify-between p-16">
              <div className="">
                <h1 className="text-lg font-bold mb-4">hello world</h1>
                <p className="text-sm font-normal text-gray-700">short text</p>
              </div>

              <div className="flex flex-row justify-evenly">
                <button className="border border-blue-500 rounded w-40 h-12">
                  Join us
                </button>
                <button className="w-40 h-12">Read more</button>
              </div>
            </div>
            <div style={{ marginLeft: '50px' }}>
              <span
                className="absolute"
                style={{
                  background: 'rgba(37, 138, 255, 0.9)',
                  padding: '20px',
                }}
              >
                26
              </span>
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1604254634/bucc/sydney-rae-jk6Kt2jMy4w-unsplash_jyieec.png"
                alt=""
                style={{ width: '500px' }}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default event;
