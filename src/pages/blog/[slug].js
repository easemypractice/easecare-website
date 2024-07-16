"use client";
import { Layout } from "@/app/layout";
import { client, urlFor } from "@/app/lib/sanity";
import HeadPart from "@/component/Head/head";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { formatDate } from "@/utils/const";
import PostBody from "@/component/sanity/post-body";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useRouter } from "next/router";

const RecentBlogArticle = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [author, setAuthor] = useState(null);
  const [headings, setHeadings] = useState([]);

  const blocksWithGradientText = headings.filter((block) =>
    block.children.some(
      (child) => child.marks && child.marks.includes("strongText")
    )
  );
  const pageNav = blocksWithGradientText.map((block) => block.children[0]);

  async function getData(slug) {
    if (slug) {
      const query = `*[_type=="blog" && slug.current =='${slug}'] {
       "currentSlug":slug.current,
       title,smallDescription,
       content,titleImage,_createdAt,_updatedAt , author
       }[0]`;
      const data = await client.fetch(query);
      const headingBlocks = data.content.filter(
        (block) => block._type === "block" && ["normal"].includes(block.style)
      );
      setHeadings(headingBlocks);
      return data;
    }
  }

  useEffect(() => {
    const fetchAuthor = async () => {
      const authorRef = data?.author?.author?._ref;
      if (authorRef) {
        const authorData = await client.fetch(
          `*[_type == "author" && _id == $id][0]`,
          { id: authorRef }
        );
        setAuthor(authorData);
      }
    };
    fetchAuthor();
  }, [data]);
  useEffect(() => {
    getData(params?.slug).then((item) => {
      setData(item);
    });
  }, [params]);

  return (
    <div className="blog-page">
      <Layout>
        <HeadPart
          title={data?.title}
          description={
            "Resources for presenting the EaseCare Clarity brand consistently and professionally. "
          }
          //   imageUrl={BrandPreiviewImage}
        />
        <Box className="container">
          <Box className="blog-grp">
            <Box className="blog-content">
              <Text as="h1">{data?.title}</Text>
              <Flex className="author-image">
                {author && (
                  <Image
                    src={urlFor(author?.image)?.url() || ""}
                    width={60}
                    height={60}
                    alt="profile-picture"
                  />
                )}
                <Flex direction="column" className="author">
                  <Text as="h4">{author?.title}</Text>
                  <Text as="span">{formatDate(author?._createdAt)}</Text>
                </Flex>
              </Flex>
              {data && data?.titleImage && (
                <Image
                  src={urlFor(data?.titleImage)?.url()}
                  width={640}
                  height={320}
                  style={{ width: "100%" }}
                  alt="image"
                  className="content-image"
                  priority
                  quality={80}
                />
              )}
              <PostBody content={data?.content} className="blog-content" />
            </Box>
            <Box className="blog-nav">
              <h2>Table of Contents</h2>
              <ol>
                {pageNav.map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item.text.replace(/ /g, "-").replace(/:/g, "")}`}
                  >
                    <li>{item.text.replace(/:/g, "")}</li>
                  </Link>
                ))}
              </ol>
            </Box>
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default RecentBlogArticle;
