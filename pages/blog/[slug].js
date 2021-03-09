import matter from 'gray-matter';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

function PostTemplate({ content, data }) {
  const frontmatter = data;

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Layout>
        <section>
          <div className="container mx-auto my-20 p-5">
            <ReactMarkdown source={content} />
          </div>
        </section>
      </Layout>
    </>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  // Import our .md file using the `slug` from the URL
  const content = await import(`../../data/blog/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to our component props
  return { ...data };

  // return { slug };

  return { slug };
};

export default PostTemplate;
