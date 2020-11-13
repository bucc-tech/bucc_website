import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const teams = () => {
  const cardData = [
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946621/bucc/excos/IMG_3756_nk6zww.jpg',
      name: 'Phillip Oluwaseun',
      alt: 'president',
      position: 'President',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946616/bucc/excos/IMG_7477_s9mfoh.jpg',
      name: 'Nwafor Kosi',
      alt: 'vp admin',
      position: 'Vice President Administrative',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604950118/bucc/excos/Image-1_iway6u.jpg',
      name: 'Kosoko Kofoworola',
      alt: 'vp acad',
      position: 'Vice President Academics',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946597/bucc/excos/IMG-20200128-WA0010_fqtnan.jpg',
      name: 'Adedeji Kasopefoluwa',
      alt: 'PRO',
      position: 'Public Relation Officer',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1605201749/bucc/excos/image0_3_whhcju.jpg',
      name: 'Osineye Olawale',
      alt: 'secretary',
      position: 'General Secretary',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946606/bucc/excos/IMG-0309_uvhte1.jpg',
      name: 'Adegbesin Omolara Zainab',
      alt: 'female sport director',
      position: 'Female Sport Director',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946599/bucc/excos/IMG-20200724-WA0166_al3v9w.jpg',
      name: 'Madukoma Blessed',
      alt: 'male sport director',
      position: 'Male Sport Director',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946731/bucc/excos/IMG_0117_ri3nra.jpg',
      name: 'Ajileye Jemimah',
      alt: 'provost',
      position: 'Provost',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946720/bucc/excos/image0_gbg1lo.jpg',
      name: 'Omifare Olaoluwa',
      alt: 'welfare director',
      position: 'Welfare Director',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946620/bucc/excos/IMG_2492_uzw4md.jpg',
      name: 'Fafi Anita',
      alt: 'tresurer',
      position: 'Tresurer',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604951326/bucc/excos/image0_1_hfne6w.jpg',
      name: 'Chikwelugo Chioma Hilary',
      alt: 'socail director',
      position: 'Social Director',
    },
    {
      img:
        'https://res.cloudinary.com/davak/image/upload/v1604946728/bucc/excos/image1_g4ffbk.jpg',
      name: 'Idumu Deborah',
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
        <div className="container mx-auto grid grid-rows-4 grid-flow-col gap-4 gap-y-12 sm:auto-cols-fr">
          {cardData.map((info, index) => {
            return (
              <div
                key={index}
                className="rounded-md overflow-hidden shadow-lg bg-white"
                style={{ width: '337px', height: '380px' }}
              >
                <img
                  className="w-full"
                  src={info.img}
                  alt={info.alt}
                  style={{ height: '300px' }}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-base mb-2">{info.name}</div>
                  <span className="text-gray-700 text-base">
                    {info.position}
                  </span>
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
