import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import { Box, Heading } from "@radix-ui/themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Guide.module.css";
import PostBody from "@/component/sanity/post-body";
import { client } from "@/app/lib/sanity";

const ClarityGuide = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [titleData, setTitleData] = useState([]);
  const [slugs, setSlug] = useState("how-to-get-started-with-clarity");
  const slug = router.pathname.replace("/", "");
  async function getData(slugs) {
    if (slugs) {
      const query = `*[_type=="clarityGuide" && slug.current =='${slugs}']{
       "currentSlug":slug.current,
       title,smallDescription,
       content,titleImage,_createdAt,_updatedAt , author
       }[0]`;
      const data = await client.fetch(query);
      setData(data);
    }
  }
  async function getTitleSlug() {
    const query = `*[_type=="clarityGuide"]| order(_createdAt asc) {slug,title}`;
    const data = await client.fetch(query);
    setTitleData(data);
  }
  useEffect(() => {
    getTitleSlug();
  }, []);

  useEffect(() => {
    getData(slugs);
  }, [slugs]);
  return (
    <Layout>
      <HeadPart
        title={"EHR /EMR Software: Electronic Health Records Software"}
        description={
          "Boost your organisation's performance with our electronic health records software. Elevate services & reputation with streamlined data management."
        }
        imageUrl="images/ogImage/ehr-emr-software.png"
        pageLink={slug}
      />
      <div className={styles.guideHeadBg}>
        <Heading size="1" className={styles.guideHeading}>
          <span className="">Clarity Guide</span>
        </Heading>
        <p className={styles.guideDesc}>
          How to use to EaseCare Clarity Product - Complete Guide
        </p>
      </div>
      <div className="container relative">
        <Box className={styles.guideContainer}>
          <Box className={styles.nav}>
            <div className="sticky-sidebar">
              <h3>CLARITY GUIDE</h3>
              {titleData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSlug(item?.slug?.current);
                  }}
                  className={item?.slug?.current === slugs && styles.active}
                >
                  {item?.title}
                </div>
              ))}
            </div>
          </Box>
          <PostBody
            content={data?.content}
            className="blog-content max-w-658"
          />
        </Box>
      </div>
    </Layout>
  );
};

export default ClarityGuide;
