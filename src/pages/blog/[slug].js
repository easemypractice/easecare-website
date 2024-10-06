"use client";
import { Layout } from "@/app/layout";
import { client, urlFor } from "@/app/lib/sanity";
import HeadPart from "@/component/Head/head";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { formatDate } from "@/utils/const";
import PostBody from "@/component/sanity/post-body";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const RecentBlogArticle = () => {
  const router = useRouter();
  const params = useParams();
  const [data, setData] = useState();
  const [author, setAuthor] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [activeSection, setActiveSection] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  // console.log(activeSection);

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
       content,titleImage,_createdAt,_updatedAt , author, seo
       }[0]`;
      const data = await client.fetch(query);
      const headingBlocks = data.content.filter(
        (block) =>
          block._type === "block" &&
          ["normal", "h2", "h3"].includes(block.style)
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

  // useEffect(() => {
  const handleScroll = (e) => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const headings = document.querySelectorAll(".table-content");
    console.log(headings);
    let newActiveId = "";
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      const headingTop = rect.top + window.scrollY;
      const headingBottom = headingTop + rect.height;

      if (
        scrollPosition - 150 >= headingTop &&
        scrollPosition - 700 <= headingBottom
      ) {
        newActiveId = heading.id;
      }
    });
    setActiveSection(newActiveId);
  };

  useEffect(() => {
    if (activeSection) {
      const sections = document.querySelectorAll("h5");
      sections.forEach((section) => {
        section.classList.remove("active-section");
        if (section.id === activeSection) {
          section.classList.add("active-section");
        }
      });
    }
  }, [activeSection]);
  return (
    <div className="blog-page">
      <Layout>
        <HeadPart
          title={data?.seo?.metaTitle}
          description={data?.seo?.metaDescription}
          pageLink={`blog/${params?.slug}`}
        />
        <div
          onScroll={handleScroll}
          style={{ maxHeight: "800px", overflowY: "auto" }}
        >
          <Box className="container ">
            <Box className="blog-grp">
              <Box className="blog-content" id="blogContent1234">
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
                    <Text as="span">{formatDate(data?._createdAt)}</Text>
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
              {data && (
                <Box className="blog-right">
                  <Box className={`blog-nav `}>
                    <h2>Table of Contents</h2>
                    <ol
                    // className={
                    //   data?.currentSlug ===
                    //     "best-physiotherapists-in-dehradun" &&
                    //   "list-style-none"
                    // }
                    >
                      {pageNav.map((item, index) => (
                        <Link
                          className={
                            activeSection ===
                            item.text.replace(/ /g, "-").replace(/:/g, "")
                              ? "active"
                              : ""
                          }
                          key={index}
                          href={`#${item.text.replace(/ /g, "-").replace(/:/g, "")}`}
                        >
                          <li>
                            {item.text.replace(/:/g, "").replace(/#\d+/g, "")}
                          </li>
                        </Link>
                      ))}
                    </ol>
                  </Box>
                  <Box className="blog-contact">
                    <Heading as="h2">Are you looking for EHR Software</Heading>
                    <Link href={"/book-a-demo"} className="purple-btn">
                      Book a Free Demo
                    </Link>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </div>
      </Layout>
    </div>
  );
};

export default RecentBlogArticle;
