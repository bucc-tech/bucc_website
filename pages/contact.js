import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const contact = () => {
  const [formData, setFormData] = useState({});
  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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
                  name="email"
                  className="w-3/5 h-16 rounded border-gray-500 text-xl font-light mb-3"
                  type="email"
                  placeholder="Work email"
                  onChange={updateInput}
                  value={formData.email || ''}
                />
                <input
                  name="topic"
                  className="w-3/5 h-16 rounded border-gray-500 text-xl font-light mb-3"
                  type="text"
                  placeholder="What's this about?"
                  onChange={updateInput}
                  value={formData.topic || ''}
                />
                <textarea
                  name="message"
                  id=""
                  className="w-3/5 h-40 rounded border-gray-500 text-xl font-light mb-3"
                  placeholder="Go ahead, we're listening"
                  onChange={updateInput}
                  value={formData.message || ''}
                ></textarea>
                <div>
                  <button className="bg-blue-500 font-semibold text-white h-16 w-48 rounded-md cursor-pointer hover:bg-blue-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default contact;
