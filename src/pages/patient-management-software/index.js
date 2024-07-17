import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import React, { useEffect, useState } from "react";
// import FeaturesPreviewImage from "@/images/ogImage/patientManageOg.svg";
import PatientManagmentBanner from "@/component/patientManagement/banner";

import BenefitPatients from "@/component/patientManagement/banefits";
import ContactUsPatients from "@/component/patientManagement/contactUsPatient";
import Divider from "@/component/patientManagement/divider";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import FeaturesPatient from "@/component/patientManagement/featurePatients";
import contactImg from "@/images/contactPanaImg.svg";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import ChallangeFaced from "@/component/patientManagement/challangeFaced";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import BestPractice from "@/component/patientManagement/bestPractice";
import FAQs from "@/component/patientManagement/faqs";
import bgImg from "@/images/patientManageBanner.png";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { getFeatureData } from "@/utils/service";
import Banner from "@/component/feature/banner";
import CardsGroups from "@/component/feature/benefitCards";
import MultiColorCardSec from "@/component/feature/multiColorCard";
import NavDetailsSection from "@/component/feature/navDetailsSection";
import AccordianSections from "@/component/feature/accordianSections";
import HeroComp from "@/component/feature/HeroComp";
import ContactSection from "@/component/feature/contactSection";
import Testimonail from "@/component/home/testimonial";
import CtaSection from "@/component/home/cta";
const patientBannerData = [
  {
    bgImg: bgImg,
    subHeading: "Patient Management System",
    HeadingFirst: "Patient Management",
    HeadingSecound: "Software System",
    description:
      "As the name suggests, Patient Management Software helps you manage all the things related to your patients for example - scheduling appointments, billing, evaluation, treatment, and discharge. But managing your patients is much more than this. A patient management software system helps you streamline your desk and administrative tasks along with providing you scalable and comprehensive reports on your medical operations which result in better efficiency, productivity, and customer satisfaction.",
  },
];

const patientBenefits = [
  {
    HeadingFirst: "Benefits of Patient",
    HeadingSec: "Management Software",
    cardType: "benefit",
    benefitData: [
      {
        icon: "teenyicons:appointments-outline",
        heading: "Flexible Appointments",
        desc: [
          {
            name: "Our software not only makes you offer your patients personalized sessions but also makes it time-efficient for them.",
          },
          {
            name: "Manage Patient appointments with a mobile app or through the website while you can track everything from billing to measuring customer satisfaction.",
          },
        ],
      },
      {
        icon: "icon-park-outline:bill",
        heading: "Easy Billing",
        strockWidth: "1",
        desc: [
          {
            name: "Systematize all your financial processes from keeping the records of payments to bill creation. ",
          },
          {
            name: "Bulk printed prescriptions for the ease of the patients along with the brand name on it, doing marketing of your brand at the same time.",
          },
        ],
      },
      {
        icon: "material-symbols-light:patient-list-outline",
        heading: "Patient Records",
        IconWidth: "45",
        IconHeight: "45",
        strockWidth: "5",
        desc: [
          {
            name: "Have a pre-existing record of the situation of your patients from health conditions to medications to increase the succession rate during the treatment. ",
          },
          {
            name: "Improved and personalized care with the help of extensive reports and analytics.",
          },
        ],
      },
      {
        icon: "charm:shield-tick",
        heading: "Safety & Security",
        desc: [
          {
            name: "With our patient management software, be tention-fee about your data as our patient data management system provides unparalleled safety and confidentiality. ",
          },
          {
            name: "Along with providing various software solutions according to your needs and preferences, we adhere to relevant industry standards.",
          },
        ],
      },
    ],
  },
];
const BestPracticeData = [
  {
    maxWidth: "maxWidth-55r",
    HeadingClass: "py-10",
    HeadingFirst: "Why Choose Us for the Best",
    HeadingSec: "Patient Management Software?",
    cardType: "practice",
    para: "Depending on the purpose and requirements, there are various types and variations of patient management software systems:",
    benefitData: [
      {
        icon: "hugeicons:ai-innovation-01",
        iconColor: "#8F1BE4",
        heading: "Cutting-Edge and Advanced Solutions",
        description:
          "When it comes to providing the best services to our customers, quality and advanced technology fuel our expertise",
      },
      {
        icon: "fluent:person-support-20-regular",
        iconColor: "#19BB7D",
        heading: "Unwavering Support",
        description:
          "Our unwavering support to our customers even after the service is our greatest pride",
      },
      {
        icon: "streamline:user-check-validate",
        iconColor: "#3278B1",
        heading: "Industry Leading Expertise",
        description:
          "When it comes to healthcare software development, we have years of experience in this field making us the best choice for you",
      },
      {
        icon: "eos-icons:secure-data-outlined",
        iconColor: "#08C7FB",
        heading: "Data Security",
        description:
          "With constantly increasing digital threats, we recognize the importance of data security for our customers adopting various advanced solutions",
      },
    ],
  },
];

