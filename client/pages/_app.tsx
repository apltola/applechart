import '../styles/globals.css';
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default AppComponent;
