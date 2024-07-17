"use client";
import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import React, { useEffect, useState } from "react";
import BrandPreiviewImage from "@/images/brand-preview.jpg";
import { Box, Text } from "@radix-ui/themes";
import RecentBlogs from "@/component/blog/recent-blogs";
import EditorChoice from "@/component/blog/editor-choice";
import LatestIndustry from "@/component/blog/latest-industry";
import { client } from "@/app/lib/sanity";
import CtaSection from "@/component/home/cta";
async function getData() {
  const query = `*[_type=="blog"] | order(releaseDate desc) {
   title,type,_id,
    smallDescription,
    "currentSlug":slug.current,
    titleImage,_createdAt
}`;
  const data = await client.fetch(query);
  return data;
}
const Blog = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const response = getData().then((item) => {
      setData(item);
    });
  }, []);
  return (
    <div className="blog">
      <Layout>
        <HeadPart
          title={"Learn more about Healthcare Technologies| Easecare blog"}
          description={
            "Discover our engaging healthcare management blogs covering technology, best practices, and industry insights. Explore now!."
          }
          imageUrl={BrandPreiviewImage}
          pageLink={"blog"}
        />
        <Box className="header">
          <Box className="container">
            <Text as="h2">Clarity Blogs</Text>
            <Text as="p">
              Expert insight and analysis on the latest trends.
            </Text>
          </Box>
        </Box>
        <RecentBlogs data={data} />
        <EditorChoice data={data} />
        <CtaSection />
      </Layout>
    </div>
  );
};

export default Blog;
