import { Layout } from "@/app/layout";
import React from "react";
import PatientManagmentBanner from "@/component/featuresComp/banner";

import BenefitPatients from "@/component/featuresComp/banefits";
import ContactUsPatients from "@/component/featuresComp/contactUsPatient";
import Divider from "@/component/featuresComp/divider";
import VarientTypes from "@/component/featuresComp/varientsTypes";
import FeaturesPatient from "@/component/featuresComp/featurePatients";
import contactImg from "@/images/contactPanaImg.svg";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import ChallangeFaced from "@/component/featuresComp/challangeFaced";
import SelectRight from "@/component/featuresComp/selectRightPatient";
import FAQs from "@/component/featuresComp/faqs";
import bgImg from "@/images/patientManageBanner.png";
import { useRouter } from "next/router";
import Testimonail from "@/component/home/testimonial";
import CtaSection from "@/component/home/cta";
import Head from "next/head";
import StandOutComp from "@/component/featuresComp/standOutComp";
import HeadingDescComp from "@/component/featuresComp/headingDescComp";
import VideoComp from "@/component/featuresComp/videoComp";
const patientBannerData = [
  {
    descWid: "maxWidth-55r spacing-1",
    bannerStyle: "align-center",
    bgImg: bgImg,
    subHeading: "Patient Management System",
    HeadingFirst: "Patient Management",
    HeadingSecound: "Software System",
    description:
      "Manage Patient Appointments, EMRs, Billing & more with our powerful ",
    descriptionTwo: "Patient Management Software",
    btnText: "Book Free Demo",
    btnLink: "/book-a-demo",
  },
];

const VideoDemo = [
  {
    HeadingFirst: "How EaseCare Clarity Works in Real Time?",
    para: "Take a quick look at our Patient Management Software with this video:",
    maxWidth: "max-width-90 p-5",
    paraClass: "pb-50",
  },
];
const standOut = [
  {
    HeadingClass: "maxWidth-55r pb-20",
    paraClass: "maxWidth-80 ",
    HeadingFirst: "How EaseCare Clarity Patient",
    HeadingSec: "Management System Stands out?",
    cardType: "benefit",
    para: "EaseCare Clarity is very easy-to-use patient management software that helps you manage patient care in one place. It keeps all your patient records organized, makes scheduling appointments simple, & lets you communicate with patients easily.",
    paraTwo:
      "Designed for modern healthcare practices, it includes features like secure messaging, automatic reminders, video appointments, billing & more. This means your clinic can run smoothly, giving you more time to care for your patients.",

    leftList: [
      {
        listIcon: "teenyicons:appointments-outline",
        listname: "Appoinments",
        dash: "--------------",
      },
      {
        listIcon: "icon-park-outline:bill",
        listname: "Billing",
        dash: " ------------------------",
      },
      {
        listIcon: "bx:video-plus",
        listname: "Video Consultation",
        dash: " ------",
        Iconwidth: 55,
      },
      {
        listIcon: "material-symbols-light:patient-list-outline",
        listname: "Patient Records",
        dash: " ----------",
        Iconwidth: 45,
      },
    ],
    rightList: [
      {
        listIcon: "carbon:report",
        listname: "Invoice",
      },
      {
        listIcon: "healthicons:communication-outline",
        listname: "Communication tools",
      },
      {
        listIcon: "hugeicons:analytics-02",
        listname: "Patient Portal",
      },
      {
        listIcon: "material-symbols-light:analytics-outline",
        listname: "Analytics & Reporting",
      },
    ],
  },
];
const patientBenefits = [
  {
    HeadingFirst: "Benefits of Patient",
    HeadingSec: "Management Software",
    para: "EaseCare Clarity patient management software has numerous benefits, however below are the most popular benefits as experienced by our clients:",
    maxWidth: "maxWidth-45r p-5",
    cardType: "benefit",
    paraClass: "pb-50",
    benefitData: [
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "carbon:time",
        heading: "Time-Saving",
        para: "Since EaseCare Clarity itself handles all administrative tasks like scheduling & managing patient records, therefore it saves your important",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "carbon:document-requirements",
        heading: "Better Organization",
        para: "What best is if your clinic has many doctors, then each doctor will have a separate & secured data system",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "healthicons:communication-outline",
        heading: "Improved Communication",
        para: "With functionalities like messaging, automated reminders, video calling etc our patient management system keeps everyone on the same page.",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "carbon:dashboard",
        heading: "Enhanced Patient Experience",
        para: "A happy Patient is a returning Patient. Clarity has managed all features for top-notch patient experience like online appointments booking, receive reminders, and easy communication with your clinic",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "vaadin:health-card",
        heading: "Very Easy to Start & Use",
        para: "Majority of doctors love our quick onboarding to patient management software. Also, our software has a very clean interface having only necessary buttons. This makes it very easy to use",
      },
      {
        HeadingWidth: "maxWidth-45r text-center",
        icon: "carbon:security",
        heading: "Data Security",
        para: "Unlike other Software, Your patient data is 100% secure in Clarity. Your patient data is never sold, shared or accessed. This is our Iron Cadet Guarantee. We have secured our cloud with Amazon 256-bit encryption service",
      },
    ],
  },
];
const SoftwareForEveryOne = [
  {
    HeadingFirst: "EaseCare Clarity Patient Management",
    HeadingSec: "System is for Everyone!!!",
    para: "It Doesn’t matter whether you are Dentist, Psychologist, Physiotherapist or Cardiologist etc. Clarity will definitely fit with your practice. At the same time, you can also claim an On-Demand Customization if needed.",
    maxWidth: "max-width-80 p-5",
    cardType: "benefit",
    backgroundColor: "#B8FECD",
  },
];

