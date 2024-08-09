import { Layout } from "@/app/layout";
import React, { useEffect, useState } from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/patientManagement/banner";
import bgImg from "@/images/offlineSoftware.png";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import BenefitPatients from "@/component/patientManagement/banefits";
import FeaturesPatient from "@/component/patientManagement/featurePatients";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import ContactUsPatients from "@/component/patientManagement/contactUsPatient";
import BenefitCard from "@/component/patientManagement/banefits/benefitCard";
import { useRouter } from "next/router";
import { getFeatureData } from "@/utils/service";
import HeroComp from "@/component/feature/HeroComp";
import CardsGroups from "@/component/feature/benefitCards";
import ContactSection from "@/component/feature/contactSection";
import MultiColorCardSec from "@/component/feature/multiColorCard";
import NavDetailsSection from "@/component/feature/navDetailsSection";
import Testimonail from "@/component/home/testimonial";
import CtaSection from "@/component/home/cta";
const Bannerdata = [
  {
    maxWidth: "max-width-full p-5",
    bannerStyle: "align-center",
    bgImg: bgImg,
    HeadingFirst: "Offline Clinic Management Software",
    // HeadingSecound: "Practice Management",
    description:
      "While cloud-based software and systems are getting popular in this fast-tech and digital world, you can sometimes have difficulty with them because of network issues. Therefore, EaseCare provides you with the best offline practice management software in India, to keep all your data not only safe but ready on the go",
  },
];
const SimpleAppoinmentFixing = [
  {
    HeadingClass: "max-width-full",
    HeadingFirst: "Simple Appointment Fixing",
    // paraClass: "pb-40",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "teenyicons:appointments-outline",
        IconWidth: "30",
        heading: "Make your appointments fast with simple and easy designs",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "icon-park-outline:check-correct",
        IconWidth: "33",
        heading: "Keep your schedule organized and simple",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "streamline:waiting-appointments-calendar",
        IconWidth: "30",
        heading: "Schedule daily, weekly, and monthly appointments",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "solar:document-add-outline",
        heading: "Handle recurring appointments easily without any hassle",
        IconWidth: "35",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "healthicons:communication-outline",
        heading:
          "Send SMS regarding appointments and schedule changes to patients",
        IconWidth: "55",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:google-doc",
        heading: "Option to maintain separate calendars for individual doctors",
        IconWidth: "35",
      },
    ],
  },
];
const BenefitsOfOfflineSOftware = {
  HeadingFirst: "Benefits of Offline Software in",
  HeadingSec: "Healthcare Settings",
  HeadingClass: "max-width-full py-10",
  Para: "Following are some of the significant benefits of offline software for healthcare settings",
  ParaClass: "pb-40",
  CardData: [
    {
      icon: "hugeicons:internet",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      IconWidth: "33",
      heading: "No Internet Dependency",
      headingClass: "max-width-full",
      description:
        "With offline clinic management software, you don’t require a good internet connection. All the data remains safe and accessible even without the internet",
    },
    {
      icon: "solar:document-add-outline",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "33",
      headingClass: "max-width-full",
      heading: "Specification",
      strockWidth: "1",
      description:
        "Offline software is specifically for small clinics to manage specific niches and areas of the clinic",
    },
    {
      icon: "carbon:security",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      IconWidth: "33",
      // IconHeight: "30",
      headingClass: "max-width-full",
      heading: "Data Security",
      description:
        "While this technical age is all about cyber crimes and data breaches, keep all your data safe and secure with our offline clinic management software",
    },
    {
      icon: "carbon:money",
      bgColor: "#FFF2DD",
      IconWidth: "30",
      IconbgColor: "#FAE2BB",
      heading: "Cost Savings",
      headingClass: "max-width-full",
      description:
        "An offline clinic management software cuts your costs on internet connection and a good cloud-based online software",
    },
  ],
};
const ImportanceOfEfficientClinicManagement = {
  HeadingFirst: "The Importance of Efficient",
  HeadingSec: "Clinic Management",
  para: "The biggest perk of efficient clinic management is increased efficiency as you can streamline various tasks with the help of robust offline software for doctors and clinics. From automating tasks to optimizing appointment scheduling to maintaining accurate patient records when accuracy and efficiency work together through our offline practice management software, we ensure that your business automatically reaches a top level and stays consistent",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "grommet-icons:task",
      IconWidth: "35",
      heading: "Manage & Streamline various Tasks",
      description:
        "Manage your clinic efficiently and streamline various tasks from appointment scheduling, and inventory control to revenue management",
    },
    {
      icon: "ph:hospital",
      heading: "Efficient Clinic Management ",
      IconWidth: "35",
      description:
        "Clinics focus on attracting more and more patients and enhancing patient satisfaction, efficient clinic management helps you achieve this",
    },
    {
      icon: "carbon:money",
      IconWidth: "35",
      heading: "Manage Finance & Goals",
      description:
        "Efficient clinic management is a big solution for small clinics to help them manage their financial status and goals",
    },
    {
      icon: "material-symbols-light:clinical-notes-outline",
      heading: "Integration with EHR",
      IconWidth: "40",
      description:
        "Offline medical practice management software integrated with the Electronic Health Records system helps you manage patient data with security.",
    },
  ],
};
const EasyBilling = {
  HeadingFirst: "Easy Billing",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "carbon:money",
      IconWidth: "35",
      heading: "Cost Effective",
      description:
        "Offline clinic management software makes you save a lot of money as you don’t need to invest in a good internet system",
    },
    {
      icon: "hugeicons:google-doc",
      heading: "Reducing Paper-based costs",
      IconWidth: "35",
      description:
        "Offline practice management software helps you save a lot of money by cutting down the paper-based costs",
    },
    {
      icon: "solar:document-add-outline",
      IconWidth: "50",
      heading: "Cutting out the Clutter",
      description:
        "Offline software for doctors and clinics only contains the specific features that are required for your clinic cutting out the clutter",
    },
    {
      icon: "carbon:document-requirements",
      heading: "Payments Records",
      IconWidth: "40",
      description: "Keep a record of due payments through emails and reminders",
    },
  ],
};

