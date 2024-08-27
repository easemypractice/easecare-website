import { Layout } from "@/app/layout";
import React from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/featuresComp/banner";
import bgImg from "@/images/ePrescription.png";
import cuateImg from "@/images/cuateImg.svg";
import BenefitPatients from "@/component/featuresComp/banefits";
import FeaturesPatient from "@/component/featuresComp/featurePatients";
import VarientTypes from "@/component/featuresComp/varientsTypes";
import SelectRight from "@/component/featuresComp/selectRightPatient";
import ContactUsPatients from "@/component/featuresComp/contactUsPatient";
import BenefitCard from "@/component/featuresComp/banefits/benefitCard";
import { useRouter } from "next/router";
import Testimonail from "@/component/home/testimonial";
import CtaSection from "@/component/home/cta";
const prescriptionBanner = [
  {
    maxWidth: "max-width-full p-5",
    bannerStyle: "align-center",
    bgImg: bgImg,
    HeadingFirst: "E-Prescribing software for Doctors",
    description:
      "Electronic Prescription is the computer-based digital medical prescription that replaces the place of paper and faxed prescriptions. Apart from reducing the paperwork of medical clinics and organizations, e-prescriptions are known for their ability to send error-free, accurate, and understandable prescriptions electronically. Digital prescription software is used to authorize or transmit an e-subscription electronically",
  },
];
const whyPrescriptionSoftwareGood = [
  {
    HeadingClass: "max-width-full",
    HeadingFirst: "Here is why our prescription software is a",
    HeadingSec: "good choice for any medical organization",
    // paraClass: "pb-40",
    // para: "Following are some of the benefits that demand you to implement hospital management  software to streamline your medical operations",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:task",
        IconWidth: "30",
        heading: "Manage Errors & Interactions",
        para: "While there are thousands of patients to be taken care of, errors can only be avoided when there is too much pressure on your staff. But with our electronic prescription software, you don’t need to be concerned about errors because a single thing can be done twice or thrice",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "fluent:patient-20-regular",
        heading: "More Time With Patients",
        para: "While there is a dedicated platform for prescriptions and managing all the patient data, your staff will get more time to spend with your patients and make connections with them- what matters the most for healthcare services with the help of e-prescribe software for physicians",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:clinic",
        IconWidth: "35",
        heading: "Better Clinical Outcomes",
        para: "With price transparency and easy prescription renewals, there are better clinical outcomes you will get for your clinics that will enhance your performance",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "teenyicons:cost-estimate-outline",
        heading: "Cost Savings",
        IconWidth: "30",
        para: "As, e-Prescribing software provides you with utmost accuracy. Accuracy reduces errors which means enhanced cost savings on extra paperwork and resources",
      },
    ],
  },
];
const SoftwareForControlledSubstances = {
  HeadingFirst: "E-Prescribing Software for Controlled",
  HeadingSec: "Substances and Legend Drugs",
  HeadingClass: "max-width-full p-5",
  ParaClass: "pb-40",
  Para: "E-prescribing software is a game changer in the healthcare industry when it comes to managing substances and legendary drugs. This technology is efficient, accurate, and compliant with legal requirements along with providing secure and efficient electronic transmission of prescription orders directly to pharmacies",
  CardData: [
    {
      icon: "carbon:report",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      heading: "Predictive Analytics",
      headingClass: "max-width-full",
      description:
        "Enhance your prescribing process with the efficiency of extensive predictive analytics through EaseCare’s easy-to-use and cutting-edge e-prescription software for physicians",
    },
    {
      icon: "material-symbols-light:clinical-notes-outline",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "40",
      IconHeight: "40",
      headingClass: "max-width-full",
      heading: "Medication History",
      strockWidth: "1",
      description:
        "Keep a record of the long-term medication history of your patients for increased conversion and retention rates",
    },
    {
      icon: "fluent-mdl2:custom-list",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      IconWidth: "30",
      IconHeight: "30",
      headingClass: "max-width-full",
      heading: "Real-Time Prescription",
      description:
        "The real-time prescription drug benefit check ensures you whether a prescribed medication is covered or not. Real-time prescriptions make it easier to accurately track the situation of the patients",
    },
    {
      icon: "hugeicons:google-doc",
      bgColor: "#FFF2DD",
      IconWidth: "35",
      IconHeight: "35",
      IconbgColor: "#FAE2BB",
      heading: "Convenience",
      headingClass: "max-width-full",
      description:
        "While people have all the things in their mobile phones in this digital age, it relieves them from the stress to keep a paper-based prescription safe and to carry their medical history easily.",
    },
  ],
};
const WhyPrescriptionWrittingSoftware = {
  HeadingFirst: "Why Prescription Writing Software",
  para: "Wondering why there is any need to take dedicated software for writing prescriptions? Below are some points to justify the need for prescription writing software for clinics",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "carbon:chart-custom",
      IconWidth: "35",
      heading: "Prescription Writing ",
      description:
        "Prescription writing software is the most trusted medical tool that is used widely.",
    },
    {
      icon: "material-symbols-light:event-available-outline",
      heading: "Reduce Workload",
      IconWidth: "40",
      description:
        "Reduce the workload of brainstorming through a million papers when it comes to electronic prescriptions",
    },
    {
      icon: "fluent-mdl2:transition-effect",
      IconWidth: "30",
      heading: "Improved Service Experience ",
      description:
        "Our prescription writing software doesn’t only make it easy for doctors to enhance their patient service but also improves the service experience of the patients",
    },
    {
      icon: "carbon:money",
      heading: "Reasonable Cost",
      IconWidth: "35",
      description:
        "You can get a prescription writing service at a very reasonable cost",
    },
  ],
};

