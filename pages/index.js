import Head from 'next/head';
import Link from 'next/link';
import { GiantQuotes, UpsidedownTriangle } from '../components/icons';
import Layout from '../components/Layout';
// import Nav from '../components/Nav';
import Carousel, { Slide } from '../components/primitives/Carousel';
import Circle from '../svg/Circle';
import Dot from '../svg/Dot';
import Dot3 from '../svg/Dot3';

export default function Home() {
  const carouselData = [
    {
      name: 'Okubanjo Funsho',
      year: '2013',
      quote:
        'It was fun talking with some Babcock students today 💪🏽💪🏽💪🏽 I was able to listen to some of the problems they are scared of and motivated them to seek greatness 🔥🔥🔥 I see the future tech leaders and I see the fire of passion waiting to be ignited 👊🏽👊🏽👊🏽',
    },
    {
      name: 'David Akpughe',
      year: '2020',
      quote: 'It was really awesome tbh. Fantastic place.',
    },
    {
      name: 'Pedro Ogheneochuko',
      year: '2020',
      quote: 'I loved it',
    },
  ].map((quote, index) => {
    return (
      <Slide key={index + quote.name}>
        <div className="flex flex-col items-center h-full pt-16 mb-3">
          <div className="p-16 max-w-2xl h-full bg-primaryColor rounded relative phone:p-8">
            <p className="text-white">{quote.quote}</p>
            <GiantQuotes className="absolute right-0 top-0 -mt-5 mr-5" />
          </div>
          <UpsidedownTriangle />
          <img src="/images/avatar.png" className="rounded h-20 w-20 mt-10" />
          <p className="mt-4">{quote.name}</p>
          <a href="#" className="text-primaryColor">
            {quote.year} Alumnus
          </a>
        </div>
      </Slide>
    );
  });
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="A student chapter of the University's Computing and Engineering Sciences Department."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-full flex flex-col items-center overflow-x-hidden m-0">
          <div className="w-full max-w-6xl flex flex-col items-stretch px-4">
            <div className="flex flex-wrap container pt-32 phone:pt-16">
              <div className="flex-1">
                <h1 className="font-bold text-7xl leading-none mb-6 phone:text-5xl">
                  Babcock University Computer Club
                </h1>
                <p className="font-semibold text-lg leading-7 mb-12 max-w-sm">
                  a student chapter of the University's Computing and
                  Engineering Sciences Department.
                </p>
                <Link href="/contact">
                  <button className="bg-blue-500 text-white h-16 w-48 rounded-md cursor-pointer hover:bg-blue-600">
                    Get in Contact
                  </button>
                </Link>
              </div>
              <div className="flex justify-center flex-1 tablet:mt-20">
                <div>
                  <div className="one">
                    <img
                      className="inline relative z-20 tablet:ml-10 tablet:w-full"
                      src="https://res.cloudinary.com/davak/image/upload/v1603624496/bucc/Rectangle_ya9f85.png"
                      alt=""
                    />
                    <div className="inline -ml-16 relative z-10 tablet:hidden">
                      <Circle />
                    </div>
                    <div className="rounded shadow-lg bg-white w-56 text-left -mt-40 absolute z-50 ml-40 tablet:ml-20">
                      <div className="p-4">
                        <h1 className="font-bold text-xl">Upcominig Event</h1>
                        <p className="font-black text-sm text-gray-600 mt-1">
                          6pm, March 21, Sunday 2021
                        </p>
                        <h4 className="font-black text-base text-gray-600 mt-5">
                          {/* Theme */}
                        </h4>
                        <p className="font-semibold text-base text-blue-900">
                          Virtual Awards Night
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
                      className="inline relative z-40 -mt-64 ml-6 tablet:hidden"
                      src="https://res.cloudinary.com/davak/image/upload/v1603624489/bucc/Rectangle_Copy_3_kb0dgu.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center mt-10 tablet:mt-24">
              <div
                className="flex uppercase font-bold text-2xl"
                style={{ alignItems: 'center' }}
              >
                <h1 className="">collab</h1>
                <h1
                  className="text-white h-12 bg-blue-600 rounded-md pl-2 pr-2 ml-1"
                  style={{
                    clipPath: 'polygon(0px 20%, 100% 0%, 100% 100%, 0px 95%)',
                    borderRadius: '10px',
                  }}
                >
                  orators
                </h1>
              </div>
            </div>
            <div className="flex justify-between mt-12 mb-8 space-x-2 flex-wrap phone:justify-around">
              <div className="mt-3">
                <img
                  src="https://res.cloudinary.com/davak/image/upload/v1603655479/bucc/quales_go0bhh.png"
                  alt="quales_consulting"
                />
              </div>
              <div className="mt-3">
                <img
                  src="https://res.cloudinary.com/davak/image/upload/v1603655496/bucc/busa_kg2jhg.png"
                  alt="busa"
                />
              </div>
              <div className="mt-3">
                <img
                  src="https://res.cloudinary.com/davak/image/upload/v1603655504/bucc/swap_mllhz6.png"
                  alt="swap"
                />
              </div>
              <div className="mt-3">
                <img
                  src="https://res.cloudinary.com/davak/image/upload/v1603655516/bucc/stem_ch0dqm.png"
                  alt="stem"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 justify-between mt-32 space-x-16 tablet:space-x-0">
              <div className="col-span-1 tablet:col-span-2">
                <div
                  className="dotbackground flex justify-end"
                  style={{
                    background:
                      "url('https://res.cloudinary.com/davak/image/upload/v1603711357/bucc/bdot_qm4x9o.svg')",
                  }}
                >
                  <img
                    className="mt-24"
                    src="https://res.cloudinary.com/davak/image/upload/v1605275292/bucc/SI_b2cs2v.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-1 tablet:col-span-2">
                <div
                  className="flex uppercase font-bold text-2xl mt-32 tablet:mt-20"
                  style={{ alignItems: 'center' }}
                >
                  <h1 className="">about</h1>
                  <h1
                    className="text-white h-12 bg-blue-600 rounded-md pl-2 pr-2 ml-1"
                    style={{
                      clipPath: 'polygon(0px 15%, 100% 0%, 100% 100%, 0px 90%)',
                      borderRadius: '10px',
                    }}
                  >
                    us
                  </h1>
                </div>
                <p className="font-medium text-base tracking-wide text-gray-700 leading-8">
                  The Babcock University Computer Club is a student chapter of
                  the University's Computing and Engineering Sciences
                  Department.
                  <br /> The mission of this club is to make possible the needs
                  and interests of the computer science and engineering students
                  as well as anybody with an interest in software development.
                  <br /> It is not necessary for any club member to be a student
                  of the department nor is knowledge of any programming language
                  required. <br /> The club has sponsored events such as
                  exhibitions, programming competitions, hackathons, guest
                  speakers, tech talks, and trips for teams to Silicon Valley.{' '}
                  <br /> If you have a general interest in computing and want to
                  join, feel free to contact the club at the BUCC secretariat
                  and we'll include your name on our mailing list so you can
                  stay informed of upcoming events.
                </p>
              </div>
            </div>
            <div className="w-full mt-16 relative">
              <Carousel>{carouselData}</Carousel>
            </div>
          </div>
          <section className="flex bg-indigo-100 mt-24 w-full px-4 py-8">
            <div className="flex-col m-auto text-center">
              <h1
                className="font-normal text-4xl mb-6"
                style={{ fontFamily: "'Luckiest Guy', cursive" }}
              >
                Have an idea, project or event ?
              </h1>
              <Link href="/contact">
                <button className="bg-blue-500 uppercase text-white h-16 w-48 rounded-md cursor-pointer hover:bg-blue-600">
                  Work with us
                </button>
              </Link>
            </div>
            <div
              className="absolute -mt-20 right-0 mr-20 tablet:hidden"
              style={{ transform: 'scale(0.8)' }}
            >
              <Dot3 />
            </div>
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
                department nor is knowledge of any programming language
                required.
              </p>
              <Link href="/contact">
                <button className="bg-blue-500 uppercase text-white h-16 w-48 rounded-md cursor-pointer hover:bg-blue-600">
                  Get in Contact
                </button>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
