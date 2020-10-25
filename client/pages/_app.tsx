import '../styles/globals.css';
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

/* export function getServerSideProps(ctx) {
  console.log('serverside', ctx);
  return {
    pageProps: {
      message: 'juukeli',
    },
  };
} */

export default MyApp;
