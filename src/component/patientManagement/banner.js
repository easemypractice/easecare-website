import { Heading, Text } from "@radix-ui/themes";
const PatientManagmentBanner = () => {
  return (
    <div className="patient-banner">
      <div className="container">
        <div className="banner-content-top">
          <Heading size="4" className="text-white">
            Patient Management System
          </Heading>
          <Heading size="1" className="home-heading">
            <span className="heading-white">Patient Management</span>{" "}
            <span className="heading-white">Software System?</span>
          </Heading>
          <Text className="banner-description">
            As the name suggests, Patient Management Software helps you manage
            all the things related to your patients for example - scheduling
            appointments, billing, evaluation, treatment, and discharge. But
            managing your patients is much more than this. A patient management
            software system helps you streamline your desk and administrative
            tasks along with providing you scalable and comprehensive reports on
            your medical operations which result in better efficiency,
            productivity, and customer satisfaction.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PatientManagmentBanner;
