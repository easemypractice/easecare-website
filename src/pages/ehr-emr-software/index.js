import { Layout } from "@/app/layout";
import React, { useEffect, useState } from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/patientManagement/banner";
import bgImg from "@/images/ehrbannerbg.png";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import BenefitPatients from "@/component/patientManagement/banefits";
import FeaturesPatient from "@/component/patientManagement/featurePatients";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import ContactUsPatients from "@/component/patientManagement/contactUsPatient";
import DifferenceCard from "@/component/patientManagement/differenceCard";
import { useRouter } from "next/router";
import { getFeatureData } from "@/utils/service";
import HeroComp from "@/component/feature/HeroComp";
import CardsGroups from "@/component/feature/benefitCards";
import ContactSection from "@/component/feature/contactSection";
import MultiColorCardSec from "@/component/feature/multiColorCard";
import NavDetailsSection from "@/component/feature/navDetailsSection";
import Testimonail from "@/component/home/testimonial";
import CtaSection from "@/component/home/cta";
const ehremrBannerData = [
  {
    maxWidth: "max-width-80 p-5",
    bgImg: bgImg,
    bannerStyle: "align-center",
    HeadingFirst: "Advanced Electronic Health Record Software",
    description:
      "An Electronic Health Record or EHR is the digital format of all the patient data from health conditions to demographics and all medical history. The reason why the EHR is promising is that it allows sharing the of patient data from one medical setting to another to enhance the efficiency and success in the treatment of the patient based on the overall overview.",
  },
];
const BenefitEHR = [
  {
    HeadingClass: "max-width-full",
    HeadingFirst: "Benefits of EHR System",
    // paraClass: "pb-40",
    // para: "Following are some of the benefits that demand you to implement hospital management  software to streamline your medical operations",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:service",
        heading: "Improved Patient Care",
        para: "While EHR offers healthcare professionals the facility to access all the patient history easily, it adds the advantage of continuing all the medical processes with precision, improving overall patient care",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:task",
        heading: "Increased Efficiency",
        para: "EHR-EMR software is used for multifaceted purposes like managing patient records, and reducing the time and effort to enter, retrieve, and share information resulting in increasing the overall efficiency",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:dashboard",
        heading: "Improved Patient Engagement",
        para: "Through good electronic medical health records software, patients can easily access all their information and thus, they can be able to provide themselves with proper care even after getting discharged from the medical setting",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:security",
        heading: "Enhanced Privacy and Security",
        para: "A good electronic medical records software focuses on patient privacy and security, making the patients tension-free about whether their information will be shared with any third party",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:money",
        heading: "Cost Savings",
        para: "As medical EMR software streamlines various tasks, it reduces the need to take various tools and the need for large manpower, making healthcare practitioners save a big amount",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "cil:storage",
        heading: "Efficient Storage",
        para: "While you will come across thousands of patients in your clinic, you don’t need to get tensed over how you will manage all the data when you have cloud-based EHR software",
      },
    ],
  },
];
const featuresEHR = {
  HeadingFirst: "EHR Software Features",
  HeadingClass: "max-width-full",
  // ParaClass: "pb-40",
  // Para: "Following are some of the key features of the advanced healthcare management systems",
  CardData: [
    {
      icon: "grommet-icons:user-expert",
      bgColor: "#E8D2F9",
      IconWidth: "30",
      IconbgColor: "#8512E01A",
      heading: "Comprehensive Patient Charts and Records",
      headingClass: "max-width-full",
      description:
        "Along with providing a comprehensive overview of the overall condition and information of the patient, some EMR medical records software can also allow physicians to make personalized templates for each patient to improve care and performance",
    },
    {
      icon: "material-symbols-light:patient-list-outline",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "45",
      IconHeight: "45",
      headingClass: "max-width-full",
      heading: "Patient Portal",
      strockWidth: "1",
      description:
        "Some of the electronic medical health records software also have a web portal from where the patients can get all their information along with clarifying all their queries",
    },
    {
      icon: "carbon:report",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      IconWidth: "37",
      IconHeight: "37",
      headingClass: "max-width-full",
      heading: "Generating Support Documentation",
      description:
        "Some good medical EHR software can generate clinical documentation like individual healthcare plans, guidelines, protocols, etc",
    },
    {
      icon: "material-symbols-light:event-available-outline",
      bgColor: "#FFF2DD",
      IconWidth: "35",
      IconHeight: "35",
      IconbgColor: "#FAE2BB",
      heading: "Processing Claims",
      headingClass: "max-width-full",
      description:
        "Electronic health records software is also a good way to check how your organization is doing in the healthcare sector. It keeps track of the feedback received from your prior patients and focuses on improving the services to work more closely on the prestige of your organization",
    },
  ],
};
const whatEHRSystem = {
  HeadingFirst: "What is an EMR System",
  para: "Electronic Medical Records, commonly known as EMR systems are digital systems that are used to store patient data like treatment and diagnosis information that can be utilized during the treatment process in a single organization. This data can not be shared with other healthcare organizations",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "material-symbols-light:inbox-customize-outline-sharp",
      heading: "Complete Overview",
      IconWidth: "40",
      description:
        "Keep records of each and every single detail of your patients to increase the efficiency and performance of your services during the diagnosis and treatment",
    },
    {
      icon: "fluent-mdl2:custom-list",
      heading: "Fully Customizable",
      IconWidth: "30",
      description:
        "No matter if your clinic is small or you have a large healthcare organization, our EMR system will be one of the best tools you have taken for your organization",
    },
    {
      icon: "carbon:chart-custom",
      heading: "Customizable Templates",
      IconWidth: "30",
      description:
        "Make it more attractive and interesting for your patients through customizable templates no matter if it is an appointment or prescription",
    },
    {
      icon: "streamline:decent-work-and-economic-growth",
      heading: "Growth Charts",
      IconWidth: "30",
      description:
        "Measure the success with built-in growth charts specifically for each of your patients",
    },
    {
      icon: "teenyicons:cost-estimate-outline",
      heading: "Prescription Printout",
      IconWidth: "30",
      description:
        "Offer your patients with colorful and designed printed prescriptions",
    },
    {
      icon: "carbon:reminder",
      heading: "Follow Up Reminders",
      IconWidth: "30",
      description:
        "Keep your patients informed about their next appointments with customizable follow-up reminders",
    },
  ],
};

