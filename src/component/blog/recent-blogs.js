import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import { formatDate } from "@/utils/const";
import RecentIcon from "@/images/recent-post.svg";
import { useRouter } from "next/navigation";

const RecentBlogs = ({ data }) => {
  const router = useRouter();
  const handleBlogRoute = (item) => {
    router.push(`/blog/${item?.currentSlug}`);
  };
  return (
    <div>
      <Box className="container recent-post">
        <Flex className="head">
          <Image src={RecentIcon} alt="icon" width={44} height={44} />
          <Text as="span">Most Recent Posts</Text>
        </Flex>
        <div className="body">
          {data &&
            data?.length > 0 &&
            data
              ?.slice(0, 1)
              .filter((blog) => blog?.type === "blog")
              .map((item, index) => (
                <Flex
                  direction="column left-part"
                  key={index}
                  onClick={() => handleBlogRoute(item)}
                >
                  <Text as="h2">{item?.title}</Text>
                  {item.titleImage && (
                    <Image
                      src={urlFor(item?.titleImage)?.url()}
                      alt="blog-post-image"
                      width={557}
                      height={280}
                      className="rounded-lg border"
                    />
                  )}
                  <Text as="h5">{item?.smallDescription}</Text>
                  <Text as="span">{formatDate(item?._createdAt)}</Text>
                </Flex>
              ))}

          <Grid columns="2" width="auto" className="right-part">
            {data &&
              data.length > 0 &&
              data
                .slice(0, 6)
                .filter((blog) => blog?.type === "blog")
                .map((item, index) => (
                  <React.Fragment key={index}>
                    <Link href={`/blog/${item?.currentSlug}`} className="box">
                      <div>
                        <Text as="h2">{item?.title}</Text>
                        <Text as="span">{formatDate(item?._createdAt)}</Text>
                      </div>
                    </Link>
                  </React.Fragment>
                ))}
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default RecentBlogs;
