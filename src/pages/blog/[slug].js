import { Layout } from "@/app/layout";
import { client, urlFor } from "@/app/lib/sanity";
import HeadPart from "@/component/Head/head";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { formatDate } from "@/utils/const";
import PostBody from "@/component/sanity/post-body";
import { useParams } from "next/navigation";
async function getData(slug) {
  if (slug) {
    const query = `*[_type=="blog" && slug.current =='${slug}'] {
     "currentSlug":slug.current,
     title,smallDescription,
     content,titleImage,_createdAt,_updatedAt ,'author':*[_type == "author"]{
      title,about,image}
     }[0]`;
    const data = await client.fetch(query);
    return data;
  }
}

const RecentBlogArticle = () => {
  const params = useParams();
  const [data, setData] = useState();
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
          <Text as="h1">{data?.title}</Text>
          <Flex className="author-image">
            {data && data?.author && (
              <Image
                src={urlFor(data?.author[0]?.image)?.url() || ""}
                width={60}
                height={60}
                alt="profile-picture"
              />
            )}
            <Flex direction="column" className="author">
              <Text as="h4">{data?.author[0]?.title}</Text>
              <Text as="span">{formatDate(data?._createdAt)}</Text>
            </Flex>
          </Flex>
          {data && data?.titleImage && (
            <Image
              src={urlFor(data?.titleImage)?.url()}
              width={640}
              height={320}
              style={{ height: "100%", width: "100%" }}
              alt="image"
              className="content-image"
              priority
              quality={80}
            />
          )}
          <PostBody content={data?.content} className="blog-content" />
        </Box>
      </Layout>
    </div>
  );
};

export default RecentBlogArticle;
