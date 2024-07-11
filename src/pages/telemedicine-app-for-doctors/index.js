import { Layout } from "@/app/layout";
import React, { useEffect, useState } from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/patientManagement/banner";
import bgImg from "@/images/telemedicineImg.png";
// import FeaturesPreviewImage from "";
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
const Bannerdata = [
  {
    maxWidth: "max-width-80 p-5",
    bannerStyle: "align-center",
    bgImg: bgImg,
    HeadingFirst: "Customized Telemedicine app for doctors",
    description:
      "Are you concerned about your reach? While healthcare is a vast industry with a lot of competition we offer you a digital platform to take your business to the next level by not only attracting your target audience but also retaining your first-time visitors through various telemedicine software platforms",
  },
];
const AttractMorePatients = [
  {
    HeadingClass: "max-width-full py-10",
    HeadingFirst: "Attract More Patients",
    para: "While everyone has a website and an app nowadays, that is not enough. If you want to increase your reach and your business, robust SEO techniques and strategies are crucial.",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:id-management",
        IconWidth: "35",
        para: "Attract your potential patients with an SEO-optimized and visually appealing website",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "icon-park-outline:check-correct",
        IconWidth: "33",
        // heading: "Keep your schedule organized and simple",
        para: "Establish your online reputation",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "grommet-icons:task",
        IconWidth: "30",
        // heading: "Schedule daily, weekly, and monthly appointments",
        para: "Offer exceptional services to your patients through a personalized telemedicine app",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "solar:document-add-outline",
        // heading: "Handle recurring appointments easily without any hassle",
        IconWidth: "35",
        para: "Targeted digital campaigns to become the best in your niche",
      },
    ],
  },
];
const whyChooseSoftware = [
  {
    cardBgColor: "#FFFF",
    HeadingWidth: "max-width-full text-center",
    icon: "teenyicons:appointments-outline",
    heading: "Online Doctor Consultation from the Comfort of Your Home",
    iconColor: "#8512E0",
    IconWidth: "30",
    // strockWidth: "4",
    description:
      "Online doctor consultation with the help of a remote patient monitoring telemedicine app helps you focus on more and more target audiences as they will not be required to visit the clinic for any service. Give your audience every reason to come back to you with the help of various telemedicine software platforms and telehealth video platforms prepared with the expertise of the experts at EaseCare.",
  },
  {
    cardBgColor: "#FFFF",
    HeadingWidth: "max-width-full text-center",
    icon: "hugeicons:audit-02",
    iconColor: "#8512E0",
    IconWidth: "35",
    heading: "Telemedicine Platform",
    description:
      "A Telemedicine Platform is a virtual platform through which doctors and specialists can offer you services and consultation through a video call without having a need for you to visit the clinic physically. It saves a lot of time for healthcare professionals and a lot of time and money for the patients until and unless there is any serious situation.",
  },
];
const GivePatientsWhatTheyWant = {
  HeadingFirst: "Give Patients What They Want",
  HeadingClass: "max-width-full",
  para: "Getting the point of what exactly your patients want is your key to success. No matter, if you are designing a high-value website or an app for the utmost and instant response to your patients, analyzing the market trend and understanding what your audience expects from the service is important. Get to know what really your patients are expecting from you and how to apply the strongest and most successful strategies with the guidance of our experts",
  cardType: "varient",
  CardData: [
    {
      icon: "material-symbols-light:event-available-outline",
      IconWidth: "55",
      heading: "Seamless Appointments",
      description: "Make the first thing-Appointments seamless for them",
    },
    {
      icon: "icon-park-outline:check-correct",
      heading: "Simplifying Payment Process",
      IconWidth: "35",
      description:
        "Simplify complex things like payment processes for a better patient experience",
    },
    {
      icon: "carbon:security",
      IconWidth: "50",
      heading: "Secure Data",
      description:
        "Assuring patients regarding the safety of their data through robust technology",
    },
    {
      icon: "fluent:patient-20-regular",
      heading: "Convenience",
      IconWidth: "45",
      description:
        "Offering them the convenience to get products and services at their doorsteps",
    },
  ],
};
const InprovePatientCare = {
  HeadingFirst: "Improve Patient Care with EaseCare’s",
  HeadingSec: "Telemedicine Mobile App For Clinics",
  HeadingClass: "max-width-full py-10",
  Para: "Enhance your quality of services with our telemedicine mobile app with its various features to satisfy your patients by offering them various services like telehealth or virtual video for consultation, on-time delivery of healthcare supplies, subscription care plans, and better communication channels for the convenience of your patients",
  ParaClass: "pb-40",
  CardData: [
    {
      icon: "material-symbols-light:video-call-outline",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      IconWidth: "55",
      heading: "Offer Telehealth Video Visits",
      headingClass: "max-width-full",
    },
    {
      icon: "hugeicons:google-doc",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "30",
      headingClass: "max-width-full",
      heading:
        "Subscription plans for patients who want an advanced and quick response",
      strockWidth: "1",
    },
    {
      icon: "healthicons:communication-outline",
      bgColor: "#FFF2DD",
      IconWidth: "35",
      IconbgColor: "#FAE2BB",
      heading: "Asynchronous Text Consultations",
      headingClass: "max-width-full",
    },
    {
      icon: "streamline:group-meeting-call",
      bgColor: "#E8D2F9",
      IconWidth: "30",
      IconbgColor: "#8512E01A",
      heading: "Educate patients with helpful content and custom messages",
      headingClass: "max-width-full",
    },
  ],
};
const SimplifyYourMedical = {
  HeadingFirst: "Simplify Your Medical",
  HeadingSec: "Practice Management",
  para: "Along with the queries of patients, manage appointment booking, healthcare team, billing, and other administration tasks with the help of various telemedicine software platforms with specific features designed for various needs of the clinics",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "carbon:data-blob",
      IconWidth: "35",
      heading: "Make your services more captivating for new",
    },
    {
      icon: "carbon-document",
      heading: "Instant patient notes and reminders",
      IconWidth: "35",
    },
    {
      icon: "grommet-icons:user-expert",
      IconWidth: "35",
      heading:
        "Professional profiles for the healthcare professionals of your clinic",
    },
    {
      icon: "carbon-report",
      heading: "Make billing easy with credits, refunds, and detailed reports",
      IconWidth: "40",
    },
  ],
};

