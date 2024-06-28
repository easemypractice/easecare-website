import { Layout } from "@/app/layout";
import React from "react";
import HeadPart from "@/component/Head/head";
import PatientManagmentBanner from "@/component/patientManagement/banner";
import bgImg from "@/images/appoinmentSchedule.png";
import FeaturesPreviewImage from "@/images/features-preview.jpg";
import featureImg from "@/images/featureImg.svg";
import cuateImg from "@/images/cuateImg.svg";
import BenefitPatients from "@/component/patientManagement/banefits";
import FeaturesPatient from "@/component/patientManagement/featurePatients";
import VarientTypes from "@/component/patientManagement/varientsTypes";
import SelectRight from "@/component/patientManagement/selectRightPatient";
import ContactUsPatients from "@/component/patientManagement/contactUsPatient";
import BenefitCard from "@/component/patientManagement/banefits/benefitCard";
const AppoinmentScheduleBanner = [
  {
    maxWidth: "max-width-full p-5",
    bannerStyle: "align-center",
    bgImg: bgImg,
    HeadingFirst: "Appointment Scheduling Software",
    description:
      "Scheduling an appointment is a brainstorming task where you have to give proper time to each patient without missing any because you don’t know which might turn into one of your potential customers. Does it take a long time, effort, and human resources for you to attract the attention of potential patients?",
  },
];
const MostCommonlyUsedAppoinmnetmethord = [
  {
    HeadingClass: "max-width-full p-5",
    HeadingFirst: "What is the Most Commonly Used",
    HeadingSec: "Appointment Scheduling Method?",
    paraClass: "pb-40",
    para: "There are various types of scheduling methods, some of them are as follows",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:time",
        IconWidth: "40",
        heading: "Time-Slot Scheduling",
        para: " A fixed time is allocated to each patien",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "fluent:people-28-regular",
        heading: "Wave Scheduling",
        para: "Taking groups of patients for each slot of time",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "teenyicons:appointments-outline",
        IconWidth: "35",
        heading: "Cluster Scheduling",
        para: "Allocating consecutive appointments for patients with similar service needs",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:matrix",
        heading: "Matrix Scheduling",
        IconWidth: "40",
        para: "Focusing on factors like provider availability, and patient preferences for scheduling appointments",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "streamline:waiting-appointments-calendar",
        heading: "Open Appointment Scheduling",
        IconWidth: "35",
        para: "Giving the patients the flexibility to choose a time slot according to their convenience",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "streamline:group-meeting-call",
        heading: "40/20 Scheduling",
        IconWidth: "35",
        para: "Giving more time like 40 minutes to new patients and 20 minutes for follow-up visits",
      },
    ],
  },
];
const whyChooseSoftware = [
  {
    HeadingWidth: "max-width-full text-center",
    icon: "healthicons:doctor-outline",
    heading:
      "Discover the Easiest Way for Doctors to Schedule Patient Appointments With the #1 Online Booking System",
    iconColor: "#8512E0",
    IconWidth: "45",
    strockWidth: "4",
    description:
      "Save your time with an all-in-one appointment booking software and the facilities of automating payments, business management, marketing, and many more to unlock the success of your medical practice.",
  },
  {
    HeadingWidth: "max-width-full text-center",
    icon: "lets-icons:world-2-light",
    iconColor: "#8512E0",
    IconWidth: "35",
    heading: "Book Appointments Anytime, Anywhere!",
    description:
      "Book appointments anytime, anywhere no matter if you are traveling to your clinic or having a conversation with your colleagues, because the EaseCare clarity appointment software makes you book appointments within seconds.",
  },
];
const GoodBuyToManualAppoinment = {
  HeadingFirst: "Say Goodbye to Manual",
  HeadingSec: "Appointment Scheduling",
  HeadingClass: "max-width-full",
  //   ParaClass: "pb-40",
  CardData: [
    {
      icon: "iconamoon:profile",
      bgColor: "#E8D2F9",
      IconbgColor: "#8512E01A",
      IconWidth: "30",
      heading: "Efficient Self-Scheduling",
      headingClass: "max-width-full",
      description:
        "EaseCare’s software offers glitch-free scheduling for increased efficiency. Patients get the convenience of booking appointments anytime, anywhere through an automated process",
    },
    {
      icon: "ion:time-outline",
      bgColor: "#D0F4FF",
      IconbgColor: "#08C7FB1A",
      IconWidth: "35",
      headingClass: "max-width-full",
      heading: "Automated Reminders and Conflict Avoidance",
      strockWidth: "1",
      description:
        "The software automates appointment reminders which helps you reduce no-shows and not miss even a single patient",
    },
    {
      icon: "material-symbols-light:patient-list-outline",
      bgColor: "#D3F2E6",
      IconbgColor: "#19BB7D1A",
      IconWidth: "45",
      // IconHeight: "30",
      headingClass: "max-width-full",
      heading: "Integrated Patient Profiles and EHR Access",
      description:
        "EaseCare’s patient appointment scheduling software allows you to integrate Electronic Health Records (EHR) with any in-house system",
    },
    {
      icon: "hugeicons:google-doc",
      bgColor: "#FFF2DD",
      IconWidth: "30",
      IconbgColor: "#FAE2BB",
      heading: "Efficient Record Keeping",
      headingClass: "max-width-full",
      description:
        "Keep even small records of your patients ready with EaseCare’s patient appointment scheduling software.",
    },
  ],
};
const ExampleOfPatientScheduling = [
  {
    HeadingClass: "max-width-55r py-10",
    cardClass: "grid-cols-3",
    HeadingFirst: "What Are the Examples of ",
    HeadingSec: "Patient Scheduling",
    paraClass: "pb-40",
    para: "There are various types of scheduling methods, some of them are as follows",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        cardBgColor: "white",
        icon: "carbon:event-schedule",
        heading: "Prioritizing appointments according to their urgency",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "guidance:in-patient",
        cardBgColor: "white",
        heading: "Patient recalls",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:reminder",
        cardBgColor: "white",
        heading: "Appointment Reminders",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "fluent:payment-28-regular",
        cardBgColor: "white",
        heading: "Book appointment",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "teenyicons:contact-outline",
        cardBgColor: "white",
        heading: "Confirm the appointment with a call or email",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "solar:document-add-outline",
        cardBgColor: "white",
        heading: "Streamlining patient appointments & many more ",
      },
    ],
  },
];
const EasyErrorFree = [
  {
    HeadingWidth: "max-width-full text-center",
    icon: "icon-park-outline:check-correct",
    heading: "Easy, Error-free Patient Appointment Scheduling CRM",
    IconWidth: "35",
    para: "The patient scheduling software of EaseCare works as CRM software where you can check all the history and other detailed information about your patients and staff members along with the facility to streamline various tasks.",
  },
  {
    HeadingWidth: "max-width-full text-center",
    icon: "material-symbols-light:clinical-notes-outline",
    heading: "Seamless Integration of EHR and in-House Systems",
    IconWidth: "45",
    para: "Electronic Health Records (EHR) is a useful advanced technology to keep a record of each and every data of your patients which you can share among various medical settings. At EaseCare, our patient appointment scheduling software is capable of seamlessly integrating the EHR and your in-house system which drastically enhances workflow and productivity.",
  },
  {
    HeadingWidth: "max-width-full text-center",
    icon: "mage:focus",
    heading: "Focus on What Matters Most – Your Patients!",
    IconWidth: "40",
    para: "If you want to become a successful name in the healthcare industry, making your patients realize that you care for them is a must. Make sure that your patients feel heard, listened and cared for with the best services with the most advanced solutions with EaseCare",
  },
];
const WhyLookForMadicalAppoinment = {
  HeadingFirst: "Why Look for a Medical Appointment",
  HeadingSec: "Scheduling Software?",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "hugeicons:user-id-verification",
      IconWidth: "35",
      heading: "Insurance Eligibility Verification",
      description:
        "Get to know the insurance coverage of the patients to serve them services accordingly whether it is on-demand verification for on-the-spot checks or run batches.",
    },
    {
      icon: "carbon:reminder",
      heading: "Timely Appointment Reminders",
      IconWidth: "35",
      description:
        "Don’t lose a single patient who could turn into your regular customer with timely appointment reminders that will reduce no-shows",
    },
    {
      icon: "material-symbols-light:clinical-notes-outline",
      IconWidth: "50",
      heading: "Quick Patient Summary ",
      description:
        "Get to know the patient quickly directly with the help of the calendar with information like contact information, clinical notes & appointment type & duration",
    },
    {
      icon: "fluent:status-48-regular",
      heading: "Color Code Views",
      IconWidth: "40",
      description:
        "Identify the urgency and status of the appointments with various color codes.",
    },
    {
      icon: "gala:add",
      heading: "Quick-add Functions",
      IconWidth: "35",
      description:
        "Check available time slots while checking the appointment histories along with scheduling them, all in one place",
    },
    {
      icon: "streamline:waiting-appointments-calendar",
      heading: "Recurring Appointments",
      IconWidth: "35",
      description:
        "Save your time by automating recurring appointments by adjusting them into a series",
    },
  ],
};
const BenefitOfPatientSchedulingSoftware = {
  HeadingFirst: "Benefits of Patient Scheduling",
  HeadingSec: "Software for Healthcare Professionals",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "hugeicons:service",
      IconWidth: "35",
      heading: "Improved Patient Satisfaction",
      description:
        "By automating the appointments, patient scheduling software reduces the wait times of patients increasing patient satisfaction.",
    },
    {
      icon: "teenyicons:appointments-outline",
      heading: "Enhanced Efficiency and Schedule Utilization",
      IconWidth: "35",
      description:
        "With automated tools and tasks, healthcare professionals can utilize their time more effectively",
    },
    {
      icon: "cil:money",
      IconWidth: "50",
      heading: "Cost-Effective",
      description:
        "While one single software is capable of automating various tasks, it reduces the need for various tools, equipment, and human resources, cutting down a big cost.",
    },
    {
      icon: "carbon:security",
      heading: "Secure and Organized Patient Data",
      IconWidth: "40",
      description:
        "Patient data is a non-negotiable thing for healthcare professionals. Patient appointment scheduling software helps doctors to organize patient data",
    },
  ],
};
const BenefitofPatient = {
  HeadingFirst: "Benefits of Patient Scheduling",
  HeadingSec: "Software for Patients",
  HeadingClass: "max-width-full",
  cardType: "varient",
  CardData: [
    {
      icon: "icon-park-outline:check-correct",
      IconWidth: "35",
      heading: "Convenience and Accessibility",
      description:
        "Patients don’t have to invest their time and money only in scheduling appointments when they can do it online at any time",
    },
    {
      icon: "ion:time-outline",
      heading: "Reduced Wait Times",
      IconWidth: "35",
      description:
        "Efficient scheduling only focuses on the proper time available for slots and thus, patients don’t have to wait longer when they reach the appointment location",
    },
    {
      icon: "carbon:dashboard",
      IconWidth: "35",
      heading: "Consistent Experience",
      description:
        "Online scheduling offers consistent convenience for patients making them utilize their time and money efficiently",
    },
    {
      icon: "codicon:workspace-trusted",
      heading: "Trustable Billing and Payment Processes",
      IconWidth: "35",
      description:
        "Billing and payment is one of the most sensitive and concerning things for patients. Offer your patients secure billing and win their trust",
    },
  ],
};

