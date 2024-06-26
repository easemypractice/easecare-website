import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import React from "react";
import FeaturesPreviewImage from "@/images/ogImage/practiceManageOg.svg";
import PatientManagmentBanner from "@/component/patientManagement/banner";

import BenefitPatients from "@/component/patientManagement/banefits";
import ContactUsPatients from "@/component/patientManagement/contactUsPatient";
import Divider from "@/component/patientManagement/divider";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import contactImg from "@/images/contactPanaImg.svg";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import bgImg from "@/images/practiceBanner.png";
import FeaturePractice from "@/component/patientManagement/featuresPractice";
const practiceManagementData = [
  {
    bgImg: bgImg,
    maxWidth: "maxWidth-55r",
    subHeading: "Patient Management System",
    HeadingFirst: "Practice Management Software",
    // HeadingSecound: "Software System?",
    description:
      "Practice Management Software makes it easy and seamless for clinics, from managing administrative tasks to taking care of their business. From appointments to billing and keeping track of every data of patients, all can be managed in one place with the help of the best Practice Management Software helping clinics not only manage tasks more efficiently and quickly but also reduce extra costs by reducing the need for dependency on human resources",
  },
];

const practiceBenefits = [
  {
    HeadingFirst: "Benefits of Taking Software",
    HeadingSec: "for Healthcare Management",
    para: "Let’s take a look at the prominent benefits of practice management software",
    maxWidth: "maxWidth-45r p-5",
    cardType: "benefit",
    paraClass: "pb-50",
    benefitData: [
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "teenyicons:appointments-outline",
        heading: "Effective and Instant Communication",
        para: "Effective and instant communication is crucial for driving the workforce at your organization. A robust and strong software for healthcare management has the capacity to make thousands of professionals and patients connected with each other.",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "icon-park-outline:bill",
        heading: "Telehealth Video Calls",
        para: "While the internet is dominating every area, healthcare is not behind in it. With telehealth, and video calls you no longer need to wait for a patient to visit you in person to make them realize how good ar your services are.",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "material-symbols-light:patient-list-outline",
        heading: "Safe Payments and Invoicing",
        para: "Concerned about managing the payments, invoicing, and other financial operations? EaseCare’s medical practice management software makes you tension-free with its versatile role that goes from patient management to billing and invoicing.",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "charm:shield-tick",
        heading: "Reports and Analytics",
        para: "Data is the power today. Our software harnesses the power of this fact and enable you to make informed and result-oriented decisions based on extensive personalized reports and analytics.",
      },
    ],
  },
];

const howToUseSoftware = [
  {
    HeadingFirst: "How Can You Use Practice ",
    HeadingSec: "Management Software",
    maxWidth: "maxWidth-45r",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "mdi:offline",
        heading: "On-Premise (Offline) Practice Management Software",
        para: "You can consider On-premise practice management software if you have a small medical setting and a dedicated professional to look after all the data. The on-premise practice management software is the best choice for clinics that are looking for good medical practice management software without the need for the Internet",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "material-symbols:cloud-outline",
        heading: "Cloud-based Practice Management Software",
        para: "If you have a quite large medical setting or clinic, you should opt for a cloud-based practice management software that stores all your data on a remote server and you will need a good internet connection to access this data",
      },
    ],
  },
];

const TypesVarientData = {
  HeadingFirst:
    "Reasons to Implement Healthcare Management Software to Improve Your Health Practice",
  cardType: "varient",
  maxheadingWid: "max-width-full",
  CardData: [
    {
      icon: "carbon:ibm-event-automation",
      heading: "Streamline Operations",
      description:
        "From automating appointments to administration, billing, and invoicing, various healthcare management systems are versatile in their job roles. One of the best advantages of having medical management software is that you can streamline various operations with the same tool",
    },
    {
      icon: "teenyicons:appointments-outline",
      heading: "Makes Appointment Booking Easy",
      description:
        "Having healthcare software solutions allows you to seamlessly schedule appointments according to the convenience and time of your patients. It also helps you reduce no-shows through automated reminders to your patients",
    },
    {
      icon: "healthicons:communication-outline",
      heading: "Enhanced Communication",
      description:
        "Healthcare management system software plays an important role in revolutionizing and enhancing communication at your clinic. Make all the professional communication process fun with time-saving letters and email templates according to your clients or recipients",
    },
    {
      icon: "carbon:report",
      heading: "Simplify Invoice Creation & Billing",
      description:
        "Billing is one of those tasks that are tedious as well as complex. Make this easier with the best practice management software that will help you easily create invoices and bills. The software will save you a lot of time as it will automatically send the invoices and bills to the patients",
    },
    {
      icon: "mage:health-square",
      heading: "Manage Patient Records",
      description:
        "The medical world has a dynamic nature as you come across various patients and clients. Healthcare Management services help you keep a record of every detail about your patients from their contact no and health conditions to their latest treatments so that you can offer them the best services",
    },
    {
      icon: "carbon:document-requirements",
      heading: "Efficient Reporting",
      description:
        "Having a dedicated healthcare practice management software provides you with the best record of data and analyzing it in real-time while giving you suggestions by analyzing the current scenario which improves your decision-making abilities",
    },
  ],
};

