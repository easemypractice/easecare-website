import React from "react";
import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/featuresComp/banner";
import bgImg from "@/images/healthcarebanner.png";
import featureImg from "@/images/featureImg.svg";
import BenefitPatients from "@/component/featuresComp/banefits";
import FeaturesPatient from "@/component/featuresComp/featurePatients";
import ContactUsPatients from "@/component/featuresComp/contactUsPatient";
import VarientTypes from "@/component/featuresComp/varientsTypes";
import SelectRight from "@/component/featuresComp/selectRightPatient";
import { useRouter } from "next/router";
import Testimonail from "@/component/home/testimonial";
import CtaSection from "@/component/home/cta";
const healthcareBannerData = [
  {
    maxWidth: "max-width-80 p-5",
    bgImg: bgImg,
    subHeading: "Healthcare Management Software",
    HeadingFirst: "Healthcare Inventory Management System",
    // HeadingSecound: "Software System?",
    description:
      "Software for healthcare management is driving the ever-evolving sector of healthcare helping hospitals, healthcare professionals,  clinics, and various modern medical settings helping them throughout all the medical aspects from improving patient care, and efficient data management to streamlining various administration operations. From managing medical records to scheduling appointments to administrating billing and various financial operations, healthcare management software not only helps medical settings and hospitals improve efficiency but also takes over the tension of finding a professional and seasoned financial expert or accountant to look after their complex and intricate financial operations",
  },
];
const healthcareBenefits = [
  {
    HeadingFirst: "Benefits of Healthcare",
    HeadingSec: "Management System",
    paraClass: "pb-40",
    para: "Following are some of the benefits that demand you to implement hospital management  software to streamline your medical operations",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:task",
        heading: "Streamlining Operations with Accuracy and Speed",
        para: "In your healthcare organization, there are multiple things that need to be taken care of. From keeping a safe track of the data of your patients to listening to the queries of your healthcare staff, no need not to worry about a single thing when you have good healthcare management software",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:money",
        heading: "Reduced Expenses",
        para: "When all the tasks are managed by a single machine and software, it means that you will need less manpower which will drastically reduce your expenses. Additionally, various tools and machines are also replaced by the software",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:dashboard",
        heading: "Better Patient Experience",
        para: "When all things are automated with the help of a good healthcare management system software, patients will not have to wait or complain about anything which will result in better patient experience and retention driving more profit to you",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:inventory-sharp",
        heading: "Effective Inventory and Pharmacy Management",
        para: "Managing inventory and pharmacy is one of the complex tasks faced by doctors, healthcare professionals, clinics, and even big hospitals. Make this whole process seamless with good medical management software with features like real-time inventory tracking to automatic reordering and stock management",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "iconamoon:invoice-thin",
        heading: "Accurate Billing and Revenue Management",
        para: "Operations and activities related to finances, from billing creation to revenue management will be accurate and seamless. Apart from automated billing creation and management, the data and insights of this software help you enhance and manage your revenue",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:security",
        heading: "Data Security and Privacy",
        para: "Data security and privacy are among the biggest concerns of this digital age. While AI technology is continuously evolving, there are various privacy and cyber threats we can’t even recognize. Advanced healthcare software solutions provide you with robust security measures while being compliant with healthcare regulations like HIPAA",
      },
    ],
  },
];
const MedicalRecordScope = [
  {
    HeadingClass: "max-width-full py-10",
    cardClass: "grid-cols-3",
    HeadingFirst: "Scope of Medical Records Management",
    paraClass: "pb-40",
    para: "A robust digital medical records software covers a wide range related to the practice of healthcare professionals which reduces the need for dedicated professionals for each task. Below are some of the areas that can be looked after with the help of a good healthcare management system software",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        cardBgColor: "white",
        icon: "solar:history-bold",
        heading: "Patient history",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:clinic",
        cardBgColor: "white",
        heading: "Clinical findings",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:service",
        cardBgColor: "white",
        heading: "Diagnostic test results",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "solar:health-broken",
        cardBgColor: "white",
        heading: "Pre and postoperative care",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:user-expert",
        cardBgColor: "white",
        heading: "Patient progress",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:medicine-02",
        cardBgColor: "white",
        heading: "Medications",
      },
    ],
  },
];
const FeatuesHealthCare = {
  HeadingFirst: "Features of Healthcare",
  HeadingClass: "max-width-full p-5",
  HeadingSec: "Management System",
  ParaClass: "pb-40",
  Para: "Following are some of the key features of the advanced healthcare management systems",
  CardData: [
    {
      icon: "teenyicons:appointments-outline",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      heading: "Patient Scheduling System",
      headingClass: "max-width-full",
      description:
        "A healthcare practice management helps you in seamlessly scheduling the appointments. If your patient is not able to reach out to you at the decided time, no worries. You can easily reschedule it according to the convenience of your patient",
    },
    {
      icon: "carbon:dashboard",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      headingClass: "max-width-full",
      heading: "Intuitive User Interface",
      description:
        "EaseCare boasts an intuitive and user-friendly interface, making it easy for healthcare professionals to navigate and access critical information swiftly. Whether you’re a doctor, nurse, or administrative staff, EaseCare streamlines your workflow",
    },
    {
      icon: "carbon:report",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      headingClass: "max-width-full",
      heading: "Customizable Workflows",
      description:
        "At EaseCare, we take it into consideration that each clinic can have different requirements and thus, we make sure that our solutions are mostly customizable and will help you improve the quality of your service",
    },
    {
      icon: "uiw:mobile",
      bgColor: "#FFF2DD",
      IconbgColor: "#FAE2BB",
      headingClass: "max-width-full",
      heading: "Mobile Applications",
      description:
        "Various hospital management software are available at various play stores so that the patient can easily access medical services with the help of an app",
    },
    {
      icon: "guidance:hospital",
      bgColor: "#FFE9E2",
      IconbgColor: "#8512E01A",
      heading: "Lab Management",
      headingClass: "max-width-full",
      description:
        "A good hospital management software is a perfect tool to manage your lab. From the effectiveness and success of your testing to the availability of required tools and substances, you will not have to worry about anything",
    },
    {
      icon: "carbon:data-bin",
      bgColor: "#E0E1FD",
      IconbgColor: "#08C7FB1A",
      heading: "Data Analytics and Reporting",
      headingClass: "max-width-full",
      description:
        "From assessing how satisfied your customers are to analyzing the current trends in the healthcare sector, data analytics and reporting through a good healthcare management solution is a good tool for making decisions that will turn profitable in your favor from all aspects",
    },
  ],
};
const keyAspectMadicalRecord = {
  HeadingFirst: "Key Aspects of Medical",
  HeadingSec: "Records Management",

  HeadingClass: "max-width-full pb-40",
  para: "Electronic Medical Records (EMR) and Electronic Health Records (EHR)",
  cardType: "varient",
  CardData: [
    {
      icon: "vaadin:health-card",
      heading: "EMR",
      description:
        "An Electronic Medical Record can help a single or solo provider to keep track of everything that is in the sphere of his practice. It closely contains the information of specific healthcare providers",
    },
    {
      icon: "material-symbols-light:clinical-notes-outline",
      heading: "EHR",
      description:
        "An Electronic Health Record is a broad term as it is used throughout various health organizations with the flexibility of transferring patient data to various medical settings",
    },
  ],
};

