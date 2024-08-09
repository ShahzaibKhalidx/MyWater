import React from "react";
import Head from "next/head";
import appData from "@data/app.json";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{appData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="author" content="mywater" />
          <meta name="description" content="Turn your tap water into purified, mineralized, still or sparkling water." />
          <meta property="og:title" content="Mywater - Drink Smart" />
          <meta property="og:description" content="Turn your tap water into purified, mineralized, still or sparkling water." />
          <meta property="og:image" content="/images/logo-black.png" />
          <meta property="og:url" content="https://mywater.pk" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="keywords" content="bottled water, water delivery, clean water, Pakistan water service, drinking water, best water bottle, water dispenser, mineral water, clean water, water dispenser for home, water dispenser for home, water treatment system, filtered water dispenser" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
