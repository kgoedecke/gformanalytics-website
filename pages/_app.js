import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import FelaProvider from '../FelaProvider';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, renderer } = this.props;
    return (
      <FelaProvider renderer={renderer}>
        <>
          <Head>
            <title>GFormAnalytics - Add Google Analytics to any Google Form with 1 click!</title>
          </Head>
          <Component
            {...pageProps } //eslint-disable-line
          />
        </>
      </FelaProvider>
    );
  }
}