const practiceRightsData = {
  Heading: "How to Select the Right Patient Management Software?",
  RightData: [
    {
      path: "time-management",
      listItem: "Team Management",
      ListData:
        "No matter how large, manage your team with the best strategies you are provided with the healthcare management software. Software for healthcare management helps you in staff scheduling, task assignments, and better communication.",
      Icon: "wi:time-9",
    },
    {
      path: "efficient-payment",
      listItem: "Efficient Payment Processing",
      ListData:
        "With the best software for healthcare management, you are able to simplify payment collection and processing.",
      Icon: "hugeicons:google-doc",
    },
    {
      path: "comprehensive-report",
      listItem: "Comprehensive Reporting",
      ListData:
        "Practice Management Software gives you the opportunity to analyze all the strategies and activities to measure their effectiveness through various reports and analytics.",
      Icon: "cil:money",
    },
    {
      path: "increased-patient-care",
      listItem: "Increased Patient Care",
      ListData:
        "Larger practice means having thousands of patients visiting your organization on a daily basis. Practice management software helps you enhancing your image in the eyes of your patients with personalized care.",
      Icon: "carbon:touch-interaction",
    },
  ],
};

const BestPracticeData = [
  {
    maxWidth: "max-width-full",
    HeadingClass: "py-10",
    HeadingFirst: "How Useful is Healthcare Management",
    HeadingSec: "Software for Larger Practices",
    cardType: "practice",
    benefitData: [
      {
        icon: "lucide:clock-9",
        iconColor: "#8512E0",
        heading: "Team Management",
        description:
          "No matter how large, manage your team with the best strategies you are provided with the healthcare management software. Software for healthcare management helps you in staff scheduling, task assignments, and better communication",
      },
      {
        icon: "fluent:payment-48-regular",
        iconColor: "#19BB7D",
        heading: "Efficient Payment Processing",
        description:
          "With the best software for healthcare management, you are able to simplify payment collection and processing",
      },
      {
        icon: "carbon:document-requirements",
        iconColor: "#3278B1",
        heading: "Comprehensive Reporting",
        description:
          "Practice Management Software gives you the opportunity to analyze all the strategies and activities to measure their effectiveness through various reports and analytics",
      },
      {
        icon: "oui:app-monitoring",
        iconColor: "#08C7FB",
        heading: "Increased Patient Care",
        description:
          "Larger practice means having thousands of patients visiting your organization on a daily basis. Practice management software helps you enhancing your image in the eyes of your patients with personalized care",
      },
    ],
  },
];

const PracticeManagement = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity - Practice management software "}
        description={
          "From scheduling appointments to billing, we understand a clinic's hustle. Revolutionize the business of your clinic with our latest and advanced practice manage."
        }
        imageUrl={FeaturesPreviewImage}
      />
      <PatientManagmentBanner data={practiceManagementData} />
      <BenefitPatients data={practiceBenefits} />
      <Divider />
      <ContactUsPatients
        image={contactImg}
        content="I’m sure you are also looking for a way how to make your clinic operations effective and seamless while reducing costs and enhancing profits."
        btnText="Contact us today"
        link={"contact"}
      />
      <VarientTypes TypesVarientData={TypesVarientData} />
      <div className="my-6">
        <ContactUsPatients
          image={featureImg}
          content="While you have learned why your clinic needs practice management software. Know here how to get the best one"
          btnText="Book a Demo"
          link={"book-a-demo"}
        />
      </div>
      <FeaturePractice />
      <div className="mb-2 mt-2">
        <ContactUsPatients
          image={cuateImg}
          content="Explore the optimum use of practice management software for your organization"
          btnText="Get a free Demo"
          link={"book-a-demo"}
        />
      </div>
      <div style={{ padding: "00px 0px 50px" }}>
        <BenefitPatients data={howToUseSoftware} />
      </div>
      <SelectRight data={practiceRightsData} />
      <div style={{ backgroundColor: "#FCFBF6", marginTop: "30px" }}>
        <BenefitPatients data={BestPracticeData} />
      </div>
      <div className="my-6">
        <ContactUsPatients
          image={cuateImg}
          content="Want to turn your clinic into a success story?  EaseCare - Clarity is here to help you with the best healthcare software solutions"
          btnText="Get a free Demo"
          link={"book-a-demo"}
        />
      </div>
    </Layout>
  );
};

export default PracticeManagement;
