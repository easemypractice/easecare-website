import Head from "next/head";
import React from "react";

const HeadPart = ({ title, description, imageUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
    </Head>
  );
};

export default HeadPart;
