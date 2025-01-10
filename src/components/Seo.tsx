import React from "react";
import Head from "next/head";

const Seo = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <meta name="description" content="stanly yin personal website" />
      <meta name="og:title" content={"stanley-yin"} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
