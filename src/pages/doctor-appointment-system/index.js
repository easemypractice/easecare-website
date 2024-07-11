import { Layout } from "@/app/layout";
import React, { useEffect, useState } from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/patientManagement/banner";
import bgImg from "@/images/doctorAppoinmentBanner.png";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import BenefitPatients from "@/component/patientManagement/banefits";
import FeaturesPatient from "@/component/patientManagement/featurePatients";
import ContactUsPatients from "@/component/patientManagement/contactUsPatient";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import { useRouter } from "next/router";
import { getFeatureData } from "@/utils/service";
import HeroComp from "@/component/feature/HeroComp";
import CardsGroups from "@/component/feature/benefitCards";
import MultiColorCardSec from "@/component/feature/multiColorCard";
import ContactSection from "@/component/feature/contactSection";
import NavDetailsSection from "@/component/feature/navDetailsSection";
const doctorAppBannerData = [
  {
    maxWidth: "maxWidth-55r p-5",
    bgImg: bgImg,
    subHeading: "Doctor Appointment Management Software",
    HeadingFirst: "Doctor Appointment",
    HeadingSecound: "Management Software",
    description:
      "Every hospital and clinic faces the problem of people lined up every day, pushing each other as they eagerly wait for their turn to get a consultation from healthcare professionals. The mere process of the appointment of the patients takes a long time as well as the energy and resources of the healthcare professionals and staff. Manage the appointments of your patients seamlessly with a doctor appointment management software. A doctor appointment management software is like the backbone of healthcare providers, hospitals, and clinics that encompasses various features.",
  },
];
const OnlineDoctorAppoin = [
  {
    maxWidth: "maxWidth-45r",
    HeadingFirst: "Discover EaseCare’s Online ",
    HeadingSec: "Doctor Appointment System",
    // paraClass: "pb-40",
    // para: "Following are some of the benefits that demand you to implement hospital management  software to streamline your medical operations",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "healthicons:doctor-outline",
        heading: "Find a Perfect Doctor for You",
        para: "To provide the best healthcare services, we make sure that patients have enough options to choose from when they are looking for a personalized solution to their problems",
        IconWidth: "45",
        IconHeight: "45",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "maki:doctor",
        heading: "View Doctor",
        para: "On the basis of your concerns, we make sure that you get the best professional to give you the best and most personalized solutions",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "teenyicons:appointments-outline",
        heading: "Book a consultation",
        para: "We strive to reach out to you beyond your geographical, linguistic, and busy schedule. Book a consultation according to your preferred time",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:service",
        heading: "Get the Best Services",
        para: "While personalization is our priority, we strive to deliver the best services to our patients at EaseCare. Get the best and quickest services and healthcare supplies at the best prices",
      },
    ],
  },
];
const FeatuesDoctorAppoin = {
  HeadingFirst: "Features of Doctor Appointment",
  HeadingSec: "Management Software",
  HeadingClass: "max-width-full",
  // ParaClass: "pb-40",
  // Para: "Following are some of the key features of the advanced healthcare management systems",
  CardData: [
    {
      icon: "material-symbols-light:event-available-outline",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      heading: "Availability Management",
      headingClass: "max-width-full",
      description:
        "Tracking the availability of various medical supplies so that they can be availed on time",
    },
    {
      icon: "streamline:waiting-appointments-calendar",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "35",
      IconHeight: "35",
      headingClass: "max-width-full",
      heading: "Shifting Appointments",
      strockWidth: "1",
      description:
        "Easily shift the appointments and you can drop a reminder or notification to the patients through an SMS or email",
    },
    {
      icon: "material-symbols-light:cancel-outline",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      headingClass: "max-width-full",
      heading: "Cancellations",
      description:
        "If the specific healthcare expert is not available and the appointment gets canceled, patients can get the information through a notification or an online doctor booking app",
    },
    {
      icon: "guidance:waiting-room",
      bgColor: "#FFF2DD",
      IconbgColor: "#FAE2BB",
      IconWidth: "37",
      IconHeight: "37",
      headingClass: "max-width-full",
      heading: "Waiting Room",
      description:
        "During the consultation, make a calm environment in your hospital or clinic as the names will be called out automatically and there will be an accurate and proper sitting of the patients",
    },
    {
      icon: "system-uicons:reverse",
      bgColor: "#FFE9E2",
      IconWidth: "35",
      IconHeight: "35",
      IconbgColor: "#8512E01A",
      heading: "Reverse Slots",
      headingClass: "max-width-full",
      description:
        "The reverse slot feature of medical software for scheduling will allow you to prioritize emergencies over normal walk-ins",
    },
    {
      icon: "gala:multi",
      bgColor: "#E0E1FD",
      IconbgColor: "#08C7FB1A",
      IconWidth: "30",
      IconHeight: "30",
      heading: "Multi-Doctor and Department Support",
      headingClass: "max-width-full",
      description:
        "Managing doctors and various departments in a larger healthcare environment can be challenging. Make this daunting task seamless with the best doctor appointment management system",
    },
  ],
};
const MedicalSechedulingBenefit = [
  {
    HeadingClass: "max-width-55r py-10",
    cardClass: "grid-cols-3",
    HeadingFirst: "Benefits of Medical",
    HeadingSec: "Software for Scheduling",
    // paraClass: "pb-40",
    // para: "A robust digital medical records software covers a wide range related to the practice of healthcare professionals which reduces the need for dedicated professionals for each task. Below are some of the areas that can be looked after with the help of a good healthcare management system software",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        cardBgColor: "white",
        icon: "teenyicons:appointments-outline",
        heading: "Online Booking",
        para: "Patients can easily book appointments through a website or a mobile app without wasting their time and money on reaching the hospital and then waiting there for hours",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:reminder",
        cardBgColor: "white",
        heading: "Automated Reminders",
        para: "Automatic appointments allow your patients to get the check-up early on without procrastinating the process for the diagnosis of any significant health condition",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "fluent:patient-20-regular",
        cardBgColor: "white",
        heading: "Patient Management",
        para: "Manage all the information of your patients from contact details to health history in one place to fuel the current medication in one place",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "fluent:payment-28-regular",
        cardBgColor: "white",
        heading: "Payment Processing",
        para: "Payment processing is one of the most complex operations for patients as they are insecure about their money and safe transactions. Doctor Appointment Management Software assures patients of instant and safe transactions",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "fluent-mdl2:custom-list",
        cardBgColor: "white",
        heading: "Customizable Scheduling",
        para: "Increase your customer satisfaction at the first step by offering them the best customization through flexible scheduling",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:report",
        cardBgColor: "white",
        heading: "Reporting and Analytics",
        para: "The doctor appointment management system provides comprehensive reporting and analytics to help you enhance your decision-making toward the performance of your clinic",
      },
    ],
  },
];
const maximizeEfficiency = {
  HeadingFirst: "Maximizing Efficiency with Doctor",
  HeadingSec: "Appointment Booking Systems",
  HeadingClass: "max-width-full pb-40",
  para: "Here’s how you can maximize the efficiency of your clinic with our best doctor appointment booking systems",
  cardType: "varient",
  CardData: [
    {
      icon: "material-symbols-light:event-available-outline",
      heading: "Streamlined Scheduling",
      description:
        "With digital medical software for scheduling, clinics, and doctors have the expertise to offer their customers with the best facilities as they don’t have to give phone calls to the clinic again and again",
    },
    {
      icon: "carbon:reminder",
      heading: "Automated Reminders",
      description:
        "No-shows should be taken seriously in the healthcare system as they can make you lose potential customers and they need to learn how efficient your services are. Make sure that not a single patient misses their appointments with you with the help of automated reminders",
    },
    {
      icon: "material-symbols-light:update",
      heading: "Real-Time Updates",
      description:
        "The real-time updates through the online doctor booking app or doctor appointment software help healthcare providers enhance efficiency and performance. Based on the real-time data, healthcare providers can manage their time to give personalized attention and better services to each patient who approaches them",
    },
    {
      icon: "carbon:document-requirements",
      heading: "Data-Driven Decisions",
      description:
        "The data-driven decisions of advanced tools for doctor appointments online make doctors and healthcare professionals not only review their performance but also follow more decisions in their favor which helps in enhanced conversion and profit",
    },
  ],
};

