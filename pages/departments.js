import Head from 'next/head';
import { useState } from 'react';
import {
  ComputerInformationSystem,
  ComputerScience,
  ComputerTechnology,
  InformationCommunicationTechnology,
  SoftwareEngineering,
  UpsidedownTriangle,
} from '../components/icons';
import Layout from '../components/Layout';

const Departments = ({ departmments }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('cs');

  const cs = departmments.cs.map((p, index) => {
    return <p key={p + index}>{p}</p>;
  });
  const cis = departmments.cis.map((p, index) => {
    return <p key={p + index}>{p}</p>;
  });
  const se = departmments.se.map((p, index) => {
    return <p key={p + index}>{p}</p>;
  });
  const ct = departmments.ct.map((p, index) => {
    return <p key={p + index}>{p}</p>;
  });
  const ict = departmments.ict.map((p, index) => {
    return <p key={p + index}>{p}</p>;
  });
  return (
    <>
      <Head>
        <title>Departments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          style={{
            background:
              "url('https://res.cloudinary.com/davak/image/upload/v1620805094/bucc/dd_qwnyex.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="w-full h-96 bg-no-repeat bg-cover"
        >
          <div
            className="container mx-auto"
            style={{ lineHeight: '200px', whiteSpace: 'nowrap' }}
          >
            <h1 className="text-white text-3xl font-bold ml-4">Departments</h1>
          </div>
        </section>
        <section className="w-full mt-20">
          <div className="container w-full mx-auto grid grid-cols-5">
            <div
              className={`col-span-1 cursor-pointer py-12 px-16 flex flex-col items-center w-full text-center justify-between relative ${
                selectedDepartment === 'cs'
                  ? 'text-white bg-primaryColor'
                  : 'text-primaryColor bg-white'
              }`}
              onClick={() => setSelectedDepartment('cs')}
            >
              <ComputerScience className="fill-current" />
              <p
                className={`${
                  selectedDepartment === 'cs' && 'text-white'
                } text-black`}
              >
                Computer Science
              </p>
              <UpsidedownTriangle
                className={`absolute bottom-0 mx-auto -mb-4 ${
                  selectedDepartment === 'cs' ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            <div
              className={`col-span-1 cursor-pointer py-12 px-16 flex flex-col items-center w-full text-center justify-between relative ${
                selectedDepartment === 'cis'
                  ? 'text-white bg-primaryColor'
                  : 'text-primaryColor bg-white'
              }`}
              onClick={() => setSelectedDepartment('cis')}
            >
              <ComputerInformationSystem className="fill-current" />
              <p
                className={`${
                  selectedDepartment === 'cis' && 'text-white'
                } text-black`}
              >
                Computer Information System
              </p>
              <UpsidedownTriangle
                className={`absolute bottom-0 mx-auto -mb-4 ${
                  selectedDepartment === 'cis' ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            <div
              className={`col-span-1 cursor-pointer py-12 px-16 flex flex-col items-center w-full text-center justify-between relative ${
                selectedDepartment === 'se'
                  ? 'text-white bg-primaryColor'
                  : 'text-primaryColor bg-white'
              }`}
              onClick={() => setSelectedDepartment('se')}
            >
              <SoftwareEngineering className="fill-current" />
              <p
                className={`${
                  selectedDepartment === 'se' && 'text-white'
                } text-black`}
              >
                Software Engineering
              </p>
              <UpsidedownTriangle
                className={`absolute bottom-0 mx-auto -mb-4 ${
                  selectedDepartment === 'se' ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            <div
              className={`col-span-1 cursor-pointer py-12 px-16 flex flex-col items-center w-full text-center justify-between relative ${
                selectedDepartment === 'ct'
                  ? 'text-white bg-primaryColor'
                  : 'text-primaryColor bg-white'
              }`}
              onClick={() => setSelectedDepartment('ct')}
            >
              <ComputerTechnology className="fill-current" />
              <p
                className={`${
                  selectedDepartment === 'ct' && 'text-white'
                } text-black`}
              >
                Computer Technology
              </p>
              <UpsidedownTriangle
                className={`absolute bottom-0 mx-auto -mb-4 ${
                  selectedDepartment === 'ct' ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            <div
              className={`col-span-1 cursor-pointer py-12 px-16 flex flex-col items-center w-full text-center justify-between relative ${
                selectedDepartment === 'ict'
                  ? 'text-white bg-primaryColor'
                  : 'text-primaryColor bg-white'
              }`}
              onClick={() => setSelectedDepartment('ict')}
            >
              <InformationCommunicationTechnology className="fill-current" />
              <p
                className={`${
                  selectedDepartment === 'ict' && 'text-white'
                } text-black`}
              >
                Information Communication Technology
              </p>
              <UpsidedownTriangle
                className={`absolute bottom-0 mx-auto -mb-4 ${
                  selectedDepartment === 'ict' ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>
        </section>
        <section className="w-full px-4">
          <h1 className="w-full text-center mt-20 font-semibold">
            {selectedDepartment === 'cs'
              ? 'Computer Science'
              : selectedDepartment === 'cis'
              ? 'Computer Information System'
              : selectedDepartment === 'se'
              ? 'Software Engineering'
              : selectedDepartment === 'ct'
              ? 'Computer Technology'
              : selectedDepartment === 'ict' &&
                'Information Communication Technology'}
          </h1>

          <hr className="w-full max-w-5xl mx-auto h-2 bg-primaryColor rounded-tl-full rounded-tr-full mt-16 mb-0" />
          <div className="w-full max-w-5xl mx-auto p-16 bg-white rounded">
            {selectedDepartment === 'cs'
              ? cs
              : selectedDepartment === 'cis'
              ? cis
              : selectedDepartment === 'se'
              ? se
              : selectedDepartment === 'ct'
              ? ct
              : selectedDepartment === 'ict' && ict}
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const departmments = await require('../data/departments.json');

  return {
    props: {
      departmments,
    }, // will be passed to the page component as props
  };
}

export default Departments;
