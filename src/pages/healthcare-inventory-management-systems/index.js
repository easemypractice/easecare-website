import { Layout } from "@/app/layout";
import React from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/patientManagement/banner";
import bgImg from "@/images/healthCareInventory.png";
// import FeaturesPreviewImage from "";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import BenefitPatients from "@/component/patientManagement/banefits";
import FeaturesPatient from "@/component/patientManagement/featurePatients";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import ContactUsPatients from "@/component/patientManagement/contactUsPatient";
import BenefitCard from "@/component/patientManagement/banefits/benefitCard";
const Bannerdata = [
  {
    maxWidth: "max-width-80 p-5",
    bannerStyle: "align-center",
    bgImg: bgImg,
    HeadingFirst: "Healthcare Inventory",
    HeadingSecound: "Management System",
    description:
      "A  clinical inventory management system is a solution that helps clinics simplify and streamline various tasks like order placements, stock monitoring, and expiration date tracking through automation with the help of advanced and robust software.  Streamlining the tasks through software helps clinics to ensure the availability of medicines, equipment, and other supplies while reducing workload over the administration along with reducing errors and enhancing the functionality of the clinic.",
  },
];
const WhyClinicInventory = [
  {
    HeadingClass: "max-width-full py-10",
    HeadingFirst: "Why is Clinical Inventory Management",
    HeadingSec: "Important for Clinics",
    paraClass: "pb-40",
    para: "Inventory management is a crucial part of healthcare operations. While small clinics have too much pressure and don’t have that much time and investment to keep dedicated professionals, medical inventory software is what they need.",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "solar:document-add-outline",
        IconWidth: "35",
        para: "The first thing why a good inventory management solution is needed for clinics is that it checks if all the supplies are right in the inventory which prevents them from putting lives at risk",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "icon-park-outline:check-correct",
        IconWidth: "33",
        // heading: "Keep your schedule organized and simple",
        para: "Clinics need the proper supply of various tools and equipment from low-value consumables, swabs, and syringes to big kits. A medical inventory management system keeps track of everything",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:task",
        IconWidth: "30",
        // heading: "Schedule daily, weekly, and monthly appointments",
        para: "A healthcare inventory management software for clinics can take care of various tasks like Tracking, management, and accounting of all the supplies, providing a stable financial solution for clinics",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "icon-park-outline:bill",
        // heading: "Handle recurring appointments easily without any hassle",
        IconWidth: "35",
        para: "Efficient inventory management prevents interruptions and unexpected shockouts enhancing patient care",
      },
    ],
  },
];
const HowHelpfulForDoctors = {
  HeadingFirst: "How Clinic Inventory Management",
  HeadingSec: "System Helps Doctors",
  HeadingClass: "max-width-full py-10",
  Para: "A clinic inventory management system is helpful for doctors in the following ways",
  ParaClass: "pb-40",
  CardData: [
    {
      icon: "solar:document-add-outline",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      IconWidth: "30",
      heading: "Efficient Stock Control",
      headingClass: "max-width-full",
      description:
        "Software For Inventory Management At Healthcare Clinics helps doctors ensure that all the essentials are in stock before anything runs out. They can check for any medicine, surgical instruments, or other clinical supplies",
    },
    {
      icon: "carbon:money",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "35",
      headingClass: "max-width-full",
      heading: "Cost Management",
      strockWidth: "1",
      description:
        "Effective cost management is crucial if you want to make your clinic equipped with all the necessary and advanced medical services and equipment. Inventory management software provides an overview of the overall expenses of all the clinical essentials and makes healthcare professionals realize where they don’t have to invest their money",
    },
    {
      icon: "carbon:document-requirements",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      IconWidth: "45",
      // IconHeight: "30",
      headingClass: "max-width-full",
      heading: "Reduced Wastage",
      description:
        "Effective inventory management system reduces waste inventory management in clinics and hospitals. It ensures that no product surpasses its expiry date without any usage. It helps in the optimum use of medical supplies along with reducing costs.",
    },
    {
      icon: "carbon:money",
      bgColor: "#FFF2DD",
      IconWidth: "30",
      IconbgColor: "#FAE2BB",
      heading: "Billing Accuracy",
      headingClass: "max-width-full",
      description:
        "Financial challenges are one of the significant challenges faced by clinics. Clinical inventory management software not only reduces the risk in financial operations while ensuring accuracy but also prevents errors in invoicing",
    },
    {
      icon: "grommet-icons:task",
      bgColor: "#E8D2F9",
      IconWidth: "30",
      IconbgColor: "#8512E01A",
      heading: "Ensuring Regulatory Compliances",
      headingClass: "max-width-full",
      description:
        "Without ensuring regulatory compliance, there is not only a threat to the lives of patients but a question also arises on the authority of your clinic. Software For Inventory Management At Healthcare Clinics protects you from legal threats while keeping you updated about the latest industry standards",
    },
    {
      icon: "carbon:dashboard",
      bgColor: "#D0F4FF",
      IconWidth: "30",
      IconbgColor: "#8512E01A",
      heading: "Enhance Patient Experience",
      headingClass: "max-width-full",
      description:
        "When doctors are informed about everything that is available, it makes them serve better to their patients which increases the conversion rate",
    },
  ],
};
const HowToOptamizeMedicalAssets = {
  HeadingFirst: "How to Optimize Your Medical ",
  HeadingSec: "Assets for Enhanced Patient Care",
  // para: "The biggest perk of efficient clinic management is increased efficiency as you can streamline various tasks with the help of robust offline software for doctors and clinics. From automating tasks to optimizing appointment scheduling to maintaining accurate patient records when accuracy and efficiency work together through our offline practice management software, we ensure that your business automatically reaches a top level and stays consistent",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "carbon:data-blob",
      IconWidth: "35",
      heading: "Effortless Medical Asset and Inventory Tracking",
      description:
        "Managing medical assets is a complex and daunting task from managing large quantities of complex hospital equipment to managing your patients. While all the focus is on your patients, having a healthcare inventory management software doesn’t demand you have extra time to manage your medical assets",
    },
    {
      icon: "carbon-document",
      heading:
        "Advanced Purchase Order(PO) Management Simplifies Stock Reordering",
      IconWidth: "35",
      description:
        "Best inventory management software for clinics works as a versatile tool helping you optimize supply management, set re-order points, and centralize vendor information. EaseCare online medicine inventory management system is a robust advanced purchase order management that simplifies your clinic operations automatically",
    },
    {
      icon: "carbon:security",
      IconWidth: "35",
      heading: "Maximize Data Security for Optimal Patient Care",
      description:
        "Today data is the reason behind informed and result-oriented decisions. While your patient data is too sensitive, secure it with utmost safety along with driving your profit with the help of analytics based on this data with EaseCare’s online medicine inventory management system",
    },
    {
      icon: "carbon:report",
      heading: "Data-Driven Consumption and Restocking",
      IconWidth: "40",
      description:
        "While the manual process of checking while you have everything in place is daunting and time-consuming, with the help of a good medical inventory software there will be a data-driven approach to all the things in your inventory.",
    },
  ],
};
const KeepTrackOfAllMedicalSupplies = {
  HeadingFirst: "Keep Track of All the Medical",
  HeadingSec: "Supplies in Your Clinic",
  HeadingClass: "max-width-full py-10",
  para: "While you have to make sure that your patients are satisfied with your services you will want everything available from cotton swabs to medical machinery to keep a thorough record of the patient data, discover our advanced Inventory Management Software for clinics that will help you in all these things",
  paraClass: "p-40",
  cardType: "varient",
  CardData: [
    {
      icon: "carbon:money",
      IconWidth: "35",
      heading: "Aaccuracy",
      description:
        "A digital inventory system keeps you updated with optimum accuracy while reducing all errors",
    },
    {
      icon: "icon-park-outline:check-correct",
      heading: "Efficient Inventory Management",
      IconWidth: "35",
      description:
        "Make sure that you set an inventory minimum for everything that will make you know which things are running out of stock and you can manage the supplies before the zero time",
    },
    {
      icon: "carbon:reminder",
      IconWidth: "50",
      heading: "Automated Alerts",
      description:
        "Get automated alerts through medical inventory management software when you are running out of your inventory supplies or any medical equipment",
    },
    {
      icon: "fluent:patient-20-regular",
      heading: "Improved Patient Experience",
      IconWidth: "45",
      description:
        "To improve patient experience, some of the best online medicine inventory management systems also offer the features of customizing the overall experience according to the preferences of each patient",
    },
  ],
};
const whyChooseSoftware = [
  {
    cardBgColor: "#FFFF",
    HeadingWidth: "max-width-full text-center",
    icon: "ion:time-outline",
    heading:
      "Give More Time to Your Patients While Managing Your Clinic Operations in Less Time",
    iconColor: "#8512E0",
    IconWidth: "45",
    strockWidth: "4",
    description:
      "Clinics work on a low budget. From gaining the attention of the target audience to retaining the old patients to keeping track of all the expenses, it is difficult. As this budget will not allow you to keep dedicated professionals for inventory management and other tasks, Inventory Management Software for clinics are versatile choice that can help you in several things.",
  },
  {
    cardBgColor: "#FFFF",
    HeadingWidth: "max-width-full text-center",
    icon: "hugeicons:audit-02",
    iconColor: "#8512E0",
    IconWidth: "35",
    heading:
      "How to Track Medical Inventory, Supplies, and Equipment with Medical Inventory Software",
    description:
      "Keep track of required medicines, advanced equipment, and other supplies to make sure that you have all the things availed no matter what the patients require. Healthcare inventory management software will help you to serve your patients better while providing extensive reports, data, and insights on the performance of your clinic and all the medical essentials for a clinic to attain success.",
  },
];