const BenefitOfEffectiveRecords = {
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Benefits of Effective Records",
  HeadingSec: "Management System",
  RightData: [
    {
      path: "efficiency",
      listItem: "Efficiency",
      ListData:
        "Patient records management systems are quick and easy to access with easy-to-use features which makes it easier for patients to navigate through these software and get the essential services on time.",
      Icon: "grommet-icons:task",
    },
    {
      path: "automated",
      listItem: "Automated Tracking",
      ListData:
        "Automated patient tracking and data management reduce the limiting errors.",
      Icon: "material-symbols-light:inbox-customize-outline-sharp",
    },
    {
      path: "electronic-data",
      listItem: "Electronic Data Management",
      ListData:
        "Electronic data management makes it easier to share information within various departments without compromising the privacy of the patients.",
      Icon: "mage:health-square",
    },
    {
      path: "ehr-emr",
      listItem: "EHR/EMR Integration",
      ListData:
        "Integrating electronic health records makes sure that the data of patients is stored accurately to fuel effective patient care.",
      Icon: "material-symbols-light:clinical-notes-outline",
    },
  ],
};
const ModuleHosptalManage = [
  {
    HeadingClass: "max-width-full py-10",
    HeadingFirst: "Modules of Hospital Management System",
    paraClass: "pb-40",
    para: "Below are various aspects or modules of hospital management, which are handled by a medical management system",
    cardType: "benefit",
    cardClass: "grid-cols-3",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "teenyicons:appointments-outline",
        heading: "Appointment Management",
        para: "Making the process of scheduling appointments seamless and easy for patients",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:user-expert",
        heading: "Patient Management",
        para: "Making patients believe that you have the perfect solution for their problems and managing them",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "ph:hospital",
        heading: "Facility Management",
        para: "A healthcare management solution manages all the facilities in a medical setting by managing data from various departments",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "ri:team-line",
        heading: "Staff Management",
        para: "Maintaining the data of staff members for better transparency",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:medicine-01",
        heading: "Supply Management",
        para: "Tracking the availability of medications and other medical supplies so that they can be availed on time",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "ep:money",
        heading: "Financial Management",
        para: "Keeping track of finances and fueling the revenue with better strategies based on the insights of the digital medical records software",
      },
    ],
  },
];
const BestHealthCare = [
  {
    maxWidth: "max-width-80",
    HeadingClass: "py-10",
    paraClass: "pb-40",
    HeadingFirst: "How to Choose the Best Health",
    HeadingSec: "Care Management Software?",
    cardType: "practice",
    para: "Need hospital management software but wondering how to select the right software for you?  Below are some things to consider when you are going to choose the right healthcare management software",
    benefitData: [
      {
        icon: "akar-icons:health",
        iconColor: "#8512E0",
        heading: "Integrated Physical, Behavioral, and Social Health",
        description:
          "When it comes to becoming the best healthcare provider for your patients, you need to understand that the term ‘health’ addresses complete spheres like physical, behavioral, and social health. Go for software that has these features",
      },
      {
        icon: "material-symbols-light:inbox-customize-outline-sharp",
        iconColor: "#19BB7D",
        heading: "Detailed Analytics and Patient Identification",
        description:
          "Data and analytics play an important role in effective decision-making and deriving results. Choose a good software for healthcare management that provides detailed insights into the condition of patients",
      },
      {
        icon: "hugeicons:service",
        iconColor: "#3278B1",
        heading: "Personalized Care",
        description:
          "From shopping to scheduling an appointment with the doctor, personalization and customization have become the first priority of people. So, to make sure that you retain your customers offering personalized care is essential",
      },
      {
        icon: "carbon:security",
        iconColor: "#1AC55E",
        heading: "Security",
        description:
          "In this digital age, where there is unlimited data online, security is one thing that can not be neglected when it comes to choosing the best software for healthcare management for your clinic",
      },
    ],
  },
];
const HealthCareManagement = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");

  return (
    <React.Fragment>
      <Layout>
        <HeadPart
          title={"Healthcare Management System Software -  Easecare Clarity"}
          description={
            "Our Healthcare management system software digitally manages patient health information in facilities, offering expert solutions, and automating operations. Explore Now!"
          }
          imageUrl="images/ogImage/HospitalManagementSoftware.png"
          pageLink={slug}
        />
        <PatientManagmentBanner data={healthcareBannerData} />
        <BenefitPatients data={healthcareBenefits} />
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Want to explore this further? EaseCare-Clarity is here to guide you anytime"
            btnText="Get a Free Demo"
            link={"book-a-demo"}
            alt="healthcare management software"
          />
        </div>
        <FeaturesPatient data={FeatuesHealthCare} />
        <div style={{ backgroundColor: "#FCFEFF" }}>
          <VarientTypes TypesVarientData={keyAspectMadicalRecord} />
        </div>
        <div
          style={{
            backgroundColor: "#F2FEF8",
            margin: "50px 0px 0px",
            paddingBottom: "70px",
          }}
        >
          <BenefitPatients data={MedicalRecordScope} />
        </div>
        <SelectRight data={BenefitOfEffectiveRecords} />
        <div style={{ margin: "20px 0px" }}>
          <BenefitPatients data={ModuleHosptalManage} />
        </div>
        <div
          style={{
            backgroundColor: "#FCFBF6",
            margin: "25px 0px 0px",
            padding: "0px 0px 30px",
          }}
        >
          <BenefitPatients data={BestHealthCare} />
        </div>
        <Testimonail />
        <CtaSection />
      </Layout>
    </React.Fragment>
  );
};

export default HealthCareManagement;
