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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:type" content="image/jpg" />
    </Head>
  );
};

export default HeadPart;