const robustInventoryManagement = {
  ParaClass: "p-0",
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Robust Inventory Management",
  Para: "At EaseCare, we have one of the Best Offline Practice Management Software which can be used for multiple purposes. Following are some of the ways how it helps you manage a robust inventory for your clinic",
  RightData: [
    {
      path: "1",
      listItem: "Keep Track of Everything",
      IconWidth: "40",
      IconHeight: "40",
      ListData:
        "From minor to major, keep track of you have everything available on the spot with our offline medical clinic management software",
      Icon: "hugeicons:audit-02",
    },
    {
      path: "2",
      listItem: "Access without Internet",
      IconWidth: "40",
      IconHeight: "40",
      ListData:
        "As offline software for doctors and clinics doesn’t require internet, it not only saves the cost but is a great tool for all the clinics which are situated at distant locations where the internet can not be accessed.",
      Icon: "hugeicons:internet",
    },
    {
      path: "3",
      listItem: "Efficient Data Management ",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "An offline clinic management software helps clinics store their data while giving them a central stage. From patient records, appointment schedules, and inventory details. clinics can store all the data within a single application.",
      Icon: "grommet-icons:task",
    },
    {
      path: "4",
      listItem: "Secure ",
      IconWidth: "40",
      IconHeight: "40",
      ListData:
        "When we talk about offline practice management software, they are more secure than online ones because they do not rely on any external server.",
      Icon: "carbon:security",
    },
  ],
};

const WhyOfflineClinic = [
  {
    HeadingClass: "max-width-55r py-10",
    HeadingFirst: "Why Offline Clinic",
    HeadingSec: "Management Software",
    paraClass: "pb-40",
    para: "Wondering why to choose offline clinic management software in this age of technology and the Internet? Following are some of the reasons you need to look at:",
    cardType: "practice",
    // cardClass: "grid-cols-3",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "teenyicons:contact-outline",
        heading: "Easy-to-Use",
        iconColor: "#8512E0",
        IconWidth: "35",
        // IconHeight: "35",
        description:
          "When it comes to offline practice management software, they are comparatively easier than online software as it have limited features with a simple interface",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:money",
        iconColor: "#19BB7D",
        IconWidth: "33",
        heading: "Cost Effective",
        description:
          "Cost-effectiveness is one of the notable features when you decide to take even one of the best offline practice management software to elevate your clinic",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:service",
        iconColor: "#3278B1",
        IconWidth: "55",
        heading: "Enhanced Patient Care",
        description:
          "As there are specific features in an offline clinic management software that revolves around your patients, it helps you enhance patient care",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "solar:health-broken",
        iconColor: "#08C7FB",
        IconWidth: "45",
        heading: "Advanced Features",
        description:
          "Some of the offline software for doctors and clinics is equipped with advanced features like integrated image processing, instant search advancements, or mobile accessibility.",
      },
    ],
  },
];
const OfflineSoftwareForPractice = () => {
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
      {/* {data.map((item) => (
        <React.Fragment key={item?._id}> */}
      <Layout>
        <HeadPart
          title={"Offline Clinic Management Software | Easecare clarity"}
          description={
            "The most specific features that would revolutionize the workforce of your clinic? Our offline clinic management software manages your practice offline to get shrink online."
          }
          pageLink={slug}
          imageUrl="images/ogImage/OfflineSoftwareforDoctorsClinic.png"
        />
        {/* <HeroComp data={item.heroComp} />
            <CardsGroups data={item.simpleAppoinmentFixing} />
            <ContactSection data={item.contactFormOne} />
            <CardsGroups data={item.easyBilling} />
            <MultiColorCardSec data={item.benefitsOfOfflineSoftware} />
            <ContactSection data={item.contactFormTwo} />
            <NavDetailsSection data={item.robustInventory} />
            <CardsGroups data={item.importanceOfEfficientClinic} />
            <CardsGroups data={item.whyOfflineClinic} /> */}
        <PatientManagmentBanner data={Bannerdata} />
        <div style={{ paddingTop: "50px" }}>
          <BenefitPatients data={SimpleAppoinmentFixing} />
        </div>
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Want to discover the best offline practice management software?"
            btnText="Get a free Demo"
            alt={"offline clinic management software"}
          />
        </div>
        <div
          style={{
            paddingBottom: "70px",
            backgroundColor: "#FCFBF6",
          }}
        >
          <VarientTypes TypesVarientData={EasyBilling} />
        </div>
        <FeaturesPatient data={BenefitsOfOfflineSOftware} />
        <div className="my-6">
          <ContactUsPatients
            image={cuateImg}
            content="Know more about the advantages of the best offline medical practice management software"
            btnText="Get a free Demo"
            alt="offline clinic management software"
          />
        </div>
        <SelectRight data={robustInventoryManagement} />
        <div
          style={{
            paddingBottom: "70px",
            backgroundColor: "#FCFBF6",
          }}
        >
          <VarientTypes
            TypesVarientData={ImportanceOfEfficientClinicManagement}
          />
        </div>
        <div style={{ backgroundColor: "#FCFBF6", paddingBottom: "50px" }}>
          <BenefitPatients data={WhyOfflineClinic} />
        </div>
        <Testimonail />
        <CtaSection />
      </Layout>
      {/* </React.Fragment>
      ))} */}
    </React.Fragment>
  );
};

export default OfflineSoftwareForPractice;
