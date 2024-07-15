"use client";
import Analytics from "@/component/features/analytics";
import Calendar from "@/component/features/calendar";
import ClinicManagement from "@/component/features/clinicManagement";
import FeaturesBanner from "@/component/features/featuresBanner";
import CtaSection from "@/component/home/cta";
import React, { useEffect, useState } from "react";
import { Layout } from "../../app/layout";
import HeadPart from "@/component/Head/head";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
import Link from "next/link";
import { getFeatureData, getSlugs } from "@/utils/service";
import HeroComp from "@/component/feature/HeroComp";
import { useRouter } from "next/router";
import ImageWithContent from "@/component/features/imageWithContent";
import BenefitCard from "@/component/patientManagement/banefits/benefitCard";
import CardsGroups from "@/component/feature/benefitCards";
import CtaIcon from "@/images/ctaicon.svg";
import videoConsult from "@/images/videoConsult.png";
import appoinmentBookImg from "@/images/appoinmentBookImg.png";
import prefrenceImg from "@/images/prefrenceImg.png";
import patieenntRecordImg from "@/images/patieenntRecordImg.png";
import EHRImgFeature from "@/images/EHRImgFeature.png";
import childVaccineImg from "@/images/childVaccineImg.png";
import growthChartImg from "@/images/growthChartImg.png";
import doctoresCuateImgFeat from "@/images/doctoresCuateImgFeat.png";
import cuateFeatureImg from "@/images/cuateFeatureImg.png";
import BenefitPatients from "@/component/patientManagement/banefits";
const data = [
  {
    heroComp: {
      bannerImg: CtaIcon,
      subTitle: "features",
      title1: "The New Standard for",
      title2: "Modern Clinic Management",
      description:
        "At EaseCare, we are working to help healthcare professionals improve their skills and productivity through our software that manages the patients better and helps in various tasks",
    },
    imageWithContent: [
      {
        title: "Video Consultation",
        featureDir: "featureDir",
        image: videoConsult,
        description:
          "In this fast-paced and competitive world, we value your time and thus we are here with the most advanced technology to enhance your customer service. Through high-quality telemedicine services like video consultation, we make sure that you don’t wait for patients to visit your clinic when you can reach out to them remotely. Offer your customers the best services as they will get a quick session with the healthcare professionals of your clinic and will not have to wait for hours for a session.",
        listItem: [
          { list: "Cost-effective" },
          { list: "Increased Efficiency" },
          { list: "Multi-disciplinary consultation" },
          { list: "Increased functionality" },
        ],
        urlToLearn: "/telemedicine-app-for-doctors",
      },
      {
        title: "Appointment Booking",
        backgroundColor: "#F2FEF8",
        image: appoinmentBookImg,
        description:
          "ot only treatments and surgeries but also appointments are hectic for healthcare organizations, especially private clinics. Managing time slots for all the patients, providing them with proper sessions, and making them turn into loyal and trustable patients is not a cake of a piece. During the process of turning your target audience into your loyal customers, our medical appointment scheduling software is no less than magic for your clinic. ",
        listItem: [
          { list: "Quick look-on summaries" },
          { list: "Appointment Reminders" },
          { list: "Avoid Surprise Bookings" },
          { list: "Plan work and break times" },
        ],
        urlToLearn: "/patient-appointment-scheduling-software",
      },
      {
        title: "e-Prescription Software",
        featureDir: "featureDir",
        image: prefrenceImg,
        description:
          "As e-prescription allows you to keep your patients’ data safe, it makes you reduce paperwork leading to increased efficiency and cost-effectiveness. It also allows you to market your brand with the name and logo on the prescriptions and customize it in your preferred templates, colors, and designs.",
        listItem: [
          { list: "Medication history" },
          { list: "Drug-Drug Interaction Alerts" },
          { list: "Patient Chart Integration" },
          { list: "Clinical Decision Support Tools" },
        ],
        urlToLearn: "/prescription-software-for-doctors",
      },
      {
        title: "Patient Records Software",
        image: patieenntRecordImg,
        backgroundColor: "#F2FEF8",
        description:
          "Patient Management Software helps you manage all the things related to your patients for example; scheduling appointments, billing, evaluation, treatment, and discharge. But managing your patients is much more than this. A patient management software system helps you streamline your desk and administrative tasks and provides scalable and comprehensive reports on your medical operations, resulting in better efficiency, productivity, and customer satisfaction.",
        listItem: [
          { list: "Patient Management and History" },
          { list: "Track patient interactions and touchpoints" },
          { list: "Patient Relationship Management" },
          { list: "Integration with Other Healthcare Systems" },
        ],
        urlToLearn: "/patient-management-software",
      },
      {
        title: "EHR/EMR Software",
        image: EHRImgFeature,
        featureDir: "featureDir",
        description:
          "EaseCare’s EHR and EMR software help you in a wide sphere of your organization to offer better services to your patients. This software provides extensive reports and analytics and keeps a 360-degree record of each patient's data.",
        listItem: [
          { list: "Privacy and Security" },
          { list: "Patient Records Management" },
          { list: "Lab Results Integration" },
          { list: "Patient, Doctor, and Staff Portal" },
        ],
        urlToLearn: "/ehr-emr-software",
      },
      {
        title: "Child Vaccine Management",
        image: childVaccineImg,
        backgroundColor: "#F2FEF8",
        description:
          "When it comes to children, make your healthcare organization the first choice for all parents. From daily checkups to timely and effective child vaccine management, our software is a comprehensive guide to drastically improve your child's health services and to secure a particular audience spot of all the parents.",
        listItem: [
          { list: "Efficient inventory management" },
          { list: "Usage forecasting" },
          { list: "Active and Passive Safety Checks" },
          { list: "EHR integration" },
        ],
        urlToLearn: "/contact-us",
      },
      {
        title: "Growth Chart Management",
        image: growthChartImg,
        featureDir: "featureDir",
        description:
          "Growth Chart management plays an important role in helping healthcare providers track the health and growth development of children. Growth chart management helps healthcare professionals track and analyze the physical development of individuals with an extensive overview of each aspect.",
        listItem: [
          { list: "WHO child growth standards" },
          { list: "Measurements and Plotting" },
          { list: "Adult Height Predictor" },
          { list: "Body Mass Index Converter" },
        ],
        urlToLearn: "/contact-us",
      },
      {
        title: "Doctors and Staff Management",
        image: doctoresCuateImgFeat,
        backgroundColor: "#F2FEF8",
        description:
          "Make healthcare professionals and staff members coordinate and communicate with each other effectively, no matter how big your healthcare organization is. Our software ensures effective coordination for better efficiency.",
        listItem: [
          { list: "Telehealth features" },
          { list: "Reporting and Analytics" },
          { list: "Billing and Invoicing" },
          { list: "Laboratory and Pharmacy Management" },
        ],
        urlToLearn: "/practice-management-software",
      },
      {
        title: "Medical Billing Software",
        image: cuateFeatureImg,
        featureDir: "featureDir",
        description:
          "Billing is one of the most complex things for your patients. Provide them with a  seamless. Apart from providing accurate and overall billing features, healthcare medical billing software has several additional benefits whether you want to customize your treatment catalogue with pricing so that it should be suitable and affordable for all patients or want an additional benefit of this healthcare medical billing software through which you can do your free marketing and branding on bills and receipts.",
        listItem: [
          { list: "Medical Scheduling" },
          { list: "Seamless Payment Processing" },
          { list: "Analytics and Reporting" },
          { list: "Cloud Hosted Medical Billing" },
        ],
        urlToLearn: "/medical-billing-software",
      },
    ],
    cardGrp: [
      {
        HeadingClass: "max-width-80 py-10",
        HeadingFirst: "Why choose Our EaseCare Clarity ?",
        paraClass: "pb-40",
        para: "Before we dive into what are the features of our EaseCare Clarity Management Healthcare Software, let’s understand why you should choose us:",
        cardType: "practice",
        // cardClass: "grid-cols-3",
        benefitData: [
          {
            HeadingWidth: "max-width-full text-center",
            icon: "grommet-icons:task",
            heading: "Efficiency",
            iconColor: "#8512E0",
            IconWidth: "30",
            // IconHeight: "35",
            description:
              "At EaseCare, we are here to make sure that you leave a Listing impact on your patients through quality services while our software helps you streamline workflows, reduce paperwork, and even help in administrating tasks.",
          },
          {
            HeadingWidth: "max-width-full text-center",
            icon: "fluent:person-support-24-regular",
            iconColor: "#19BB7D",
            IconWidth: "40",
            heading: "Hassle-Free Communication",
            description:
              "With the help of our overall solution software, it becomes effortless for healthcare professionals, staff members, and patients as well to communicate seamlessly",
          },
          {
            HeadingWidth: "max-width-full text-center",
            icon: "carbon:document-requirements",
            iconColor: "#3278B1",
            IconWidth: "45",
            heading: "Scalability",
            description:
              "No matter if you have a small clinic or a large hospital, we have a team of experts who have a sharp eye on not only your requirements but also the trends and advancements that will take you further",
          },
          {
            HeadingWidth: "max-width-full text-center",
            icon: "ph:calendar-check",
            iconColor: "#08C7FB",
            IconWidth: "45",
            heading: "Continuous Updates",
            description:
              "While our focus is to improve your healthcare performance and make you earn more and more profit along with truly making your patients happy, we keep a sharp eye on the latest features and include them in the software as soon as possible.",
          },
        ],
      },
    ],
  },
];
const FeaturesLayout = () => {
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Layout>
            <HeadPart
              title={
                "Innovative and Trading features of Clinic Managment software"
              }
              description={
                "Discover exclusive features such as telemedicine, analytics, secure messaging etc. Revolutionize your healthcare experience with our advanced Clinic Management software."
              }
              imageUrl={FeaturesPreviewImage}
            />
            <FeaturesBanner data={item.heroComp} />
            {item.imageWithContent.map((item, index) => (
              <React.Fragment key={index}>
                <ImageWithContent data={item} />
              </React.Fragment>
            ))}
            <div style={{ backgroundColor: "#FCFBF6", paddingBottom: "50px" }}>
              <BenefitPatients data={item.cardGrp} />
            </div>
          </Layout>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default FeaturesLayout;
