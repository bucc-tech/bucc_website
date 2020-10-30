import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const teams = () => {
  const cardData = [
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087114/bucc/Rectangle_20_eg1bd6.png',
      name: 'Philip Seun',
      alt: 'president',
      position: 'President',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087119/bucc/Rectangle_21_hykpu2.png',
      name: 'Nwafor Kosi',
      alt: 'vp admin',
      position: 'Vice President Administrative',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087125/bucc/Rectangle_22_lfhnmo.png',
      name: 'Kosoko Kofoworola',
      alt: 'vp acad',
      position: 'Vice President Academics',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087113/bucc/Rectangle_20-1_byrydq.png',
      name: 'Kasope',
      alt: 'PRO',
      position: 'Public Relation Officer',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087116/bucc/Rectangle_21-1_bnot5g.png',
      name: 'Wale',
      alt: 'secretary',
      position: 'General Secretary',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087119/bucc/Rectangle_22-1_fpgvrb.png',
      name: 'Adegbesin Omolara Zainab',
      alt: 'female sport director',
      position: 'Female Sport Director',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087114/bucc/Rectangle_20-3_yzm4n9.png',
      name: '',
      alt: 'male sport director',
      position: 'Male Sport Director',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087125/bucc/Rectangle_21-3_e9gtzw.png',
      name: '',
      alt: 'provost',
      position: 'Provost',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087121/bucc/Rectangle_22-3_c7mesa.png',
      name: 'Laolu',
      alt: 'welfare director',
      position: 'Welfare Director',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087114/bucc/Rectangle_20-3_yzm4n9.png',
      name: 'Fafi Anita',
      alt: 'tresurer',
      position: 'Tresurer',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087125/bucc/Rectangle_21-3_e9gtzw.png',

      name: 'Chioma',
      alt: 'socail director',
      position: 'Social Director',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604087121/bucc/Rectangle_22-3_c7mesa.png',
      name: '',
      alt: 'chaplain',
      position: 'Chaplain',
    },
  ];
  return (
    <>
      <Head>
        <title>Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          style={{
            background:
              "url('https://res.cloudinary.com/davak/image/upload/v1604085191/bucc/Group_89_tndjci.png')",
          }}
          className="w-full h-64"
        >
          <div
            className="container mx-auto h-24"
            style={{ lineHeight: '200px', whiteSpace: 'nowrap' }}
          >
            <h1 className="text-white text-3xl font-bold">BUCC Executives</h1>
          </div>
        </section>

        <div
          className="container mx-auto h-24 mt-32"
          style={{ whiteSpace: 'nowrap' }}
        >
          <h1 className="text-2xl font-semibold">2020/2021 Executives</h1>
        </div>

        <div class="container mx-auto grid grid-rows-4 grid-flow-col gap-4 gap-y-12">
          {cardData.map((info, index) => {
            return (
              <div
                key={index}
                class="rounded-md overflow-hidden shadow-lg bg-white"
                style={{ width: '337px', height: '380px' }}
              >
                <img
                  class="w-full"
                  src={info.img}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-base mb-2">{info.name}</div>
                  <span class="text-gray-700 text-base">{info.position}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default teams;

// height: 100px;
//   line-height: 100px;
//   white-space: nowrap;
