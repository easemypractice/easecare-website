import { Heading, Text } from "@radix-ui/themes";
import PortableTextBlock from "../potableTextBlock";
import { urlFor } from "@/app/lib/sanity";
const Banner = ({ data }) => {
  return (
    <>
      {data && (
        <div
          className={`patient-banner `}
          style={{ backgroundImage: `url(${urlFor(data?.image)})` }}
        >
          <div className="container">
            <div className="banner-content-top">
              <PortableTextBlock value={data?.title} />
              <Text className="banner-description">{data?.description}</Text>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