const TypesOfEHR = {
  ParaClass: "p-0",
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Types of Electronic Health",
  HeadingSec: "Records Systems",
  Para: "To facilitate hospitals, clinics, and private practitioners, there are various types of electronic medical health records software",
  RightData: [
    {
      path: "1",
      listItem: "Physician-Hosted System",
      ListData:
        "Particularly designed for physicians, there will be a need for the physician to purchase all the necessary hardware and software himself along with handling the maintenance and security",
      Icon: "material-symbols-light:dashboard-customize-outline",
    },
    {
      path: "2",
      listItem: "Subsidized Remote System",
      ListData:
        "This is an EMR medical records software facility that can be used when smaller clinics have formed relationships with hospitals or other medical networks. The system can be hosted at the headquarters of the hospital or other medical networks with which these clinics have collaborated and physicians can access this data remotely.",
      Icon: "hugeicons:wireless",
    },
    {
      path: "3",
      listItem: "Dedicated remote system",
      ListData:
        "The dedicated remote system means that the EHR vendor himself will store all the data of the practice on its server and the practitioners can access this data remotely.",
      Icon: "fluent:payment-wireless-28-regular",
    },
    {
      path: "4",
      listItem: "Cloud remote system",
      ListData:
        "The data is stored in the cloud and the medical professionals can get access to this data through the website of the vendor without any responsibility for its maintenance.",
      Icon: "solar:cloud-broken",
    },
  ],
};
const whyChooseSoftware = [
  {
    HeadingClass: "max-width-full",
    HeadingFirst: "Benefits of Using EMR EHR Software for",
    HeadingSec: "Patient and Clinic Management",
    // paraClass: "pb-40",
    cardType: "practice",
    // cardClass: "grid-cols-3",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "codicon:feedback",
        heading: "Extensive Patient Profile",
        iconColor: "#8512E0",
        IconWidth: "35",
        IconHeight: "35",
        strockWidth: "4",
        description:
          "With our EHR-EMR software, you don’t need to waste hours going through patient files. Seamlessly create specific patient profiles and improve your healthcare services",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:analytics-outline",
        iconColor: "#19BB7D",
        heading: "Monitoring Diagnostic Reports",
        description:
          "Seamless review and monitor diagnostic reports without any clutter that will help you provide better services to your patients",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:analytics-outline",
        iconColor: "#3278B1",
        IconWidth: "45",
        IconHeight: "45",
        heading: "Pharmacy Order Management",
        description:
          "EaseCare’s EHR EMR goes beyond just keeping the records of your patients. Manage your pharmacy to make sure that everything is in stock so that you don’t have to hustle at the last minute",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "iconamoon:profile",
        iconColor: "#08C7FB",
        IconWidth: "35",
        IconHeight: "35",
        heading: "Easy Medication Administration",
        description:
          "With EaseCare’s EHR EMR software patients can easily track their medication intake information",
      },
    ],
  },
];
const HowChooseBestBilling = {
  HeadingClass: "max-width-full",
  containerClass: "#F8FFFA",
  HeadingFirst: "Finding the Best Electronic Medical",
  HeadingSec: "Records Software In India",
  para: "Let’s find out how to get the best electronic medical records software in India through the following tips",
  cardType: "varient",
  CardData: [
    {
      icon: "carbon:task",
      heading: "Implementation",
      description:
        "Normally, the more robust is the software, the longer it will take to be implemented. So it is important to make sure that you give your team extensive training. Cloud-based medical EMR software is likely easy to implement but still also requires practice",
    },
    {
      icon: "carbon:security",
      heading: "Privacy and Security",
      description:
        "Privacy and security risks are becoming more common along with the facilities the digital world is providing us. But, the good news is that robust EMR medical records software includes robust security measures. they are mitigating security and privacy risks",
    },
    {
      icon: "material-symbols-light:clinical-notes-outline",
      heading: "Looking For Certified Medical EHR Software",
      IconWidth: "50",
      IconHeight: "50",
      description:
        "Looking for certified medical EHR software should be your first priority as an organization to stay compliant with the industry regulations and be authoritative. According to the federal EHR incentive payments under the American Recovery and Reinvestment Act of 2009 (ARRA), these systems are certified. The Office of the National Coordinator for Health Information Technology (ONC) also registers the software",
    },
    {
      icon: "solar:health-broken",
      // IconWidth: "37",
      // IconHeight: "60",
      heading: "Looking for the Features",
      description:
        "Looking for the features is important when you are finding the best medical EMR software for your organization. Access your requirements and check if the software you are going to buy is compatible or not accordingly",
    },
  ],
};
const differenceData = {
  HeadingFirst: "EMR vs. EHR: What's the Difference?",
  para: "Electronic Medical Records are also the digitalized form of all the information of the patient but it is more specific that can be utilized within a specific medical setting. The main purpose of EMR is to focus on diagnosis and treatment only. The EMR data can not be shared from one medical setting to another",
  HeadingClass: "max-width-full",
  differenceCard: [
    {
      cardBg: "#D3F2E6",
      title: "EHR",
      list: [
        {
          listItem:
            "EHR includes a lot of information about the patient along with the information covered under EMR",
        },
        {
          listItem:
            "EHR facilitates the sharing of patient information with other healthcare providers like laboratories, pharmacists, and other healthcare providers.",
        },
        {
          listItem:
            "EHR systems require more stringent requirements like those which are underlined by the HIPAA in the US.",
        },
        {
          listItem:
            "EHR covers a wide area of patient data, from the medical history of the patients, medications, treatment plans, immunization dates, and allergies to radiology images, and laboratory test results",
        },
      ],
    },
    {
      title: "EMR",
      cardBg: "#D0F4FF",
      list: [
        {
          listItem:
            "EMR refers to the digital patient records and charts of the patients",
        },
        {
          listItem:
            "EMR data is limited and doesn’t facilitate sharing patient data with other healthcare providers and medical settings. It can be only used by the current healthcare provider of a patient",
        },
        {
          listItem:
            "EMRs run on the regulations of medical recordkeeping and data security",
        },
        {
          listItem:
            "EMR contains the medical and treatment history so that it can be used during the diagnosis and treatment within a single organization",
        },
      ],
    },
  ],
};
const EHREMR = () => {
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
      {/* {data?.map((item) => ( */}
      {/* <React.Fragment key={item?._id}> */}
      <Layout>
        <HeadPart
          title={"EHR /EMR Software: Electronic Health Records Software"}
          description={
            "Boost your organisation's performance with our electronic health records software. Elevate services & reputation with streamlined data management."
          }
          imageUrl={FeaturesPreviewImage}
          pageLink={slug}
        />
        <PatientManagmentBanner data={ehremrBannerData} />
        {/* <HeroComp data={item.heroComp} />
            <CardsGroups data={item.benefitsOfEHR} />
            <ContactSection data={item.ContactFormOne} />
            <MultiColorCardSec data={item.FeaturesEHR} />
            <CardsGroups data={item.WhatIsEHR} />
            <MultiColorCardSec data={item.EHRvsEMR} />
            <NavDetailsSection data={item.typesOfEHR} />
            <ContactSection data={item.ContactFormTwo} />
            <CardsGroups data={item.findingBestEHR} />
            <CardsGroups data={item.benefitsOfUsingEHR} /> */}
        <BenefitPatients data={BenefitEHR} />
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Are you looking for an EHR/EMR software for managing patient data?"
            btnText="Get a free Demo"
            alt="electronic health records software"
          />
        </div>
        <FeaturesPatient data={featuresEHR} />
        <div
          style={{
            paddingBottom: "70px",
          }}
        >
          <VarientTypes TypesVarientData={whatEHRSystem} />
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <DifferenceCard data={differenceData} />
        </div>
        <SelectRight data={TypesOfEHR} />
        <div className="my-6">
          <ContactUsPatients
            image={cuateImg}
            content="Want to know which EMR system is best for your organization"
            btnText="Get a free Demo"
            alt="electronic health records software"
          />
        </div>
        <div style={{ backgroundColor: "#F8FFFA", paddingBottom: "35px" }}>
          <VarientTypes TypesVarientData={HowChooseBestBilling} />
        </div>
        <div style={{ backgroundColor: "#FCFBF6", padding: "30px 0px" }}>
          <BenefitPatients data={whyChooseSoftware} />
        </div>
        <Testimonail />
        <CtaSection />
      </Layout>
      {/* </React.Fragment> */}
      {/* ))} */}
    </React.Fragment>
  );
};

export default EHREMR;