const ClearityInMobileNumber = [
  {
    HeadingFirst: "Want to Use EaseCare Clarity in your",
    HeadingSec: "Mobile Phone?",
    para: "If you want to use our patient management software in Mobile Phone, then don’t worry we also have a Mobile app. Just Download our fast running Clarity App from ",
    wantAppInMobilePhone: true,
    maxWidth: "max-width-80 p-5",
    cardType: "benefit",
    backgroundColor: "#FCFBF6",
  },
];
const FeaturesOfPatientManagement = [
  {
    maxWidth: "maxWidth-45r",
    HeadingClass: "py-10",
    HeadingFirst: "Features of Our Patient",
    HeadingSec: "Management Software",
    cardType: "practice",
    para: "Among many features, below are the most important features of our Patient management system software",
    benefitData: [
      {
        icon: "teenyicons:appointments-outline",
        iconColor: "#8512E0",
        heading: "Appointment Scheduling",
        description:
          "Walk-In/Video appointments booking by doctor, staff or Patient.",
        headingLink:
          "https://easecare.co/patient-appointment-scheduling-software",
      },
      {
        icon: "hugeicons:google-doc",
        iconColor: "#1AC55E",
        heading: "Patient Records Management",
        description:
          "Keep the whole record of every patient with the help of a patient record management system to connect better with them when they visit you again.",
      },
      {
        icon: "codicon:feedback",
        iconColor: "#08C7FB",
        heading: "Communication Tools",
        description:
          "With tools like automated reminders, messaging, whatsapp etc our patient management software enhances communication b/w you & your patient.",
      },
      {
        icon: "icon-park-outline:bill",
        iconColor: "#10576B",
        heading: "Billing",
        description:
          "With tools like automated reminders, messaging, whatsapp etc our patient management software enhances communication b/w you & your patient.",
      },
      {
        icon: "hugeicons:analytics-02",
        iconColor: "#1AC55E",
        heading: "Analytics & Reporting",
        description:
          "Detailed Information about Patients, Revenue, Billing & more.",
      },
      {
        icon: "carbon:security",
        iconColor: "#08C7FB",
        heading: "Data Security",
        description:
          "Detailed Information about Patients, Revenue, Billing & more.",
      },

      {
        icon: "mdi:cloud-outline",
        iconColor: "#10576B",
        heading: "Cloud Based",
        description:
          " In this modern world, Cloud Based software & apps has become the new norm. With our cloud based patient management software, you don’t need to handle complicated & expensive servers. You can access records anywhere you want.",
      },
      {
        icon: "grommet-icons:task",
        iconColor: "#1AC55E",
        heading: "Prescription Management",
        description:
          "Easily manage and renew prescriptions with just a few clicks using EaseCare Clarity. Our software ensures accurate, safe, and efficient medication management for your patients.",
        headingLink: "https://easecare.co/prescription-software-for-doctors",
      },
    ],
  },
];

