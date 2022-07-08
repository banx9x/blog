import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { Header, PostCard } from 'components';
import { getSortedPosts } from 'lib/posts';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <div className=''>
      <Head>
        <meta
          name='description'
          content='Một chiếc blog công nghệ nhỏ của Ba Nguyễn'
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Ba Nguyễn's Blog" />
        <meta
          property='og:description'
          content='Một chiếc blog công nghệ nhỏ của Ba Nguyễn'
        />
        <meta property='og:image' content='/favicon-512x512.png' />
        <meta property='og:url' content='https://banx.dev/' />
        <meta property='og:site_name' content="Ba Nguyễn's Blog" />
        <title>Ba Nguyễn's Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='space-y-8'>
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </main>

      <footer className=''></footer>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
};
