import Head from "next/head";
import React from "react";

const HeadPart = ({ title, description, imageUrl, pageLink }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      {/* <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" /> */}
      {/* <meta property="og:image:type" content="image/svg" /> */}
      <link rel="canonical" href={`https://www.easecare.co/${pageLink}`} />
      <meta
        name="google-site-verification"
        content="b744oLuFW6xcSOeBopr-I3Q7lYzAIg6IDHc--wnvpVI"
      />
    </Head>
  );
};

export default HeadPart;
