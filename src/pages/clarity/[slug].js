import { Layout } from "@/app/layout";
import { client } from "@/app/lib/sanity";
import HeadPart from "@/component/Head/head";
import PostBody from "@/component/sanity/post-body";
import { Box, Text } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
async function getData() {
  const query = `*[_type == 'clarityMethod'] { _id, parentCategories[]->{ _id, title, items[]->{ _id, title,shortDescription, content[], subcategories[]->{ _id, title, shortDescription, content[]{..., asset->{ _id, url, metadata } } } } } }`;
  const data = await client.fetch(query);
  return data;
}

const ClarityArticle = () => {
  const params = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      const filteredData = response[0].parentCategories.filter(
        (category) => category?._id === params?.slug
      );
      setData(filteredData[0]);
    };
    fetchData();
  }, [params]);
  return (
    <div className="clarity-detailed">
      <Layout>
        <HeadPart
          title={data?.title}
          description={
            "Resources for presenting the EaseCare Clarity brand consistently and professionally. "
          }
        />
        <Box className="container">
          <Text as="h1">{data?.title}</Text>
          {data &&
            data?.items.length > 0 &&
            data?.items.map((item, index) => {
              return (
                <div className="">
                  {item?.subcategories?.length > 0 ? (
                    item?.subcategories?.map((subCategory, index) => {
                      return (
                        <div>
                          <Text as="h2"> {`${item?.title}`} </Text>
                          <Text as="h3">
                            {" "}
                            {`${index + 1}. ${subCategory?.title}`}{" "}
                          </Text>
                          <PostBody
                            content={subCategory?.content}
                            className="blog-content"
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div className="list">
                      <Text as="h3">{`${index + 1}. ${item?.title}`} </Text>
                      <PostBody
                        content={item?.content}
                        className="blog-content"
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </Box>
      </Layout>
    </div>
  );
};

export default ClarityArticle;
