import { urlFor } from "@/app/lib/sanity";
import { Heading, Text } from "@radix-ui/themes";
const HeroComp = ({ section }) => {
  return (
    <>
      {section.map((section) => (
        <div
          key={section._key}
          className="patient-banner"
          style={{ backgroundImage: `url(${urlFor(section?.image)})` }}
        >
          <div className="container">
            <div className="banner-content-top">
              {/* <Heading size="4" className="text-white text-center uppercase">
                {section?.subtitle}
              </Heading> */}
              {section.title.map((block) => (
                <Heading
                  size="1"
                  className={`home-heading  max-width-full`}
                  key={block._key}
                >
                  {block.children.map((span) => (
                    <span key={span._key} className="heading-white">
                      {span?.text}
                    </span>
                  ))}
                </Heading>
              ))}
              <Text className="banner-description">{section?.description}</Text>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default HeroComp;
