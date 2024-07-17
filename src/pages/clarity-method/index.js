"use client";
import { Layout } from "@/app/layout";
import { client } from "@/app/lib/sanity";
import HeadPart from "@/component/Head/head";
import BrandPreiviewImage from "@/images/brand-preview.jpg";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Doctor from "../../images/doctor.png";
async function getData() {
  const query = `*[_type == 'clarityMethod'] { _id, parentCategories[]->{ _id, title, items[]->{ _id, title,shortDescription, content[], subcategories[]->{ _id, title, shortDescription, content[]{..., asset->{ _id, url, metadata } } } } } }`;
  const data = await client.fetch(query);
  return data;
}
const Clarity = () => {
  const router = useRouter();
  const handleBlogRoute = (item) => {
    router.push(`/clarity/${item?._id}`);
  };
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response);
    };
    fetchData();
  }, []);
  return (
    <div className="clarity">
      <Layout>
        <HeadPart
          title={"Clarity"}
          description={
            "Resources for presenting the EaseCare Clarity brand consistently and professionally. "
          }
          imageUrl={BrandPreiviewImage}
          pageLink={"clarity-method"}
        />
        <Box className="container header">
          <Grid columns="2" width="auto" className="typography">
            <Flex direction="column">
              <Text as="h3">Introduction</Text>
              <Text as="p">
                The Clarity Method offers a path to building successful,
                patient-centric clinics and hospitals through a clear focus on
                operations, administration, and patient engagement.
              </Text>
            </Flex>
            <Image src={Doctor} alt="icon" width={570} height={380} />
          </Grid>
        </Box>
        <Box className="container body">
          <div>
            {data?.map((clarityMethod) => (
              <div key={clarityMethod?._id}>
                {clarityMethod?.parentCategories?.map((parentCategory) => (
                  <div key={parentCategory?._id}>
                    <h2>{parentCategory?.title}</h2>
                    {parentCategory?.items?.map((item, index) => (
                      <div key={item?._id}>
                        {item?.subcategories?.length > 0 ? (
                          <>
                            <h3>{item?.title}</h3>
                            {item?.subcategories?.map(
                              (subcategory, subIndex) => (
                                <div key={subcategory?._id} className="list">
                                  <h6
                                    onClick={() =>
                                      handleBlogRoute(parentCategory)
                                    }
                                  >
                                    {`${subIndex + 1}. ${subcategory?.title}`}
                                  </h6>
                                  {subcategory?.shortDescription && (
                                    <p>{subcategory?.shortDescription}</p>
                                  )}
                                </div>
                              )
                            )}
                          </>
                        ) : (
                          <div className="list">
                            <h6 onClick={() => handleBlogRoute(parentCategory)}>
                              {`${index + 1}. ${item?.title}`}{" "}
                            </h6>
                            {item?.shortDescription && (
                              <p>{item?.shortDescription}</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Box>
      </Layout>
    </div>
  );
};

export default Clarity;