const AppoinmentManagementSoftWare = {
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Doctor Appointment Management Software",
  HeadingSec: "for Doctors, Nurses, and Medical Offices",
  RightData: [
    {
      path: "brand-your-practice",
      listItem: "Brand Your Practice’s Page",
      ListData:
        "With a trusted tool or software, at EaseCare-Clarity we help you to not only provide the best services to your patients through a seamless online doctor appointment booking system but also offer them personalized solutions making them return to you next time.",
      Icon: "hugeicons:clinic",
    },
    {
      path: "appoinment-from-website",
      listItem: "Appointments From Your Website",
      ListData:
        "Giving a fixed spot to book appointments on your website gives convenience to the patients because they don’t have to wait on phone calls when the server is busy or wait in lines in your medical setting.",
      Icon: "teenyicons:appointments-outline",
    },
    {
      path: "inventery-tracking",
      listItem: "Keep Track of Your Inventory",
      ListData:
        "Inventory is an important organ for your clinic or healthcare organization. When supplies are available at your end, then only you will be able to provide them to your patients on time. Keep track of everything from small to big with this automatic inventory management tool.",
      Icon: "material-symbols-light:inventory-sharp",
    },
    {
      path: "contactless-payment",
      listItem: "Secure Contactless Payments",
      ListData:
        "A good online doctor appointment booking system allows your patients to become tension-free when it comes to any transaction making the whole process seamless and convenient as you can add the option of pre-pay directly from your booking page.",
      Icon: "fluent:payment-28-regular",
    },
  ],
};
const whyEaseCareDoctorAppoinSoftware = [
  {
    // HeadingClass: "max-width-full py-10",
    HeadingFirst: "Why EaseCare’s Doctor",
    HeadingSec: "Appointment Software?",
    paraClass: "pb-40",
    para: "Make your patients seamlessly book medical appointments online with EaseCare’s doctor appointment software",
    cardType: "practice",
    // cardClass: "grid-cols-3",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:voice",
        heading: "Automated IVR",
        iconColor: "#8512E0",
        description:
          "Save more time with our automated IVR to receive voice information from your patients anytime without getting into the hustle of investing your time in talking with them",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "ri:team-line",
        iconColor: "#19BB7D",
        heading: "Staff/Doctors Easy Management",
        description:
          "Easily manage the information and current status of each member of your staff to make sure that services remain at their best",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "oui:mobile",
        iconColor: "#3278B1",
        heading: "Mobile App",
        description:
          "While going back to your website again and again might seem irritating to your patients, offer them personalized services through an app based on their preferences",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "streamline:browser-website-1",
        iconColor: "#08C7FB",
        heading: "Manage Your Website",
        description:
          "Keep a sharp eye on your website and increase the traffic as well as focus on the conversion rate directly with the help of the software",
      },
    ],
  },
];
const DoctorAppoinment = () => {
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
          title={"Online Doctor Appointment Scheduling Software"}
          description={
            "Online doctor appointment scheduling software offers users a convenient way to book appointments. Easily schedule with your current doctor or connect with new healthcare"
          }
          imageUrl={FeaturesPreviewImage}
        />
        <PatientManagmentBanner data={doctorAppBannerData} />
        {/* <HeroComp data={item.heroComp} /> */}
        <BenefitPatients data={OnlineDoctorAppoin} />
        {/* <CardsGroups data={item.discoverEaseCareOnlineDoctors} /> */}
        {/* <MultiColorCardSec data={item.featuresOfDoctorAppoinment} /> */}
        <FeaturesPatient data={FeatuesDoctorAppoin} />
        <div className="my-6">
          <ContactUsPatients
            image={featureImg}
            content="Explore the features of EaseCare Doctor Appointments online"
            btnText="Get a Free Demo"
            link={"book-a-demo"}
            alt="doctor appointmet system"
          />
        </div>
        {/* <ContactSection data={item.ContactFormOne} /> */}
        {/* <CardsGroups data={item.benefitsOfMedicalSoftware} /> */}
        <div
          style={{
            paddingBottom: "70px",
          }}
        >
          <BenefitPatients data={MedicalSechedulingBenefit} />
        </div>
        {/* <NavDetailsSection data={item.doctorAppoinmentManagement} /> */}
        <SelectRight data={AppoinmentManagementSoftWare} />
        {/* <ContactSection data={item.ContactFormTwo} /> */}
        <div className="my-6">
          <ContactUsPatients
            image={cuateImg}
            content="Discover how implementing EaseCare’s online doctor appointment system can help you manage your clinic"
            btnText="Get a Free Demo"
            link={"book-a-demo"}
            alt="doctor appointmet system"
          />
        </div>
        {/* <CardsGroups data={item.maximizingEfficiency} /> */}
        {/* <CardsGroups data={item.whyEaseCare} /> */}
        <VarientTypes TypesVarientData={maximizeEfficiency} />
        <div style={{ backgroundColor: "#FCFBF6", margin: "25px 0px 0px" }}>
          <BenefitPatients data={whyEaseCareDoctorAppoinSoftware} />
        </div>
      </Layout>
      {/* </React.Fragment>
      ))} */}
    </React.Fragment>
  );
};

export default DoctorAppoinment;
