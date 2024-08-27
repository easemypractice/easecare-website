import { Layout } from "@/app/layout";
import HeadPart from "@/component/Head/head";
import React from "react";
import PatientManagmentBanner from "@/component/featuresComp/banner";
import styles from "@/styles/Patient.module.css";
import BenefitPatients from "@/component/featuresComp/banefits";
import ContactUsPatients from "@/component/featuresComp/contactUsPatient";
import VarientTypes from "@/component/featuresComp/varientsTypes";
import FeaturesPatient, {
  FeaturesCard,
} from "@/component/featuresComp/featurePatients";
import featureImg from "@/images/featureImg.svg";
import SelectRight from "@/component/featuresComp/selectRightPatient";
import bgImg from "@/images/ClinicBg.png";
import { useRouter } from "next/router";
import Testimonail from "@/component/home/testimonial";
import CtaSection from "@/component/home/cta";
const clinicBannerData = [
  {
    maxWidth: "maxWidth-80 p-5",
    bgImg: bgImg,
    HeadingFirst: "Clinic Management",
    HeadingSecound: "Software Solutions",
    description:
      "Do you have a clinic or are you a healthcare professional with a small team? Then you should surely know about this amazing software called Clinic Management System (CMS), which will change the whole scenario in which daily activities at your clinic go on. Clinic Management Software is a tool that automates all the operations that are the daily routine of your clinic. From appointment scheduling, patient registration, and medical billing, to inventory management.   So, if you are a small clinic, you don’t have to pay people for each different task when you can do all these things with the help of software",
  },
];

const clinicBenefits = [
  {
    HeadingClass: "max-width-full py-10",
    HeadingFirst: "Why is it Important to Streamline",
    HeadingSec: "Operations in a Clinic",
    paraClass: "pb-40",
    para: "Streamlining all of the operations in the clinic has multifacet benefits from making the optimum use of resources to making various departments coordinate with each other effectively",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:task",
        heading: "Enhanced efficiency and reduced workload",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:user-expert",
        heading: "Better utilization of resources and manpower",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:service",
        heading:
          "A smoother experience for patients from the ambiance to services",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:security",
        heading:
          "CMS provides secure storage and easy retrieval of electronic health records (EHRs)",
      },
    ],
  },
];
const BestPracticeData = [
  {
    maxWidth: "maxWidth-55r",
    HeadingClass: "py-10",
    HeadingFirst: "Considerations Before",
    HeadingSec: "Implementing Clinic Software",
    cardType: "practice",
    para: "Need help with how to choose the best clinic management software? Following are some of the things you need to keep in mind",
    benefitData: [
      {
        icon: "carbon:money",
        iconColor: "#8512E0",
        heading: "Budget constraints",
        description:
          "The budget can be one of the top and most significant constraints when it comes to implementing a robust clinic patient management software",
      },
      {
        icon: "material-symbols-light:inbox-customize-outline-sharp",
        iconColor: "#19BB7D",
        heading: "Scalability and Customization Options",
        description:
          "The demands of each business and medical setting are different and thus, each of them will need specific solutions. EaseCare focuses on providing specific and personalized solutions",
      },
      {
        icon: "fluent:person-support-24-regular",
        iconColor: "#3278B1",
        heading: "Technical Support",
        description:
          "At EaseCare, our services don’t end up with only the implementation of the best and well-researched and best clinic management system software. We are here to help you any time even after the service",
      },
      {
        icon: "tdesign:system-interface",
        iconColor: "#08C7FB",
        heading: "User-Friendly Interface",
        description:
          "It is a must-check feature because when you take a clinic management system software, you will have to think that your staff, healthcare professionals, and patients are all able to navigate through it seamlessly",
      },
    ],
  },
];

