import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import Dot from '../svg/Dot';
import Dot2 from '../svg/Dot2';
import Circle from '../svg/Circle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="flex container mx-auto pt-32">
        <div className="flex-1">
          <h1 className="font-bold text-7xl leading-none">
            Babcock University Computer Club
          </h1>
          <p className="font-semibold text-lg leading-7 w-96">
            a student chapter of the University's Computing and Engineering
            Sciences Department.
          </p>
          <button className="bg-blue-500 text-white h-16 w-48 rounded-md">
            Get in Contact
          </button>
        </div>
        <div className="flex justify-center flex-1">
          <div>
            <div className="one">
              <img
                className="inline relative z-20"
                src="https://res.cloudinary.com/davak/image/upload/v1603624496/bucc/Rectangle_ya9f85.png"
                alt=""
              />
              <div className="inline -ml-16 relative z-10">
                <Circle />
              </div>
              <div className="rounded shadow-lg bg-white w-56 text-left -mt-40 absolute z-50 ml-40">
                <div className="p-4">
                  <h1 className="font-bold text-xl">Upcominig Event</h1>
                  <p className="font-black text-sm text-gray-600 mt-1">
                    11:15am, Nov 10, Sunday 2020
                  </p>
                  <h4 className="font-black text-base text-gray-600 mt-5">
                    Theme
                  </h4>
                  <p className="font-semibold text-base text-blue-900">
                    Becoming the next tech CEO
                  </p>
                </div>
                <button className="w-32 h-8 bg-orange-400"></button>
                <button className="w-24 h-8 bg-red-500"></button>
              </div>
            </div>

            <div className="two flex justify-between">
              <div className="inline relative z-30 ml-32 -mt-12">
                <Dot />
              </div>
              <img
                className="inline relative z-40 -mt-48 ml-8"
                src="https://res.cloudinary.com/davak/image/upload/v1603624489/bucc/Rectangle_Copy_3_kb0dgu.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-10">
        <div className="flex uppercase font-bold text-3xl">
          <h1 className="">collab</h1>
          <span
            className="text-white h-10 bg-blue-600 rounded-md pl-2 pr-2"
            style={{
              clipPath: 'polygon(0px 15%, 100% 0%, 100% 100%, 0px 90%)',
            }}
          >
            orators
          </span>
        </div>
      </div>

      <div className="flex justify-center justify-around mt-12 mb-8">
        <div className="">
          <img
            src="https://res.cloudinary.com/davak/image/upload/v1603655479/bucc/quales_go0bhh.png"
            alt="quales_consulting"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/davak/image/upload/v1603655496/bucc/busa_kg2jhg.png"
            alt="busa"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/davak/image/upload/v1603655504/bucc/swap_mllhz6.png"
            alt="swap"
          />
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/davak/image/upload/v1603655516/bucc/stem_ch0dqm.png"
            alt="stem"
          />
        </div>
      </div>

      <div className="flex mt-32">
        <div className="flex-1 mr-10">
          <div
            className="dotbackground flex justify-end"
            style={{
              background:
                "url('https://res.cloudinary.com/davak/image/upload/v1603711357/bucc/bdot_qm4x9o.svg')",
            }}
          >
            <img
              className="inline mt-24"
              src="https://res.cloudinary.com/davak/image/upload/v1603662332/bucc/zachary-nelson-98Elr-LIvD8-unsplash_1_ldoubz.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex uppercase font-bold text-3xl mt-32 ml-12">
            <h1 className="">about</h1>
            <span
              className="text-white h-10 bg-blue-600 rounded-md pl-2 pr-2"
              style={{
                clipPath: 'polygon(0px 15%, 100% 0%, 100% 100%, 0px 90%)',
              }}
            >
              us
            </span>
          </div>
          <div className="p-4 ml-8" style={{ width: '485px' }}>
            <p className="font-medium text-base text-justify tracking-wide text-gray-700 leading-8">
              The Babcock University Computer Club is a student chapter of the
              University's Computing and Engineering Sciences Department.
              <br /> The mission of this club is to make possible the needs and
              interests of the computer science and engineering students as well
              as anybody with an interest in software development.
              <br /> It is not necessary for any club member to be a student of
              the department nor is knowledge of any programming language
              required. <br /> The club has sponsored events such as
              exhibitions, programming competitions, hackathons, guest speakers,
              tech talks, and trips for teams to Silicon Valley. <br /> If you
              have a general interest in computing and want to join, feel free
              to contact the club at the BUCC secretariat and we'll include your
              name on our mailing list so you can stay informed of upcoming
              events.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
