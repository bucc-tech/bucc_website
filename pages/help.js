import React from 'react';
import Head from 'next/head';
import MainLayout from '../components/Layout';

const help = () => {
  return (
    <>
      <Head>
        <title>Help Desk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe9ZSnAOzyNAeW1Z8uv0B2reqVPf9hPF9kdtZAq7AbIw_H05w/viewform?embedded=true"
            width="640"
            height="1275"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </MainLayout>
    </>
  );
};

export default help;