const TypesVarientData = {
  HeadingFirst: "The Challenges in Managing a Clinic",
  HeadingSec: "Without a Clinic Management System",
  HeadingClass: "max-width-full",
  para: "A robust clinic management system software helps you overcome various challenges, some of them are as follows",
  cardType: "varient",
  CardData: [
    {
      icon: "teenyicons:appointments-outline",
      heading: "Inefficient Appointment Scheduling",
      description:
        "Inefficient appointment scheduling makes you miss potential patients that would make you maximum profit",
    },
    {
      icon: "quill:paper",
      heading: "Paper-Based Workflows",
      description:
        "With a paper-based workflow, you will have the difficulty of storing the documents safely for a long time",
    },
    {
      icon: "carbon:report",
      heading: "Data Management Challenges",
      description:
        "With proper cloud patient management software, it will be easier for a clinic to manage the data of not only one-time visiting patients but also their regular patients",
    },
    {
      icon: "icon-park-outline:bill",
      heading: "Inefficient Billing and Insurance Processing",
      description:
        "Billing is a daunting task that can be complex. A robust clinic management system software helps you with complex tasks like billing and multiple payment options",
    },
  ],
};
const BenefitClinicManagementData = {
  HeadingFirst: "Benefits of Clinic",
  HeadingSec: "Management Software",
  para: "An advanced clinic management system has multiple advantages",
  cardType: "varient",
  CardData: [
    {
      icon: "vaadin:health-card",
      heading: "Enhanced patient experience",
      description:
        "hen there is an automated and pre-scheduled process without any delay, it provides the customers and patients with a pleasant experience",
    },
    {
      icon: "clarity:error-line",
      colorIcon: "#19BB7D",
      heading: "Reduced errors and redundancies",
      description:
        "While Medical data is complex, medical clinic software provides accuracy along with completing the tasks in no time",
    },
    {
      icon: "carbon:data-bin",
      colorIcon: "#08C7FB",
      heading: "Better decision-making through data analytics",
      description:
        "Software keeps a record of complex medical data making it easier for the healthcare experts to maintain the medication process",
    },
    {
      icon: "icon-park:application-effect",
      colorIcon: "#3278B1",
      heading: "Increased efficiency",
      description:
        "Online clinic software drastically increases the efficiency, speed, and accuracy of various tasks",
    },
  ],
};

const cinicManagementData = {
  HeadingClass: "p-0",
  ParaClass: "p-0",
  HeadingFirst: "Features of Clinic",
  HeadingSec: "Management Software?",
  Para: "Before finalizing the best clinic management software for your clinic, it is essential to ensure that the software has all the essential features for your clinic",
  RightData: [
    {
      path: "clinic-billing",
      listItem: "Clinic Billing Solution",
      ListData:
        "Billing is one of the most complex subjects for small clinics. While you will be focusing on earning more and more profit, you will look forward to minimizing the cost throughout various operations.",
      Icon: "solar:bill-linear",
    },
    {
      path: "appoinment-reminder",
      listItem: "Automated Appointment Reminders",
      ListData:
        "Even one first visit can make you meet a potential patient. While managing thousands of patients and visits in a single day becomes hectic, automated appointment reminders make you never miss out on any of your patients.",
      Icon: "carbon:reminder",
    },
    {
      path: "invoice-generation",
      listItem: "Automated Invoice Generation",
      ListData:
        "While invoices are one of the crucial elements for your organization, creating them is a daunting task. Invoices should be accurate as they lay out your services along with the tax and regulations you follow. Go for a clinic management system software that is perfect for invoice generation.",
      Icon: "iconamoon:invoice-thin",
    },
    {
      path: "inventrory",
      listItem: "Inventory Management",
      ListData:
        "Keeping track of all the supplies in your clinic is essential and making sure that you don’t run any of them when you require them the most is crucial.",
      Icon: "material-symbols-light:inventory-sharp",
    },
  ],
};