const FeaturesOfTelemedicine = {
  ParaClass: "p-0",
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Features of EaseCare’s",
  HeadingSec: "Telemedicine Mobile App",
  Para: "Let’s explore below why you should consider EaseCare’s Telemedicine Mobile App when it comes to your healthcare needs",
  RightData: [
    {
      path: "1",
      listItem: "Efficient Appointment Management",
      IconWidth: "40",
      ListData:
        "While booking an appointment itself feels like a daunting task, at EaseCare, we have the best app for online doctor consultation that not only offers you seamless appointment scheduling but also arranges a personalized session with our healthcare professionals.",
      Icon: "teenyicons:appointments-outline",
    },
    {
      path: "2",
      listItem: "E-Prescription",
      IconWidth: "40",
      ListData:
        "When you take healthcare services from a clinic, they always provide you with paper-based prescriptions that can be utilized in the future but they can be lost. Keep a record of your health information always with you in the form of e-prescription.",
      Icon: "carbon:chart-custom",
    },
    {
      path: "3",
      listItem: "Multiple Language Support",
      IconWidth: "35",
      ListData:
        "We understand that while reaching out to your potential customers, you may face lingual challenges. We offer a Telemedicine App For Clinics equipped with multiple language support.",
      Icon: "carbon:language",
    },
    {
      path: "4",
      listItem: "Secure",
      IconWidth: "40",
      ListData:
        "Safety is the first thing we consider for our patients and thus, we have the best app for online doctor consultation along with ensuring safety with GDPR and HIPAA compliance.",
      Icon: "carbon:security",
    },
    {
      path: "5",
      listItem: "Regional Clouds",
      IconWidth: "40",
      ListData:
        "Patient data is invaluable for clinics and managing this data can be a daunting task sometimes. Host your data with one of our best cloud regions.",
      Icon: "solar:cloud-linear",
    },
    {
      path: "6",
      listItem: "24*7 Support",
      IconWidth: "40",
      ListData:
        "Along with providing quality services, 24*7 Support is one of our primary motives. No matter what time you need any help, we are always there to help you out.",
      Icon: "ri:24-hours-line",
    },
  ],
};
const TelemedicineApp = () => {
  // const router = useRouter();
  // const slug = router.pathname.replace("/", "");
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
          title={"Best Telemedicine app for doctors and patients | Easecare"}
          description={
            "At Easecare, we develop the finest telemedicine app for doctors of every niche. Our telemedicine app helps patients book online appointments from anywhere."
          }
          // imageUrl={FeaturesPreviewImage}
        />
        {/* <HeroComp data={item.heroComp} />
            <CardsGroups data={item.attractMorePatients} />
            <CardsGroups data={item.extraBenefits} />
            <CardsGroups data={item.givePatientsWhatTheyWant} />
            <ContactSection data={item.contactFormOne} />
            <MultiColorCardSec data={item.improvePatientsCare} />
            <CardsGroups data={item.simplifyMedicalPractice} />
            <ContactSection data={item.contactFormTwo} />
            <NavDetailsSection data={item.featuresOfTelemedicine} />
            <ContactSection data={item.contactFormThree} /> */}
        <PatientManagmentBanner data={Bannerdata} />
        <div style={{ paddingTop: "50px" }}>
          <BenefitPatients data={AttractMorePatients} />
        </div>
        <div
          style={{
            backgroundColor: "#ffff",
            padding: "20px",
            margin: "50px 0px",
          }}
          className="mobileCol"
        >
          <div className="flex container mobileCol gap-20">
            <BenefitCard cardType={"practice"} data={whyChooseSoftware} />
          </div>
        </div>
        <div
          style={{
            paddingBottom: "70px",
            backgroundColor: "#FCFBF6",
          }}
        >
          <VarientTypes TypesVarientData={GivePatientsWhatTheyWant} />
        </div>
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Want to know how a telemedicine mobile app will help your clinic?"
            btnText="Get a free Demo"
            alt="telemedicine app for doctors"
          />
        </div>
        <FeaturesPatient data={InprovePatientCare} />
        <div
          style={{
            paddingBottom: "70px",
            backgroundColor: "#FCFBF6",
          }}
        >
          <VarientTypes TypesVarientData={SimplifyYourMedical} />
        </div>
        <div className="my-6">
          <ContactUsPatients
            image={cuateImg}
            content="Want to know more about how EaseCare’s Clinic inventory management system can help you?"
            btnText="Get a free Demo"
            alt="telemedicine app for doctors"
          />
        </div>
        <SelectRight data={FeaturesOfTelemedicine} />
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Build Your Own Telemedicine Mobile App For Doctors & Clinics"
            purpleCard="true"
            description="Having a dedicated app for your patients helps you keep track of everything without having the stress of going through thousands of documents. Hence, having a dedicated telemedicine mobile app and doctor consultation app removes the need for various tools making it cost-effective, efficient, and productive for you at the same time."
            alt="telemedicine app for doctors"
          />
        </div>
      </Layout>
      {/* </React.Fragment>
      ))} */}
    </React.Fragment>
  );
};

export default TelemedicineApp;
