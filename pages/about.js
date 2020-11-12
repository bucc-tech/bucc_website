import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section
          style={{
            background:
              "url('https://res.cloudinary.com/davak/image/upload/v1604091182/bucc/Group_90_zb1ziq.png')",
          }}
          className="w-full h-64"
        >
          <div
            className="container mx-auto h-24"
            style={{ lineHeight: '200px', whiteSpace: 'nowrap' }}
          >
            <h1 className="text-white text-3xl font-bold">About Us</h1>
          </div>
        </section>
        <div className="container mx-auto my-20" style={{ width: '1160px' }}>
          <p className="font-medium text-base text-justify tracking-wide text-gray-700 leading-8">
            The Babcock University Computer Club is a student chapter of the
            University's Computing and Engineering Sciences Department.
            <br /> The mission of this club is to make possible the needs and
            interests of the computer science and engineering students as well
            as anybody with an interest in software development.
            <br /> It is not necessary for any club member to be a student of
            the department nor is knowledge of any programming language
            required.
            <br /> The club has sponsored events such as exhibitions,
            programming competitions, hackathons, guest speakers, tech talks,
            and trips for teams to Silicon Valley.
            <br /> If you have a general interest in computing and want to join,
            feel free to contact the club at the BUCC secretariat and we'll
            include your name on our mailing list so you can stay informed of
            upcoming events.
          </p>
        </div>
        <section
          className="flex bg-center bg-no-repeat bg-cover"
          style={{
            height: '585px',
            background:
              "url('https://res.cloudinary.com/davak/image/upload/v1603801943/bucc/BG_rkwfgj.png')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex-col m-auto text-center">
            <h1 className="font-extrabold text-4xl text-white mb-6">
              Become a BUCC member?
            </h1>
            <p className="font-bold text-white mb-8" style={{ width: '462px' }}>
              It is not necessary for any club member to be a student of the
              department nor is knowledge of any programming language required.
            </p>
            <Link href="mailto:bucompclub@gmail.com" target="_blank">
              <button className="bg-blue-500 uppercase text-white h-16 w-48 rounded-md cursor-pointer">
                Get in Contact
              </button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default about;