const FeaturesOfEaseCareAppointmentSoftware = [
  {
    HeadingClass: "max-width-full py-10",
    cardClass: "grid-cols-3",
    HeadingFirst: "Features of EaseCare Appointment",
    HeadingSec: "Scheduling Software",
    paraClass: "pb-40",
    cardType: "benefit",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        cardBgColor: "white",
        icon: "teenyicons:appointments-outline",
        heading: "Compelling Booking Page",
        para: "EaseCare is able to prioritize our customers by offering them personalized services. Book your appointment with a compelling booking page that is not only visually appealing but much more convenient, easy, and feasible.",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:reminder",
        cardBgColor: "white",
        heading: "Automated Reminders",
        para: "While we strive to achieve more to offer our patients the best services, we ensure that the same is delivered to you timely so that you can get the optimum benefits of all the services. Get instant automatic notifications and reminders for your appointments along with other updates.",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:free-cancellation-outline",
        cardBgColor: "white",
        heading: "Canceling and Rescheduling",
        para: "Offering flexibility to our patients is our foremost goal. Easily reschedule your appointment with the EaseCare app whenever you are unable to appear in the previous one.",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "hugeicons:computer-video-call",
        cardBgColor: "white",
        heading: "Tele Meetings",
        para: "Don’t have the time to visit the medical setting physically or just don’t like it? We respect your preference. Connect with our experts through video meetings that will be totally personalized and elaborate sessions to give you  100% satisfaction regarding the resolution to your problem",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "fluent:payment-20-regular",
        cardBgColor: "white",
        heading: "Payment Options",
        para: "We know that all people are comfortable with different payment platforms and methods and we completely understand your choices. Make safe and seamless payments whenever you take a service",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:integration-instructions-outline",
        cardBgColor: "white",
        heading: "Integration with Other Software",
        para: "For a seamless experience and to stay updated about what is going on through all the aspects of your business, you can integrate this software with other software like CRM",
      },
    ],
  },
];

