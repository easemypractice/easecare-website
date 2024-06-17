import { Heading, Text } from "@radix-ui/themes";
const PatientManagmentBanner = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="patient-banner"
          style={{ backgroundImage: `url(${item.bgImg.src})` }}
        >
          <div className="container">
            <div className="banner-content-top">
              <Heading size="4" className="text-white">
                {item?.subHeading}
              </Heading>
              <Heading size="1" className={`${item.maxWidth} home-heading`}>
                <span className="heading-white">{item?.HeadingFirst}</span>{" "}
                <span className="heading-white">{item?.HeadingSecound}</span>
              </Heading>
              <Text className="banner-description">{item?.description}</Text>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PatientManagmentBanner;