const featuresOfPrescriptionSoftware = {
  ParaClass: "p-0",
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Features of EaseCare’s e-Prescription",
  HeadingSec: "Software for Doctors & Clinics",
  Para: "Let’s  explore the features of EaseCare’s advanced e-prescription software for doctors and clinics to know why you need this software",
  RightData: [
    {
      path: "1",
      listItem: "Generate Prescriptions",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "Generating prescriptions in no time is the first and biggest feature of EaseCare electronic prescription  Software for doctors.",
      Icon: "carbon:report",
    },
    {
      path: "2",
      listItem: "Alternative Medicine",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "At EaseCare, healthcare professionals can go through a variety of medications and drugs even when they are looking for a perfect alternative to a drug.",
      Icon: "hugeicons:medicine-02",
    },
    {
      path: "3",
      listItem: "Order Medicines",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "Give your patients the convenience of getting the medications at their doorsteps at the right time with Easecare’s e-prescription software for dentists.",
      Icon: "lets-icons:order-light",
    },
    {
      path: "4",
      listItem: "Real-Time Alerts",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "Get the facility of informing your patients about new prescriptions, refill alerts, and dosage through real-time alerts instead of wasting minutes on calls, messages, and emails through advanced e-prescribe software.",
      Icon: "ph:warning",
    },
    {
      path: "5",
      listItem: "Record Management",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "With the help of all-in-one software, it becomes effortless for pharmacists to manage a detailed record of all the patients along with all the necessary information with one of the best medical prescription software.",
      Icon: "hugeicons:google-doc",
    },
    {
      path: "6",
      listItem: "Seamless Payments",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "Doctors and pharmacists can get the payment easily and instantly while the software allows for various payment channels.",
      Icon: "fluent:payment-16-regular",
    },
  ],
};
const whyChooseSoftware = [
  {
    HeadingWidth: "max-width-full text-center",
    icon: "carbon:dashboard",
    heading: "Explore the Most User-Friendly and Connected Software Solution",
    iconColor: "#8512E0",
    IconWidth: "40",
    IconHeight: "40",
    strockWidth: "4",
    description:
      "Medical prescription is a daunting task while you have to manage the details and diagnosis of thousands of patients. As, paperwork makes it a headache for you to make sure that everything is accurate and to the point, our electronic medical  prescription software is here to save you. Be effortless, accurate, efficient, and productive with all the medical prescriptions and other tasks",
  },
  {
    HeadingWidth: "max-width-full text-center",
    icon: "carbon:report",
    iconColor: "#8512E0",
    IconWidth: "40",
    IconHeight: "40",
    heading: "Stay Current with Our Certified E-Prescribing System",
    description:
      "We have certified e-prescribe software for physicians while we make sure that we are adhering to the latest e-prescribing for controlled substances (EPCS) regulations along with HIPAA compliance. Keep your patient's health secure and private with our simple, innovative, advanced, and easy-to-use software",
  },
];
const HowEnhancePatientSafty = {
  HeadingClass: "max-width-full py-10",
  containerClass: "#F8FFFA",
  HeadingFirst: "How Does e-prescribing Enhance",
  HeadingSec: "Patient Safety and Boost Compliance",
  para: "An e-prescribing enhances patient safety and boosts compliance in the following ways",
  cardType: "varient",
  CardData: [
    {
      icon: "material-symbols-light:calculate-outline",
      heading: "Recommended Dosage Calculator",
      IconWidth: "40",
      description:
        "While you select any medication, you can easily get the recommended dosage for that medication based on the health conditions and measurements of your patients",
    },
    {
      icon: "ph:warning",
      IconWidth: "30",
      heading: "Drug Warnings and Information",
      description:
        " You can warn a patient about any potential threat based on the patient's medical record",
    },
    {
      icon: "carbon:time",
      heading: "Electronic Refill Management",
      IconWidth: "30",
      // IconHeight: "50",
      description:
        "Save your time while you return the approvals or denials directly from the system rather than wasting time on phone calls, faxes, and requests for prescription refills",
    },
    {
      icon: "hugeicons:medicine-02",
      IconWidth: "35",
      // IconHeight: "60",
      heading: "Formulary Checking",
      description:
        "Have access to extensive drug formulary data through the medical prescription software and select the most appropriate options that will improve the services for your patients",
    },
  ],
};
const offerAdditionalSolution = [
  {
    HeadingClass: "max-width-full py-10",
    HeadingFirst: "Offering Additional Solutions for Your",
    HeadingSec: "Electronic Prescription Management Workflow",
    // paraClass: "pb-40",
    cardType: "practice",
    // cardClass: "grid-cols-3",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:security",
        heading: "Streamlined Medication Authorization",
        iconColor: "#8512E0",
        IconWidth: "35",
        IconHeight: "35",
        strockWidth: "4",
        description:
          "EaseCare’s e-prescribing software ensures your prescriptions in an efficient and accurate manner",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:event-available-outline",
        iconColor: "#19BB7D",
        heading: "Enhanced Workflow Efficiency",
        description:
          "Utilize our advanced software to streamline your tasks which will increase workflow efficiency",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:time",
        iconColor: "#3278B1",
        IconWidth: "35",
        IconHeight: "35",
        heading: "Real-Time Prescription Benefit Checks",
        description:
          "The software is able to integrate tools in real-time that enable healthcare professionals to make informed decisions",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:clinical-notes-outline",
        iconColor: "#08C7FB",
        IconWidth: "45",
        heading: "Comprehensive EHR Integration",
        description:
          "Adopting a unified EHR platform like EaseCare combines telemedicine capabilities while improving customer satisfaction",
      },
    ],
  },
];
const PrescriptionSoftware = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   getFeaturesData(slug);
  // }, [slug]);

  // const getFeaturesData = async (slug) => {
  //   await getFeatureData(slug).then((res) => {
  //     setData(res);
  //   });
  // };
  return (
    <React.Fragment>
      <Layout>
        <HeadPart
          title={"Premium E-Prescribing Software for Doctors | Easecare"}
          description={
            "Enhance patient care with our e-prescribing software for doctors. Our software supports your practice and patients, providing seamless healthcare management and friendly reminders to your patients."
          }
          imageUrl="images/ogImage/ePrescriptionSoftware.png"
          pageLink={slug}
        />
        <PatientManagmentBanner data={prescriptionBanner} />
        <div
          style={{ backgroundColor: "#FCFBF6", padding: "50px" }}
          className="mobileCol"
        >
          <div className="flex container mobileCol gap-20">
            <BenefitCard cardType={"practice"} data={whyChooseSoftware} />
          </div>
        </div>
        <BenefitPatients data={whyPrescriptionSoftwareGood} />
        <div style={{ margin: "50px 0px 0px" }}>
          <FeaturesPatient data={SoftwareForControlledSubstances} />
        </div>
        <div
          style={{
            paddingBottom: "70px",
          }}
        >
          <VarientTypes TypesVarientData={WhyPrescriptionWrittingSoftware} />
        </div>
        <SelectRight data={featuresOfPrescriptionSoftware} />
        <div className="my-6">
          <ContactUsPatients
            image={cuateImg}
            content="Want to know how our EHR-based prescriptions are best for you"
            btnText="Get a free Demo"
            alt="e prescribing software for doctor"
          />
        </div>
        <div style={{ backgroundColor: "#F8FFFA", paddingBottom: "35px" }}>
          <VarientTypes TypesVarientData={HowEnhancePatientSafty} />
        </div>
        <div className="my-6">
          <ContactUsPatients
            image={cuateImg}
            content="Enhanced Accuracy, Efficiency & Value"
            btnText="Contact us"
            purpleCard="true"
            description="Electronic prescription software has the potential to transform the workflow of your clinic while it is known for increasing the accuracy, efficiency, and value. As the prescription software is computerized, it is not only known for its accuracy. More than this, it can integrate thousands of tasks and manage patient prescriptions for which your staff would require hours in a single day"
            alt="e prescribing software for doctor"
          />
        </div>
        <div style={{ backgroundColor: "#FCFBF6", padding: "50px 0px" }}>
          <BenefitPatients data={offerAdditionalSolution} />
        </div>
        <Testimonail />
        <CtaSection />
      </Layout>
    </React.Fragment>
  );
};

export default PrescriptionSoftware;
