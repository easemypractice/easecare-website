import { Box, Flex, Text, Grid } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import EditorIcon from "@/images/editors-picks.svg";
import { useRouter } from "next/navigation";

const EditorChoice = ({ data }) => {
  const router = useRouter();
  const handleBlogRoute = (item) => {
    router.push(`/blog/${item?.currentSlug}`);
  };
  return (
    <div>
      <Box className="editor-choice">
        <Box className="container">
          <Flex className="head">
            <Image src={EditorIcon} alt="icon" width={44} height={44} />
            <Text as="span">Editor’s Picks</Text>
          </Flex>
          <Flex className="body-container">
            {data && data.length > 0 ? (
              <Grid columns="3" width="auto" className="body">
                {data &&
                  data.length > 0 &&
                  data
                    .slice(0, 6)
                    .filter((blog) => blog?.type === "editorial")
                    .map((item, index) => (
                      <Flex
                        className="content"
                        direction="column"
                        onClick={() => handleBlogRoute(item)}
                        key={index}
                      >
                        <Text as="span"> {item?.title}</Text>
                        <Text as="h4"> {item?.smallDescription}</Text>
                      </Flex>
                    ))}
              </Grid>
            ) : (
              "No Editor Blogs"
            )}
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default EditorChoice;
