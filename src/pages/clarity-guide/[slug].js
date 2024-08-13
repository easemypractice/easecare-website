import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import { Box, Heading } from "@radix-ui/themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Guide.module.css";
import { client } from "@/app/lib/sanity";
import GuideBody from "@/component/sanity/guide-body";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const query = `*[_type=="clarityGuide" && slug.current =='${slug}']{
           "currentSlug":slug.current,
           title,seo,
           content,titleImage,_createdAt,_updatedAt
           }[0]`;

  const navQuary = `*[_type=="clarityGuide"]| order(_createdAt asc) {slug,title}`;

  const data = await client.fetch(query, { slug });
  const navData = await client.fetch(navQuary, { slug });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      navData,
    },
  };
}

const ClarityGuide = ({ data, navData }) => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  const slugs = router.query.slug;

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup the event listener when the component is unmounted
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
  return (
    <Layout>
      <HeadPart
        title={data?.seo?.openGraph?.ogTitle}
        description={data?.seo?.openGraph?.ogDescription}
        imageUrl="images/ogImage/ehr-emr-software.png"
        pageLink={slug}
      />
      <div className={styles.guideHeadBg}>
        <Box className="container">
          <Heading size="1" className={styles.guideHeading}>
            <span className="">Clarity Guide</span>
          </Heading>
        </Box>
        {/* <p className={styles.guideDesc}>
          How to use to EaseCare Clarity Product - Complete Guide
        </p> */}
      </div>
      <div className="container relative">
        <Box className={styles.guideContainer}>
          <Box className={styles.nav}>
            <div className="sticky-sidebar">
              <h3>GUIDE</h3>
              {navData.map((item, index) => (
                <Link
                  key={index}
                  href={`/clarity-guide/${item?.slug?.current}`}
                >
                  <div
                    // onClick={() => {
                    //   setSlug(item?.slug?.current);
                    // }}
                    className={`${styles.listContainor} ${item?.slug?.current === slugs && styles.active}`}
                  >
                    <div
                      className={`${styles.listIcons} ${item?.slug?.current === slugs && styles.activeIcon}`}
                    ></div>
                    <span className="flex-1"> {item?.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Box>
          <GuideBody
            content={data?.content}
            className="blog-content max-w-658"
          />
        </Box>
      </div>
    </Layout>
  );
};

export default ClarityGuide;
