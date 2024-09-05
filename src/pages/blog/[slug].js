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
  console.log(data);
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
          block._type === "block" && ["normal", "h2"].includes(block.style)
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

  // const sections = document.querySelectorAll("h5");
  // console.log(sections);
  const handleScroll = () => {
    // setIsScroll(!isScroll);

    const sections = document.querySelectorAll("h5");
    // console.log("Sections found:", sections);
    let active = "";
    sections.forEach((section) => {
      // console.log(-section.offsetHeight);
      const rect = section.getBoundingClientRect();
      if (rect.top < 100 && rect.top > -section.offsetHeight) {
        active = section.id;
        setActiveSection(active);
      }
    });
    if (active) {
      // console.log("Active section:", active);
      setActiveSection(active);
    }
  };

  useEffect(() => {
    // setIsScroll(!isScroll);
    // debugger;
    // console.log(typeof window);
    const container = document.getElementById("blogContent1234");
    container.addEventListener("scroll", handleScroll());

    return () => {
      container.removeEventListener("scroll", handleScroll());
    };

    // window.onscroll = () => {
    //   console.log(heklo);
    // };
  }, []);

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
        />

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
                <Box
                  className={`blog-nav ${
                    data?.currentSlug === "best-physiotherapists-in-dehradun" &&
                    "pl-5"
                  }`}
                >
                  <h2>Table of Contents</h2>
                  <ol
                    className={
                      data?.currentSlug ===
                        "best-physiotherapists-in-dehradun" && "list-style-none"
                    }
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
                        <li>{item.text.replace(/:/g, "")}</li>
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
      </Layout>
    </div>
  );
};

export default RecentBlogArticle;
