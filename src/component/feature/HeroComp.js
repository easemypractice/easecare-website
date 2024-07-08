import { urlFor } from "@/app/lib/sanity";
import { Heading, Text } from "@radix-ui/themes";
import CustomBlockText from "../customBlockText";
const HeroComp = ({ data }) => {
  return (
    <>
      {data && (
        <div
          className="patient-banner"
          style={{ backgroundImage: `url(${urlFor(data?.image)})` }}
        >
          <div className="container">
            <div className="banner-content-top features-banner">
              <div className="home-heading heading-white">
                <CustomBlockText blocks={data.title} />
              </div>
              <Text className="banner-description">{data?.description}</Text>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroComp;
