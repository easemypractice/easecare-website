import { Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
const PatientManagmentBanner = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`patient-banner ${item?.bannerStyle}`}
          style={{ backgroundImage: `url(${item.bgImg.src})` }}
        >
          <div className="container">
            <div className="banner-content-top">
              {/* <Heading size="4" className="text-white text-center uppercase">
                {item?.subHeading}
              </Heading> */}
              <Heading size="1" className={`${item.maxWidth} home-heading`}>
                <span className="heading-white">{item?.HeadingFirst}</span>{" "}
                <span className="heading-white">{item?.HeadingSecound}</span>
              </Heading>
              <Text className={`banner-description ${item?.descWid}`}>
                {item?.description}
                <strong>{item?.descriptionTwo}</strong>
              </Text>
              {item?.btnText && (
                <Link href={item?.btnLink}>
                  <button className={`purple-btn w-full`}>
                    {item?.btnText}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PatientManagmentBanner;
