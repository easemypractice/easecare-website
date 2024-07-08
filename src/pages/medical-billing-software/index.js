import { Layout } from "@/app/layout";
import React, { useEffect, useState } from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/patientManagement/banner";
import bgImg from "@/images/revenueCycleBanner.png";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
import cuateImg from "@/images/cuateImg.svg";
import BenefitPatients from "@/component/patientManagement/banefits";
import FeaturesPatient from "@/component/patientManagement/featurePatients";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import { useRouter } from "next/router";
import { getFeatureData } from "@/utils/service";
import HeroComp from "@/component/feature/HeroComp";
import CardsGroups from "@/component/feature/benefitCards";
import MultiColorCardSec from "@/component/feature/multiColorCard";
import NavDetailsSection from "@/component/feature/navDetailsSection";
const revenueCycleBannerData = [
  {
    maxWidth: "maxWidth-55r p-5",
    bgImg: bgImg,
    // subHeading: "Doctor Appointment Management Software",
    HeadingFirst: "Revenue Cycle Management",
    description:
      "A revenue cycle management is the complete financial process followed in the medical and healthcare industry to manage revenue and billing. It includes calculating the revenue right from registration to the final payment from the side of the patient for the service he is approaching the medical facility for. Revenue Cycle Management is based on the concept that when a patient schedules an appointment, all the efforts and measures of the medical setting should be focused on convincing the patient to try their services and finalize the claims and all the financial payments.",
  },
];
const whyRCMSoftware = [
  {
    HeadingClass: "max-width-full",
    HeadingFirst: "Why are RCM Software Solutions ",
    HeadingSec: "Important for Healthcare Facilities",
    // paraClass: "pb-40",
    // para: "Following are some of the benefits that demand you to implement hospital management  software to streamline your medical operations",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:web-design-02",
        heading: "Well Designed",
        para: "A well-designed and dedicated medical billing software and RCM software make the whole billing and collection process smoother by adding more accuracy to it",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "icon-park-outline:bill",
        heading: " Intelligent Medical Billing Solutions",
        para: "As one of the Intelligent Medical billing solutions, Revenue Cycle Management helps medical settings, doctors, and clinics to reduce denied claims and make it easier for patients to pay online",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:security",
        heading: "Patient Data Safely",
        para: "While there is a threat of constant data breaches in today’s time, RCM systems are a great way to manage and save patient data safely",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "oui:integration-security",
        heading: "Seamless Integration",
        para: "RCM is one of the best medical billing solutions which seamlessly integrates accounting and EHR (Electronic Health Records)",
      },
    ],
  },
];
const benefitsOfHolisticRevenue = {
  HeadingFirst: "Benefits of a Holistic Revenue",
  HeadingSec: "Cycle Management",
  HeadingClass: "max-width-full",
  // ParaClass: "pb-40",
  // Para: "Following are some of the key features of the advanced healthcare management systems",
  CardData: [
    {
      icon: "grommet-icons:task",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      heading: "Increased Efficiency",
      headingClass: "max-width-full",
      description:
        "Revenue cycle management streamlines billing and collections while decreasing delays which increases efficiency",
    },
    {
      icon: "carbon:money",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "35",
      IconHeight: "35",
      headingClass: "max-width-full",
      heading: "Enhanced Revenue",
      strockWidth: "1",
      description:
        "A sharp eye on the costs, budget, and how to spend the money, ensures an efficient flow of income increasing the revenue of the organization",
    },
    {
      icon: "carbon:dashboard",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      headingClass: "max-width-full",
      heading: "Better Patient Experiences",
      description:
        "When tasks are automated quality services are delivered to patients on time which increases patient satisfaction",
    },
    {
      icon: "solar:code-broken",
      bgColor: "#FFF2DD",
      IconbgColor: "#FAE2BB",
      IconWidth: "37",
      IconHeight: "37",
      headingClass: "max-width-full",
      heading: "Identifying and resolving medical coding errors",
      description:
        "The sector of healthcare is of great responsibility. Even a small error can pose questions about your responsibilities toward your patients. Reduce these errors with the help of good RCM software",
    },
    {
      icon: "streamline:bug-antivirus-shield",
      bgColor: "#FFE9E2",
      IconWidth: "35",
      IconHeight: "35",
      IconbgColor: "#8512E01A",
      heading: "Avoids healthcare frauds",
      headingClass: "max-width-full",
      description:
        "Digital fraud has become a new norm in this advanced world. From data breaches to privacy concerns, RCM software helps you manage these threats",
    },
    {
      icon: "iconamoon:profile",
      bgColor: "#E0E1FD",
      IconbgColor: "#08C7FB1A",
      heading: "Decrease Administrative Burdens",
      headingClass: "max-width-full",
      description:
        "Administrative tasks at a healthcare organization can be numerous. RCM software helps you decrease the administrative burden",
    },
  ],
};
const effectiveRevenueCycle = {
  HeadingFirst: "Steps for an Effective",
  HeadingSec: "Revenue Cycle",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "teenyicons:appointments-outline",
      heading: "Appointment scheduling",
      description:
        "Convincing the patients that they are in need of your services is the step where the revenue cycle for healthcare begins. Appointment scheduling includes approaching potential patients and collecting information like patient name, contact information and insurance coverage, etc",
    },
    {
      icon: "fluent-mdl2:onboarding",
      heading: "Registration",
      description:
        "The next step in the revenue cycle for healthcare includes completing patient intake, including insurance verification, front-desk collections, and collecting patient demographics",
    },
    {
      icon: "teenyicons:money-outline",
      heading: "Charge capture for services",
      description:
        "Assigning medical procedure and diagnosis codes for the encounter",
    },
    {
      icon: "icon-park-outline:bill",
      heading: "Billing",
      description:
        "Creating clean claims to receive reimbursement from insurers and provide bills for patients",
    },
  ],
};