const benefitOfPatientAppoinment = {
  ParaClass: "p-0",
  HeadingClass: "max-width-full p-0",
  HeadingFirst: "Benefits of EaseCare Patient",
  HeadingSec: "Appointment Scheduling Software",
  Para: "Patient appointment scheduling software has a number of features. It will help you out from providing personalized services to your customers to billing, it has a number of benefits. Following are some of the notable benefits of EaseCare’s patient appointment scheduling software",
  RightData: [
    {
      path: "1",
      listItem: "Efficient Time Management",
      IconWidth: "45",
      IconHeight: "45",
      ListData:
        "The starting point of your business and image is successful appointments. EaseCare’s scheduling software helps you in efficient time management for each appointment",
      Icon: "ion:time-outline",
    },
    {
      path: "2",
      listItem: "Convenience of booking",
      IconWidth: "35",
      IconHeight: "35",
      ListData:
        "At EaseCare, our software not only provides your customers the convenience of booking slots online but offers an overall web portal through which they can avail themselves of any type of service.",
      Icon: "teenyicons:appointments-outline",
    },
    {
      path: "3",
      listItem: "Effective Communication",
      IconWidth: "45",
      IconHeight: "45",
      ListData:
        "As EaseCare's software offers a central stage for healthcare providers, patients, and administrative staff, it leads to effective communication which is the root of efficiency.",
      Icon: "healthicons:communication-outline",
    },
    {
      path: "4",
      listItem: "Personalized Patient Care",
      IconWidth: "45",
      IconHeight: "45",
      ListData:
        "Based on the extensive reports of the software, healthcare professionals will be able to provide extensive and personalized care to the patients, which is one of the high demands of patients today.",
      Icon: "hugeicons:service",
    },
  ],
};

