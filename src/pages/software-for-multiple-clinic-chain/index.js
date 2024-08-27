import { Layout } from "@/app/layout";
import React from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/featuresComp/banner";
import bgImg from "@/images/softwareMultiBanner.png";
import featureImg from "@/images/featureImg.svg";
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
const multiClinicBanner = [
  {
    maxWidth: "max-width-full p-5",
    bannerStyle: "align-center",
    bgImg: bgImg,
    HeadingFirst: "Software for Multiple Clinic Chains",
    description:
      "Do you have multiple clinics across various geographics? Then it must often bother you how you will handle all those making sure that each one of them works very well and gains optimum results",
  },
];
const advanceSolution = [
  {
    HeadingClass: "max-width-90",
    HeadingFirst: "We are here with the Advanced",
    HeadingSec: "Solutions for your complex problems",
    // paraClass: "pb-40",
    // para: "Following are some of the benefits that demand you to implement hospital management  software to streamline your medical operations",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:map",
        heading: "Manage Geographically Distributed Clinics",
        para: "We offer you an advanced solution to manage hundreds of clinics no matter if they are in the same vicinity or in different localities. Just connect with us and manage multiple clinics using healthcare software seamlessly",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:audit-02",
        heading: " Centralized Monitoring & Auditing",
        para: "While monitoring and auditing for a single clinic itself is too challenging in the current times, multi-doctor clinic software makes it easy for you to take care of accurate and proactive monitoring and auditing for your multiple clinics",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:network-enterprise",
        heading: "Enterprise Ready",
        para: "Our online software for clinic chains goes beyond the size of your organization and can handle a vast pool of data along with analyzing it to make you make decisions and strategies to get your desired results",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:task",
        heading: "Result-Oriented Decision Making",
        para: "With analytics and reports, you can take care of each and every aspect of your clinics from revenue to customer satisfaction with the help of result-oriented decisions",
      },
    ],
  },
];
const clinicSoftwareSolution = {
  HeadingFirst: "Clinic Software Solution for",
  HeadingSec: "Managing Multi-Chain Clinics",
  HeadingClass: "max-width-full p-5",
  ParaClass: "pb-40",
  Para: "From managing supplies to paying attention to the queries of the customers and patients and to finances, down are some of the points to help you if you want to take the optimum advantage of the best multi-doctor clinic software",
  CardData: [
    {
      icon: "material-symbols-light:control-point-duplicate-outline",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      heading: "Control and Automate Your Clinical Data",
      headingClass: "max-width-full",
      description:
        "Clinical data is like an asset for clinics to go through all the processes and analyze what are the things that are working in the favor of their business. Cloud software helps you to manage multiple clinics using healthcare software as it automates all your clinical data",
    },
    {
      icon: "streamline:interface-arrows-expand-5-expand-small-bigger-retract-smaller-big",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "25",
      IconHeight: "25",
      headingClass: "max-width-full",
      heading: "Single Interface Access for Increased Productivity",
      strockWidth: "1",
      description:
        "A multiple-chain clinic would require various departments to keep track of everything to ensure better services for their patients. These departments often include Inventory, Pharmacy, front office, MRD, IP, OP, etc. Having robust software not only reduces the need to hire various experts but also increases efficiency as it allows you to manage these departments from a centralized platform",
    },
    {
      icon: "fluent:patient-20-regular",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      IconWidth: "37",
      IconHeight: "37",
      headingClass: "max-width-full",
      heading: "Patient-Centric Communication Interface",
      description:
        "No matter how diverse your services are and how much expertise you have, you will come across various types of patients and their queries and always providing them with a solid resolution is not a small challenge. Our clinic software solution for managing multi-chain clinics helps you achieve this through a patient-centric communication interface",
    },
    {
      icon: "material-symbols-light:responsive-layout-outline",
      bgColor: "#FFF2DD",
      IconWidth: "35",
      IconHeight: "35",
      IconbgColor: "#FAE2BB",
      heading: "Device Adaptability",
      headingClass: "max-width-full",
      description:
        "From smartphones to tablets and computer systems, we understand that there are various devices that people use according to their convenience and we make sure that you don’t miss out on potential customers because of the inability in the device adaptability. Thus, we offer you our clinic chain management software which is adaptable to any device and network",
    },
  ],
};
const ourIntegratedAdminDashboard = {
  HeadingFirst: "One Integrated Admin Dashboard",
  para: "A dashboard is an invaluable asset for an organization as it helps you to understand the overall situation of your clinic from new patients, appointments, earnings, and expenses to the profit by clinics in a day. Check out all the scheduled appointments within this integrated admin dashboard along with checking out the activities throughout all of your clinic chains with the integrated admin dashboard of our online software for clinic chains.Benefits of Integrated Admin Dashboard for Multiple Clinics:",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "carbon:dashboard",
      IconWidth: "30",
      heading: "Enhanced User Experience",
      description:
        "While you have multiple clinics to take care of, patient satisfaction is your primary goal and user experience is one of the most important things you can not ignore. Get the user experience you need to not only attract but for the conversion of a single visit to your clinic",
    },
    {
      icon: "material-symbols-light:event-available-outline",
      heading: "Centralized Management",
      description:
        "The integrated admin dashboard of our clinic chain management software provides you with a centralized platform through which you can manage all the clinics",
    },
    {
      icon: "healthicons:communication-outline",
      IconWidth: "40",
      heading: "Enhanced Communication",
      description:
        "While there is only one centralized platform used across all the clinic chains, communication is enhanced leading to better services",
    },
    {
      icon: "carbon:report",
      heading: "Data-Driven Decisions",
      IconWidth: "35",
      description:
        "As the integrated admin dashboard of our multi-doctor clinic software aggregates data from various sources, you are able to make better decisions",
    },
  ],
};