const RevenueManagementSoftwareBanafit = {
  ParaClass: "p-0",
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Benefits of Revenue Cycle",
  HeadingSec: "Management (RCM) Software",
  Para: "Taking advanced and robust software for Revenue Cycle Management for your practices has the following significant benefits",
  RightData: [
    {
      path: "1",
      listItem: "Efficient Claims Management",
      ListData:
        "With the help of a good Revenue Cycle for healthcare software, it becomes effortless to automate the claims coding and submission process. Accurate and timely claims submission is one of the most significant benefits of revenue cycle management software.  ensuring accurate and timely claims submission",
      Icon: "carbon:id-management",
    },
    {
      path: "2",
      listItem: "Billing Accuracy",
      ListData:
        "The accuracy in billing and accountancy with the help of software not only makes it easier for the administration but also fosters mutual trust between you and your customers.",
      Icon: "icon-park-outline:bill",
    },
    {
      path: "3",
      listItem: "Improved Revenue Analysis",
      ListData:
        "Comprehensive financial reports, analytics, and insights can hugely help medical practices to identify the strategies that are beneficial to them. Medical billing software helps medical practices to identify trends and make informed decisions to drive more profit.",
      Icon: "carbon:money",
    },
    {
      path: "4",
      listItem: "Compliance & Risk Management",
      ListData:
        "Health organizations and medical practices can need help in fulfilling the complex regulatory and billing compliance requirements. A medical billing services company can help them mitigate the risks while making the practice integrate with various regulatory compliances and regulations.",
      Icon: "mdi:git-issue",
    },
  ],
};
const whyChooseSoftware = [
  {
    HeadingClass: "max-width-full",
    HeadingFirst: "Why Choose Us As Your Premier ",
    HeadingSec: "Medical Billing Services Company",
    // paraClass: "pb-40",
    cardType: "practice",
    // cardClass: "grid-cols-3",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "marketeq:secure",
        heading: "Modern, Secure, Cloud-Based EMR",
        iconColor: "#306CFE",
        IconWidth: "45",
        IconHeight: "45",
        strockWidth: "4",
        description:
          "EaseCare-Clarity focuses on efficiency and seamless integration of resources and thus, we offer a modern, secure, and cloud-based EMR system to ensure high performance and become the best billing services company",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "icon-park-outline:bill",
        iconColor: "#19BB7D",
        heading: "Integrated Billing Solutions",
        description:
          "We focus on providing the best software for medical billing for effortless billing management so that healthcare providers can shift their overall focus toward patient care",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:analytics-outline",
        iconColor: "#3278B1",
        IconWidth: "45",
        IconHeight: "45",
        heading: "Comprehensive Analytics Tools",
        description:
          "We have the most advanced medical invoicing software which provides extensive insights and practice",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "clarity:mobile-line",
        iconColor: "#08C7FB",
        IconWidth: "45",
        IconHeight: "45",
        heading: "Mobile Accessibility",
        description:
          "Stay connected with your practice on the go with the Clarity Mobile App, which makes you easily access all the patient records and appointment scheduling on your mobile device with all the real-time data",
      },
    ],
  },
];
const HowChooseBestBilling = {
  HeadingFirst: "How to Choose the Best Medical",
  HeadingSec: "Billing Services Company",
  para: "Following are some of the factors, you should not miss when you are searching for a good medical billing services company for your  organization",
  cardType: "varient",
  CardData: [
    {
      icon: "solar:scale-broken",
      heading: "Determining the Scale",
      description:
        "The first thing to consider when you are looking for the best medical billing services company is to measure the scale of your business or clinic because various billing services specialize in different things",
    },
    {
      icon: "carbon:collaborate",
      colorIcon: "#19BB7D",
      heading: "Finding Companies with Experience in Your Specialty",
      description:
        "It is a must to make sure that you find a company that has experience and expertise in your specialty. There can be different intelligent medical billing solutions that cover a number of areas but finding one which covers your specialization broadly is good for you",
    },
    {
      icon: "teenyicons:cost-estimate-outline",
      colorIcon: "#3278B1",
      heading: "Asking for Cost Breakdown",
      description:
        "When it comes to outsourcing a medical billing services company, make sure that you can get the optimum cost breakdown while keeping the thing in mind that what are the things you will be paying for",
    },
    {
      icon: "material-symbols-light:rule",
      colorIcon: "#08C7FB",
      IconWidth: "60",
      IconHeight: "60",
      heading: "Compliance with the Relevant Rules and Regulations",
      description:
        "When you are looking for a company that will provide you with all the facilities related to the best medical billing solutions, it is a must to ensure safety while confirming that they are compliant with the industry standards. Any failure in this thing can largely affect your name in the healthcare sector",
    },
  ],
};
const MedicalBilling = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  const [data, setData] = useState([]);
  useEffect(() => {
    getFeaturesData(slug);
  }, [slug]);

  const getFeaturesData = async (slug) => {
    await getFeatureData(slug).then((res) => {
      setData(res);
    });
  };
  return (
    <React.Fragment>
      {data.map((item) => (
        <React.Fragment key={item?._id}>
          <Layout>
            <HeadPart
              title={"Efficient Medical Billing Software Solutions for Clinics"}
              description={
                "Automate your clinic's operations with our doctor appointment software, an all-in-one solution for efficiently handling scheduling, patient registration, billing."
              }
              imageUrl={FeaturesPreviewImage}
            />
            <HeroComp data={item.heroComp} />
            {/* <PatientManagmentBanner data={revenueCycleBannerData} /> */}
            {/* <BenefitPatients data={whyRCMSoftware} /> */}
            <CardsGroups data={item.importantForHeathCare} />
            <MultiColorCardSec data={item.benefitsOfHolisticRCM} />
            <CardsGroups data={item.stepsForEffectiveRevenue} />
            <NavDetailsSection data={item.benefitsOfRCM} />
            <CardsGroups data={item.chooseBestMedicalBilling} />
            <CardsGroups data={item.whyChooseUs} />
            {/* <FeaturesPatient data={benefitsOfHolisticRevenue} /> */}
            {/* <div
              style={{
                paddingBottom: "70px",
              }}
            >
              <VarientTypes TypesVarientData={effectiveRevenueCycle} />
            </div> */}
            {/* <SelectRight data={RevenueManagementSoftwareBanafit} /> */}
            {/* <VarientTypes TypesVarientData={HowChooseBestBilling} /> */}
            {/* <div style={{ backgroundColor: "#FCFBF6", margin: "25px 0px 0px" }}>
              <BenefitPatients data={whyChooseSoftware} />
            </div> */}
          </Layout>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default MedicalBilling;