const whyClinicData = {
  HeadingFirst: "Why do Clinics Need Clinic",
  HeadingClass: "max-width-full p-5",
  HeadingSec: "Management Systems",
  ParaClass: "pb-40",
  Para: "Your clinic needs a clinic management system. Let’s take a look at some points on why your clinic needs a clinic management system",
  CardData: [
    {
      icon: "teenyicons:appointments-outline",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      heading: "Automated appointment alerts and rescheduling features",
      headingClass: "max-width-full",
      description:
        "Never miss out on your patients with continuous appointment reminders and appointment rescheduling features",
    },
    {
      icon: "lets-icons:paper-light",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      headingClass: "max-width-full",
      heading: "Access to printed prescriptions and health records",
      description:
        "While EHR software is the norm today, there can be technical glitches and network issues at times. Printed prescriptions and health records are your savior in such times",
    },
    {
      icon: "icon-park-outline:bill",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      headingClass: "max-width-full",
      heading: "Contactless billing and payments",
      description:
        "Contactless billing is an automated process that not only saves your time but also reduces the errors that take place in manual billing and financial processing",
    },
    {
      icon: "codicon:feedback",
      bgColor: "#FFF2DD",
      IconbgColor: "#FAE2BB",
      headingClass: "max-width-full",
      heading: "The ability to leave private feedback",
      description:
        "Offer your patients personalized services as you can leave private feedback for each of them through customizable templates",
    },
    {
      icon: "carbon:dashboard",
      bgColor: "#FFE9E2",
      IconbgColor: "#8512E01A",
      heading: "Improved the patient experience",
      headingClass: "max-width-full",
      description:
        "From automating and rescheduling appointments to accurately completing complex processing like billing and finances, when the processes are fast, efficient, and accurate, the overall patient experience will be enhanced",
    },
    {
      icon: "carbon:security",
      bgColor: "#E0E1FD",
      IconbgColor: "#08C7FB1A",
      heading: "Data security is the primary motive",
      headingClass: "max-width-full",
      description:
        "With the digitalized record-keeping and data security features of the advanced clinic management software, you can win the trust of your patients",
    },
  ],
};

const AdvantageData = [
  {
    icon: "uil:book-medical",
    bgColor: "#D3F2E6",
    IconbgColor: "#19BB7D1A",
    heading: "Customizable Templates for Diverse Medical Specialties",
    headingClass: "max-width-full",
    description:
      "EaseCare’s clinic management system software is designed to keep the requirements of various types and sizes of clinics in mind. From patients to various specialties in your organization, you get customizable, clear, and extensive templates to manage things in a clear manner",
  },
  {
    icon: "hugeicons:analytics-02",
    bgColor: "#FFF2DD",
    IconbgColor: "#FAE2BB",
    heading: "Advanced Analytics for Better Decision-Making",
    headingClass: "max-width-full",
    description:
      "With ever-increasing competition, EaseCare’s online clinic management system makes better decisions in the favor of your organization, staff, and patients as it provides extensive analytics on each and everything.",
  },
  {
    icon: "guidance:24-hours",
    bgColor: "#E0E1FD",
    IconbgColor: "#08C7FB1A",
    heading: "24/7 Customer Support and Easy Onboarding",
    headingClass: "max-width-full",
    description:
      "We are not only the best when it comes to the best clinic system management software but when it comes to our customers, they matter to us the most. From your first contact with us to the training and post-implementation services, we are always here to help you with the best solutions.",
  },
];

const ClinicManagement = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");

  return (
    <React.Fragment>
      <Layout>
        <HeadPart
          title={"Clinic Management Software for Automating Clinic Tasks"}
          description={
            "Easecare Clarity offers online clinic management software to enhance healthcare efficiency. Explore its comprehensive features and benefits."
          }
          imageUrl="images/ogImage/ClinicManagementSoftware.png"
          pageLink={slug}
        />
        <PatientManagmentBanner data={clinicBannerData} />
        <BenefitPatients data={clinicBenefits} />
        <VarientTypes TypesVarientData={TypesVarientData} />
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Want to know how clinic management software helps you manage your clinic"
            btnText="Get a Free Demo"
            link={"book-a-demo"}
            alt={"clinic management system software"}
          />
        </div>
        <FeaturesPatient data={whyClinicData} />
        <VarientTypes TypesVarientData={BenefitClinicManagementData} />
        <div className="my-6">
          <SelectRight data={cinicManagementData} />
        </div>
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Revolutionize the workforce of your clinic with all these essential features in one software with EaseCare"
            btnText="Get a free Demo"
            link={"book-a-demo"}
            alt={"clinic management system software"}
          />
        </div>
        <div style={{ backgroundColor: "#FCFBF6" }}>
          <BenefitPatients data={BestPracticeData} />
        </div>
        <div className="my-6">
          <div className="container">
            <div className={styles.CardGrp}>
              <FeaturesCard data={AdvantageData} />
            </div>
          </div>
        </div>
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Explore the best and most cost-effective clinic management software with us"
            btnText="Get a free Demo"
            link={"book-a-demo"}
            alt={"clinic management system software"}
          />
        </div>
        <Testimonail />
        <CtaSection />
      </Layout>
    </React.Fragment>
  );
};

export default ClinicManagement;