const HowToManageMadicalInventorySoftware = [
  {
    HeadingClass: "max-width-55r py-10",
    HeadingFirst: "How to Manage Medical Inventory",
    HeadingSec: "Software in a Simple Way?",
    paraClass: "pb-40",
    para: "Embrace the simple and cost-effective way to manage the medical inventory for your clinic with EaseCare’s Clinic inventory management system",
    cardType: "practice",
    // cardClass: "grid-cols-3",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:process",
        heading: "Track Asset Lifecycle",
        iconColor: "#8512E0",
        IconWidth: "35",
        // IconHeight: "35",
        description:
          "Keep track of the lifecycle of your healthcare and medical inventory assets to make sure that you always have enough stock for any asset",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:license-maintenance",
        iconColor: "#19BB7D",
        IconWidth: "33",
        heading: "Conduct Maintenance",
        description:
          "Make the task of generating services and requests to convert them into your profit. Maintain your assets by linking them to other services to ensure quick response and speedy turnaround",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "uit:chart-growth",
        iconColor: "#3278B1",
        IconWidth: "55",
        heading: "Optimize Inventory",
        description:
          "Keep every detail of your inventory updated and re-stock it whenever you need it with the help of the Best inventory management software for clinics",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "ph:scan",
        iconColor: "#08C7FB",
        IconWidth: "45",
        heading: "Use Scanning Technology",
        description:
          "Restocking your inventory with a large quantity of medical items? No need to get into what is there and what is not as you can check everything with barcodes and QR codes using our Medical Inventory Apps for Android systems.",
      },
    ],
  },
];
const OfflineSoftwareForPractice = () => {
  return (
    <Layout>
      <HeadPart
        title={"Best Medical Inventory Management Software Solution"}
        description={
          "Manage complex billing seamlessly with our medical billing software. Focus on patient care, not paperwork. Simplify your process today."
        }
        // imageUrl={FeaturesPreviewImage}
      />
      <PatientManagmentBanner data={Bannerdata} />
      <div style={{ paddingTop: "50px" }}>
        <BenefitPatients data={WhyClinicInventory} />
      </div>
      <div className="my-6">
        <ContactUsPatients
          image={featureImg}
          content="Know what a medical inventory management system can do for your clinic"
          btnText="Get a free Demo"
          alt="healthcare inventory management systems"
        />
      </div>
      <div
        style={{
          paddingBottom: "70px",
          backgroundColor: "#FCFBF6",
        }}
      >
        <VarientTypes TypesVarientData={KeepTrackOfAllMedicalSupplies} />
      </div>
      <div
        style={{ backgroundColor: "#ffff", padding: "20px" }}
        className="mobileCol"
      >
        <div className="flex container mobileCol gap-20">
          <BenefitCard cardType={"practice"} data={whyChooseSoftware} />
        </div>
      </div>
      <FeaturesPatient data={HowHelpfulForDoctors} />
      <div className="my-6">
        <ContactUsPatients
          image={cuateImg}
          content="Want to know more about how EaseCare’s Clinic inventory management system can help you?"
          btnText="Get a free Demo"
          alt="healthcare inventory management systems"
        />
      </div>
      <div
        style={{
          paddingBottom: "70px",
          backgroundColor: "#FCFBF6",
        }}
      >
        <VarientTypes TypesVarientData={HowToOptamizeMedicalAssets} />
      </div>
      <div style={{ backgroundColor: "#FCFBF6", paddingBottom: "50px" }}>
        <BenefitPatients data={HowToManageMadicalInventorySoftware} />
      </div>
      <div className="my-6">
        <ContactUsPatients
          image={featureImg}
          content="Know how EaseCare’s online medicine inventory management system can help your revolutionize your healthcare success?"
          btnText="Get a free Demo"
          alt="healthcare inventory management systems"
        />
      </div>
    </Layout>
  );
};

export default OfflineSoftwareForPractice;