const patientRightData = {
  Heading: "Why Choose us for Best Patient Management Software in India",
  Para: "If you have decided to have a patient management software for your clinic or Hospital then Opting EaseCare Clarity should be a no brainer for you. Here are some reasons:",
  RightData: [
    {
      path: "access-requirement",
      listItem: "24X7 Support",
      ListData:
        "If you face any problem while using Clarity, we are just a call or message away. Our Highly experienced support team will solve your problem asap.",
      Icon: "fluent:person-support-20-regular",
      btnText: "Get a free demo",
      btnLink: "/book-a-demo",
    },
    {
      path: "Security",
      listItem: "Security",
      ListData:
        "As discussed above, What separates EaseCare Clarity from other software is our top-rated security measures in the software. Your Data is 100% safe. It's our Guarantee.",
      Icon: "carbon:security",
      btnText: "Get a free demo",
      btnLink: "/book-a-demo",
    },
    {
      path: "software-feature",
      listItem: "Very Easy to Use",
      ListData:
        "Other software are very uncomplicated and unclear, usually filled with a lot of trash options. Here comes Clarity Patient management system with easy to use interface & only with necessary options.",
      Icon: "mdi:feature-search-outline",
      btnText: "Get a free demo",
      btnLink: "/book-a-demo",
    },
    {
      path: "friendliness",
      listItem: "Doctor Centric Software",
      ListData:
        "Unlike other options, EaseCare Clarity has been prepared by keeping the doctor point of view in mind. From Billing to appointment everything has been made doctor centric, therefore this leads to clinic success in every operation.",
      Icon: "healthicons:doctor-male-outline",
      contentLink: "",
      contentLinkText: "Billing",
      ListDataAfterLink:
        " to appointment everything has been made doctor centric, therefore this leads to clinic success in every operation.",
      Icon: "healthicons:doctor-male-outline",
      btnText: "Get a free demo",
      btnLink: "/book-a-demo",
    },
    {
      path: "cloud-based",
      listItem: "1-Month FREE Use",
      ListData:
        "Our company runs around your satisfaction only. That’s why we are giving an exclusive 1-Month FREE use of our software. If you are satisfied then you continue further or If not then you can leave without any question. No Credit Card Required!",
      Icon: "tabler:free-rights",
      btnText: "Get a free demo",
      btnLink: "/book-a-demo",
    },
  ],
};

