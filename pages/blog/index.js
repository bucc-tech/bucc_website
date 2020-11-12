import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { ArrowDown } from '../../components/icons';
import Layout from '../../components/Layout';
import Card from '../../components/primitives/Card';

const Button = ({ children }) => {
  return (
    <button
      className="bg-white font-bold"
      style={{
        width: '2.6em',
        lineHeight: '2.6em',
        color: 'black',
        borderRadius: '1.8em',
      }}
    >
      {children}
    </button>
  );
};

const Blog = ({ posts }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(3.5);
  const chevronWidth = 40;

  const getItemNum = () => {
    console.log(window.innerWidth);
    const itemNum =
      window.innerWidth > 1024
        ? 3.5
        : window.innerWidth > 768
        ? 3
        : window.innerWidth > 540
        ? 2
        : window.innerWidth > 414
        ? 1.4
        : 1;

    setNumberOfItems(itemNum);
  };

  useEffect(() => {
    getItemNum();
    // set resize listener
    window.addEventListener('resize', getItemNum);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', getItemNum);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/davak/image/upload/v1604251188/bucc/Mask_Group_iumxhz.png')",
          }}
          className="w-full h-64 bg-no-repeat bg-cover"
        >
          <div className="container mx-auto" style={{ lineHeight: '200px', whiteSpace: 'nowrap' }}>
            <h1 className="text-white text-3xl font-bold ml-4">Blog</h1>
            {/* <p className="text-white font-normal">All tickets availaible on Eventbrite</p> */}
          </div>
        </section>
        <section>
          <div className="container mx-auto mt-24 px-4">
            <div className="w-full lg:flex mb-10">
              <div className="w-full grid grid-cols-5 bg-white rounded-xl smallTablet:flex smallTablet:flex-wrap-reverse">
                <div className="col-span-3 w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-12 flex flex-col justify-between leading-normal phone:p-6">
                  <div className="">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {posts[0].document.data.title}
                    </div>
                    <p className="text-gray-700 text-base">{posts[0].document.data.extract}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <p className="text-gray-600">{posts[0].document.data.date}</p>
                    </div>
                    <div className="text-sm">
                      <Link href={`/blog/${posts[0].slug}`}>
                        <a className="text-gray-900 font-semibold leading-none cursor-pointer">
                          Read more
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* image */}
                <div
                  className="col-span-2 w-full h-full bg-cover smallTablet:hidden"
                  style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }}
                ></div>
                <img
                  className="col-span-2 w-full h-auto hidden smallTablet:block"
                  src="https://tailwindcss.com/img/card-left.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* CARDS  */}
            <div className="largeTablet:mx-8">
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={numberOfItems}
                gutter={1}
                leftChevron={<Button>{'<'}</Button>}
                rightChevron={<Button>{'>'}</Button>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                {posts.slice(3, 10).map((post, index) => {
                  return (
                    <Card
                      key={post.document.data.title + index}
                      post={{
                        title: post.document.data.title,
                        extract: post.document.data.extract,
                        slug: post.slug,
                        date: post.document.data.date,
                        image: post.document.data.image,
                      }}
                    />
                  );
                })}
              </ItemsCarousel>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="container mx-auto mt-10 px-4 tablet:px-0">
            <div
              className="w-full grid grid-cols-9 smallTablet:flex smallTablet:flex-wrap-reverse"
              style={{ backgroundColor: '#F7FAFC' }}
            >
              <div className="col-span-5 p-16 tablet:col-span-6 phone:p-6">
                <h1 className="text-5xl font-bold max-w-lg phone:text-2xl">
                  {posts[1].document.data.title}
                </h1>
                <p className="mt-6 max-w-lg">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution...
                </p>
                <div className="w-full flex justify-between mt-12">
                  <p>{posts[1].document.data.date}</p>
                  <Link href={`/blog/${posts[1].slug}`}>
                    <a className="font-bold">Read More</a>
                  </Link>
                </div>
              </div>
              <div
                className="col-span-4 w-full h-full bg-cover smallTablet:hidden tablet:col-span-3"
                style={{ backgroundImage: "url('/images/image-7.png')" }}
              ></div>
              <img
                src="/images/image-7.png"
                className="col-span-4 w-full h-auto hidden smallTablet:block"
              />
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="container mx-auto mt-10 px-4 tablet:px-0">
            <div className="flex justify-end">
              <button className="bg-primaryColor p-2 rounded text-white">
                See more <ArrowDown className="ml-2" />
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

Blog.getInitialProps = async () => {
  // get all .md files from the ./data/blog dir
  const posts = ((context) => {
    // grab all the files matching this context
    const keys = context.keys();
    // grab the values from these files
    const values = keys.map(context);
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);
      // return the .md content & pretty slug
      return {
        document,
        slug,
      };
    });
    // return all the posts
    return data;
  })(require.context('../../data/blog', true, /\.md$/));

  const sortedPosts = posts.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.document.data.date) - new Date(a.document.data.date);
  });

  return {
    posts: sortedPosts,
    // ...siteConfig,
  };
};

export default Blog;