const centralizedStaffManagement = {
  ParaClass: "p-0",
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Centralized Staff Management",
  Para: "Your staff at various clinics is your strength. They can take your business to the next level or they can ruin the success you attained now. So, it is important to make them feel heard and establish coordination among them so that they work together to offer the best services",
  RightData: [
    {
      path: "1",
      listItem: "Improved Transparency",
      ListData:
        "Improved transparency and communication among your staff make them realize their duties and responsibilities along with understanding how they can take the help of our online software for clinic chains when they feel stuck. It leads to better efficiency",
      Icon: "hugeicons:security-check",
    },
    {
      path: "2",
      listItem: "Improved Consistency",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "When healthcare professionals are able to keep track of everything from all that has been done to what they have to do further, it leads to improved consistency increasing the overall performance of the organization.",
      Icon: "grommet-icons:task",
    },
    {
      path: "3",
      listItem: "Demand of Expertise",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "With our clinic software solution for managing multi-chain clinics, organizations can also use this to encourage healthcare professionals to hone their expertise. The more expertise your healthcare professionals will have, the more your organization will be in demand in the industry.",
      Icon: "grommet-icons:user-expert",
    },
    {
      path: "4",
      listItem: "Cost Reduction",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "When there is transparency over all the operations, there is a huge cut down on the utilization of the time and resources people may invest in repetitive tasks. It cuts down a large amount of expenses.",
      Icon: "teenyicons:cost-estimate-outline",
    },
  ],
};
const whyChooseSoftware = [
  {
    HeadingWidth: "max-width-full text-center",
    icon: "material-symbols-light:clinical-notes-outline",
    heading: "Monitor Bill/Payments Centrally",
    iconColor: "#8512E0",
    IconWidth: "50",
    IconHeight: "50",
    strockWidth: "4",
    description:
      "We understand the moment you decide to operate your multiple clinic chains, monitoring the financial side of the business like bills and payments becomes one of the biggest challenges for you. But don’t worry as you have one of the best clinic software solutions for managing multi-chain clinics. Monitor your bills, payments, and expenses at a central stage to understand the overall pattern through demographics, charts, and data and you will be able to craft the best strategies to cut down these expenses and earn more and more profit with the help of our multi-doctor clinic software",
  },
  {
    HeadingWidth: "max-width-full text-center",
    icon: "icon-park-outline:bill",
    iconColor: "#8512E0",
    IconWidth: "40",
    IconHeight: "40",
    heading: "View EMR Centrally",
    description:
      "It is well-known how much importance the EMR system holds in the healthcare system. You have to look after multiple clinics and manage the performance of your services throughout all the clinics with the help of our online software for clinic chains which centralizes the EMR for all of your clinic chains enhancing the efficiency and performance of the organization.",
  },
];
const SoftwareForMultiChain = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  return (
    <React.Fragment>
      <Layout>
        <HeadPart
          title={"India’s Best Software for Multiple Clinic Chain | Easecare"}
          description={
            "Keep an eye on each of your clinics with our effective software for multiple clinic chains. Manage your clinic chain effectively with Easecare powerful software."
          }
          pageLink={slug}
          imageUrl="images/ogImage/SoftwareForMultipleClinicChains.png"
        />
        <PatientManagmentBanner data={multiClinicBanner} />
        <BenefitPatients data={advanceSolution} />
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="How can you manage multiple clinics with our software for multiple clinics?"
            btnText="Get a free Demo!"
            alt="software for multiple clinic chain"
          />
        </div>
        <FeaturesPatient data={clinicSoftwareSolution} />
        <div
          style={{
            paddingBottom: "70px",
          }}
        >
          <VarientTypes TypesVarientData={ourIntegratedAdminDashboard} />
        </div>
        <div className="my-6">
          <ContactUsPatients
            image={cuateImg}
            content="Explore the benefits of our advanced clinic software solution for managing multi-chain clinics"
            btnText="Get a free Demo"
            alt="software for multiple clinic chain"
          />
        </div>
        <SelectRight data={centralizedStaffManagement} />
        <div
          style={{ backgroundColor: "#FCFBF6", padding: "50px" }}
          className="mobileCol"
        >
          <div className="flex container mobileCol gap-20">
            <BenefitCard cardType={"practice"} data={whyChooseSoftware} />
          </div>
        </div>
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Explore the magic of EaseCare’s clinic software solution for managing multi-chain clinics"
            btnText="Get a free Demo!"
            alt="software for multiple clinic chain"
          />
        </div>
        <Testimonail />
        <CtaSection />
      </Layout>
    </React.Fragment>
  );
};

export default SoftwareForMultiChain;
