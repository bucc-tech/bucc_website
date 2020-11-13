import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="my-16">
          <div className="container mx-auto w-1/2 text-center">
            <div className="text-center text-5xl">
              <h1>Get in Touch</h1>
            </div>
            <div className="flex flex-col">
              <form action="">
                <input
                  className="w-3/5 h-16 rounded border-gray-500 text-xl font-light mb-3"
                  type="text"
                  placeholder="Work email"
                />
                <input
                  className="w-3/5 h-16 rounded border-gray-500 text-xl font-light mb-3"
                  type="text"
                  placeholder="What's this about?"
                />
                <textarea
                  name="Go ahead, we're listening"
                  id=""
                  className="w-3/5 h-40 rounded border-gray-500 text-xl font-light mb-3"
                  placeholder="Go ahead, we're listening"
                ></textarea>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default contact;