const TypesVarientData = {
  HeadingFirst: "Exploring Patient Management",
  HeadingSec: "Software - Types and Variations",
  para: "Depending on the purpose and requirements, there are various types and variations of patient management software systems:",
  cardType: "varient",
  CardData: [
    {
      icon: "mage:health-square",
      heading: "Electronic Health Records (EHR) Systems",
      description:
        "Electronic Health Records popularly known as EHR software digitalize all patient data enhance decision-making and seamless access to all medical records in the future.",
    },
    {
      icon: "oui:app-monitoring",
      heading: "Telemedicine and Remote Patient Monitoring Solutions",
      description:
        "This type of software allows for remote consultation for the comfort of patients as they can connect to any doctor regardless of their location.",
    },
    {
      icon: "fluent-mdl2:medical",
      heading: "Medical Practice Management Software",
      description:
        "These types of software help you in enhancing patient experiences as they streamline all the operations within the medical settings.",
    },
    {
      icon: "ph:hospital",
      heading: "Hospital Management Software",
      description:
        "Specifically designed for hospitals, this type of software helps hospitals to increase efficiency and productivity by managing overall hospital operations from administrative tasks to managing patient records.",
    },
  ],
};

const patientRightData = {
  Heading: "How to Select the Right Patient Management Software?",
  RightData: [
    {
      path: "access-requirement",
      listItem: "Assessing Your Requirements",
      ListData:
        "The first thing to look for when you are looking for good patient management software is to analyze the requirements of your clinic.",
      Icon: "carbon:document-requirements",
    },
    {
      path: "budget",
      listItem: "Budget",
      ListData:
        "Managing a good budget is another thing that should be taken into consideration while looking for software to enhance your medical environment.",
      Icon: "ep:money",
    },
    {
      path: "software-feature",
      listItem: "Examine the Software Features",
      ListData:
        "Getting to know the features of the software in detail is a must before you decide to take it. To examine which software is best  for you, take a look at your requirements.",
      Icon: "mdi:feature-search-outline",
    },
    {
      path: "friendliness",
      listItem: "User-Friendliness",
      ListData:
        "It is better to look for a tool that is user-friendly so that you don’t have to invest your time and money in small things again and again.",
      Icon: "hugeicons:touch-interaction-04",
    },
    {
      path: "cloud-based",
      listItem: "Cloud-Based Solutions",
      ListData:
        "As safety and security are non-negotiable, look for tools that are cloud-based for better accessibility, security, and cost-effectiveness.",
      Icon: "ic:baseline-cloud-queue",
    },
  ],
};

