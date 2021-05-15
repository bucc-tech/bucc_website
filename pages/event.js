import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const event = ({ events }) => {
  return (
    <>
      <Head>
        <title>Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/davak/image/upload/v1604251188/bucc/Mask_Group_iumxhz.png')",
          }}
          className="w-full h-64 bg-no-repeat bg-cover bg-left"
        >
          <div
            className="container mx-auto"
            style={{ lineHeight: '200px', whiteSpace: 'nowrap' }}
          >
            <h1 className="text-white text-3xl font-bold ml-4">Events</h1>
            {/* <p className="text-white font-normal">All tickets availaible on Eventbrite</p> */}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center my-24">
          {events?.map((event, index) => {
            return (
              <div
                key={event.title + index}
                className={`w-full max-w-4xl flex ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                } smallTablet:flex-wrap smallTablet:flex-row smallTablet:mb-12`}
              >
                <div
                  className="w-1/2 smallTablet:w-full"
                  style={{
                    minWidth: '300px',
                  }}
                >
                  <span
                    className="absolute"
                    style={{
                      background: 'rgba(37, 138, 255, 0.9)',
                      padding: '20px',
                    }}
                  >
                    {index + 1}
                  </span>
                  <img
                    src={event.image}
                    alt=""
                    className="w-full h-full smallTablet:h-auto"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-between p-16 smallTablet:px-4 smallTablet:w-full phone:py-16">
                  <div className="">
                    <h1 className="text-lg font-bold mb-4">{event.title}</h1>
                    <p className="text-sm font-normal text-gray-700 smallTablet:mb-10">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex flex-row justify-evenly flex-wrap phone:justify-start">
                    <Link href={event.link}>
                      <a target="_blank" rel="noopener noreferrer">
                        <button
                          className="border rounded w-40 h-12 mt-4 cursor-pointer"
                          style={{
                            border: '3px solid #258AFF !important',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          Join us
                        </button>
                      </a>
                    </Link>
                    <button
                      className="w-40 h-12 mt-4 bg-transparent"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>Read more</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section
          className="flex bg-center bg-no-repeat bg-cover w-full px-4"
          style={{
            minHeight: '585px',
            background:
              "url('https://res.cloudinary.com/davak/image/upload/v1603801943/bucc/BG_rkwfgj.png')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex flex-col m-auto text-center items-center w-full">
            <h1 className="font-extrabold text-6xl text-white mb-6 max-w-xl">
              Become a BUCC member?
            </h1>
            <p className="font-bold text-white mb-8 max-w-md">
              It is not necessary for any club member to be a student of the
              department nor is knowledge of any programming language required.
            </p>
            <button className="bg-blue-500 uppercase text-white h-16 w-48 rounded-md">
              Get in Contact
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const events = await require('../data/events.json');

  return {
    props: {
      events,
    }, // will be passed to the page component as props
  };
}

export default event;