const EasyToSetup = [
  {
    HeadingClass: "max-width-80",
    HeadingFirst: "Patient Scheduling Software",
    HeadingSec: "That's Easy to Set Up",
    // paraClass: "pb-40",
    cardType: "practice",
    // cardClass: "grid-cols-3",
    benefitData: [
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:location",
        heading: "Multi-Location Support",
        iconColor: "#8512E0",
        IconWidth: "35",
        // IconHeight: "35",
        description:
          "Having multiple clinics across various locations? Manage them all by giving them a central stage on our EaseCare patient appointment scheduling software with the facilities of categorization. Assign doctors, and services and connect with us anytime for further assistance",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "streamline:keyboard-virtual",
        iconColor: "#19BB7D",
        IconWidth: "33",
        heading: "Virtual Consultations",
        description:
          " Switching between various platforms like Zoom, Google Meet, MS Teams, and EaseCare Meet can be confusing and irritating. Our software integrates all these platforms in one place to make sure that your journey of connecting with your patients is seamless",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "material-symbols-light:clinical-notes-outline",
        iconColor: "#3278B1",
        IconWidth: "55",
        heading: "Personalized Sessions",
        description:
          "our motive is to provide you with services of the utmost quality. While we value each and every patient, we focus on your personalized sessions with our expert healthcare professionals to get the solution to your health issue as soon as possible",
      },
      {
        HeadingWidth: "max-width-full text-center",
        icon: "carbon:document-requirements",
        iconColor: "#08C7FB",
        IconWidth: "45",
        heading: "Comprehensive Analysis",
        description:
          "EaseCare Appointment Scheduling software allows you to analyze your whole practice and performance in an extensive way. With elaborative reports, you can analyze which locations have more traffic, which of your services are being liked more by the patients, and many more things.",
      },
    ],
  },
];
const PrescriptionSoftware = () => {
  return (
    <Layout>
      <HeadPart
        title={"Clarity - Patient appointment scheduling software"}
        description={
          "Attracting new target audiences or making your old patients keep coming back to you, our electronic health records software is here to help you manage your patients."
        }
        imageUrl={FeaturesPreviewImage}
      />
      <PatientManagmentBanner data={AppoinmentScheduleBanner} />
      <div style={{ paddingTop: "50px" }}>
        <BenefitPatients data={MostCommonlyUsedAppoinmnetmethord} />
      </div>
      <div className="my-6">
        <ContactUsPatients
          image={featureImg}
          content="Want to make it more productive? Here is how you can do it"
          btnText="Get a free Demo"
        />
      </div>
      <div
        style={{ backgroundColor: "#FCFBF6", padding: "50px" }}
        className="mobileCol"
      >
        <div className="flex container mobileCol gap-20">
          <BenefitCard cardType={"practice"} data={whyChooseSoftware} />
        </div>
      </div>
      <FeaturesPatient data={GoodBuyToManualAppoinment} />
      <div
        style={{
          paddingBottom: "70px",
        }}
      >
        <BenefitPatients data={ExampleOfPatientScheduling} />
      </div>
      <div className="grid grid-cols-2 container mobileGrid gap-20">
        <BenefitCard cardType={"benefit"} data={EasyErrorFree} />
      </div>
      <div className="my-6">
        <ContactUsPatients
          image={cuateImg}
          content="EaseCare’s patient appointment scheduling software will help you at its best to improve your practice"
          btnText="Get a free Demo"
        />
      </div>
      <SelectRight data={benefitOfPatientAppoinment} />
      <div
        style={{
          paddingBottom: "70px",
          backgroundColor: "#F8FFFA",
        }}
      >
        <VarientTypes TypesVarientData={WhyLookForMadicalAppoinment} />
      </div>
      <div
        style={{
          paddingBottom: "70px",
          backgroundColor: "#FCFBF6",
        }}
      >
        <VarientTypes TypesVarientData={BenefitOfPatientSchedulingSoftware} />
      </div>
      <div
        style={{
          paddingBottom: "70px",
          backgroundColor: "#F8FFFA",
        }}
      >
        <VarientTypes TypesVarientData={BenefitofPatient} />
      </div>
      <div className="my-6">
        <ContactUsPatients
          image={featureImg}
          content="While patient appointment scheduling software is profitable both for you and your patients."
          btnText="Get a free Demo"
        />
      </div>
      <div
        style={{
          backgroundColor: "#F8FFFA",
          paddingBottom: "35px",
        }}
      >
        <BenefitPatients data={FeaturesOfEaseCareAppointmentSoftware} />
      </div>
      <div style={{ backgroundColor: "#FCFBF6" }}>
        <BenefitPatients data={EasyToSetup} />
      </div>
    </Layout>
  );
};

export default PrescriptionSoftware;