const PatientManagement = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");

  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>Best Patient Management Software for Clinics | Easecare</title>
          <meta
            name="description"
            content={
              "Explore our Patient Management Software for medical practices, clinic management, doctor profiles, patient records, & consultations. Discover how it can enhance your practice."
            }
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            property="og:title"
            content={"Best Patient Management Software for Clinics | Easecare"}
          />
          <meta
            property="og:description"
            content={
              "Explore our Patient Management Software for medical practices, clinic management, doctor profiles, patient records, & consultations. Discover how it can enhance your practice."
            }
          />
          <meta
            property="og:image"
            content={"images/ogImage/PatientManagementSoftware.png"}
          />
          <link rel="canonical" href={`https://easecare.co/${slug}`} />
          <meta
            name="google-site-verification"
            content="b744oLuFW6xcSOeBopr-I3Q7lYzAIg6IDHc--wnvpVI"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "Patient Management Software",
                image:
                  "https://easecare.co/_next/static/media/logo.ab45f14b.svg",
                description:
                  "Patient Management Software helps you manage all the things related to your patients for example - scheduling appointments, billing, evaluation, treatment, and discharge.",
                brand: {
                  "@type": "Brand",
                  name: "EaseCare Clarity",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "151",
                },
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "VideoObject",
                name: "EaseCare Clarity Patient Management Software",
                description:
                  "Discover how EaseCare Clarity's Patient Management Software can help you effortlessly manage your clinic's patients, appointments, and medical records. In this quick video, you'll see how easy it is to streamline patient care, improve efficiency, and enhance the patient experience. Use it for FREE for 1 Month! Learn more at easecare.co This aligns with your software’s value and includes your free trial offer",
                thumbnailUrl: "https://i.ytimg.com/vi/0zN_Ku-Golo/default.jpg",
                uploadDate: "2024-08-26T07:40:04Z",
                duration: "PT33S",
                embedUrl: "https://www.youtube.com/embed/0zN_Ku-Golo",
                interactionCount: "4",
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "VideoObject",
                name: "EaseCare Clarity Patient Management Software",
                description:
                  "Discover how EaseCare Clarity's Patient Management Software can help you effortlessly manage your clinic's patients, appointments, and medical records. In this quick video, you'll see how easy it is to streamline patient care, improve efficiency, and enhance the patient experience. Use it for FREE for 1 Month! Learn more at easecare.co This aligns with your software’s value and includes your free trial offer",
                thumbnailUrl: "https://i.ytimg.com/vi/0zN_Ku-Golo/default.jpg",
                uploadDate: "2024-08-26T07:40:04Z",
                duration: "PT33S",
                embedUrl: "https://www.youtube.com/embed/0zN_Ku-Golo",
                interactionCount: "4",
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Is the Follow-Up Facility Available in Clarity?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, EaseCare Clarity also act as Patient follow up software",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is this patient scheduling software essential for managing appointments efficiently?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Clarity's patient scheduling software manages appointments efficiently, reducing no-shows and improving workflow.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does this patient record software simplify managing medical records?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Clarity simplifies managing medical records with its patient record software.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are medical history tracking features available?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Clarity includes comprehensive medical history tracking features.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I operate Clarity without the Internet?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, it can operate without the internet. You can easily use it & once the internet connection is restored it syncs all data to the secured cloud automatically.",
                    },
                  },
                ],
              }),
            }}
          />
        </Head>
        <PatientManagmentBanner data={patientBannerData} />
        <div style={{ marginBottom: "50px" }}>
          <StandOutComp data={standOut} />
        </div>
        <BenefitPatients data={patientBenefits} />
        <ContactUsPatients
          image={contactImg}
          content="Want to explore the optimum benefits of our patient management system?"
          btnText="Contact us today"
          link={"contact"}
          alt="Patient management software"
        />
        <div style={{ margin: "20px 0px" }}>
          <VideoComp data={VideoDemo} />
        </div>
        <div style={{ margin: "50px 0px" }}>
          <HeadingDescComp data={SoftwareForEveryOne} />
        </div>
        <div style={{ backgroundColor: "#FCFBF6" }}>
          <BenefitPatients data={FeaturesOfPatientManagement} />
        </div>
        <div style={{ margin: "30px 0px" }}>
          <ContactUsPatients
            image={cuateImg}
            content="Want to explore more features? Contact EaseCare-Clarity today and get a free demo!"
            btnText="Contact us"
            link={"contact"}
            alt="Patient management software"
          />
        </div>
        <div style={{ margin: "50px 0px" }}>
          <HeadingDescComp data={ClearityInMobileNumber} />
        </div>
        <SelectRight data={patientRightData} />
        <div style={{ margin: "20px 0px" }}>
          <FAQs />
        </div>
        <Testimonail />
        <CtaSection />
      </Layout>
    </React.Fragment>
  );
};

export default PatientManagement;
