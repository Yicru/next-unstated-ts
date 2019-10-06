import React from 'react';
import App from 'next/app';
import { Global } from '@emotion/core';
import css from '../styles/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Global styles={css} />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