const featureData = {
  HeadingFirst: "Features of Patient",
  HeadingSec: "Management Software",
  CardData: [
    {
      icon: "teenyicons:appointments-outline",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      heading: "Appointment Scheduling",
      description:
        "Scheduling the appointments automatically, quickly, and seamlessly whenever it is confirmed from the side of the patients",
    },
    {
      icon: "material-symbols-light:patient-list-outline",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      heading: "Patient Records Management",
      description:
        "Keep the whole record of every patient with the help of a patient record management system to connect better with them when they visit you again",
    },
    {
      icon: "healthicons:communication-outline",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      heading: "Communication Tools",
      description:
        "PMS facilitates effective and secure communication between patients and service providers",
    },
    {
      icon: "carbon:report",
      bgColor: "#FFF2DD",
      IconbgColor: "#FAE2BB",
      heading: "Inventory Management",
      description:
        "Keep track of the stock of each and every single thing in your clinic through accurate inventory management",
    },
    {
      icon: "carbon:dashboard",
      bgColor: "#FFE9E2",
      IconbgColor: "#8512E01A",
      heading: "Patient Portal",
      description:
        "Offer your patients maximum convenience through a patient portal to access test results, prescriptions, and medical history",
    },
    {
      icon: "carbon:document-requirements",
      bgColor: "#E0E1FD",
      IconbgColor: "#08C7FB1A",
      heading: "Analytics and Reporting",
      description:
        "Through detailed insights into the practice performance, patient demographics, and outcomes professionals make better decisions",
    },
  ],
};

const PatientManagement = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  // const [patientData, setPatientData] = useState([]);
  // useEffect(() => {
  //   getFeaturesData(slug);
  // }, [slug]);

  // const getFeaturesData = async (slug) => {
  //   await getFeatureData(slug).then((res) => {
  //     setPatientData(res);
  //   });
  // };
  return (
    <React.Fragment>
      {/* {patientData.map((item) => (
        <React.Fragment key={item?._id}> */}
      <Layout>
        <HeadPart
          title={"Best Patient Management Software for Clinics | Easecare"}
          description={
            "Explore our Patient Management Software for medical practices, clinic management, doctor profiles, patient records, & consultations. Discover how it can enhance your practice."
          }
          pageLink={slug}
          imageUrl="images/ogImage/PatientManagementSoftware.png"
        />
        {/* <HeroComp data={item.heroComp} /> */}
        <PatientManagmentBanner data={patientBannerData} />
        <BenefitPatients data={patientBenefits} />
        {/* <CardsGroups data={item.PatientBenefits} /> */}
        <Divider />
        <ContactUsPatients
          image={contactImg}
          content="Want to explore the optimum benefits of the best patient data management system?"
          btnText="Contact us today"
          link={"contact"}
          alt="Patient management software"
        />
        {/* <ContactSection data={item.ContactFormOne} /> */}
        {/* <CardsGroups data={item.ExploringPatientManagement} /> */}
        <div style={{ margin: "50px 0px" }}>
          <VarientTypes TypesVarientData={TypesVarientData} />
        </div>
        {/* <MultiColorCardSec data={item.FeaturesOfPatientManagement} /> */}
        <FeaturesPatient data={featureData} />
        <div style={{ margin: "30px 0px" }}>
          <ContactUsPatients
            image={featureImg}
            content="Want to explore more features? Contact EaseCare-Clarity today and get a free demo!"
            btnText="Contact us today"
            link={"contact"}
            alt="Patient management software"
          />
        </div>
        {/* <ContactSection data={item.ContactFormTwo} /> */}
        {/* <ChallangeFaced data={item.challangeFaced} /> */}
        <ChallangeFaced />
        <SelectRight data={patientRightData} />
        {/* <NavDetailsSection data={item.selectRightPatient} /> */}
        <div className="my-6">
          <ContactUsPatients
            image={cuateImg}
            content="Finding the best clinic patient management system? EaseCare-Clarity is your destination. Reach out to us and you will not regret your decision!"
            btnText="Get a free Demo"
            link={"book-a-demo"}
            alt="Patient management software"
          />
        </div>
        {/* <ContactSection data={item.ContactFormThree} /> */}
        {/* <CardsGroups data={item.WhyChoosePatientManagement} /> */}
        <div style={{ backgroundColor: "#FCFBF6" }}>
          <BenefitPatients data={BestPracticeData} />
        </div>
        <FAQs />
        {/* <AccordianSections data={item.accordienSec} /> */}
        <Testimonail />
        <CtaSection />
      </Layout>
      {/* </React.Fragment>
      ))} */}
    </React.Fragment>
  );
};

export default PatientManagement;
