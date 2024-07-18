import React from "react";
import styles from "@/styles/Patient.module.css";
import { FeaturesCard } from "../featurePatients";
import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";
import { Heading } from "@radix-ui/themes";
const TabsRoot = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TabsList = styled(Tabs.List, {
  flexShrink: 0,
  display: "flex",
  maxWidth: "863px",
});

const TabsTrigger = styled(Tabs.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "white",
  padding: "0 20px",
  width: 209,
  height: 80,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: 1,

  border: "0.2px solid #000000",
  //   color: mauve.mauve11,
  userSelect: "none",
  //   "&:hover": { color: "#77FFA0" },
  //   "&:active": { background: "#77FFA0" },
  '&[data-state="active"]': {
    background: "#77FFA0",
    // boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
  //   "&:focus": { position: "relative", boxShadow: `0 0 0 2px black` },
});

const TabsContent = styled(Tabs.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: "white",
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
  backgroundColor: "#FCFBF6",
  //   "&:focus": { boxShadow: `0 0 0 2px black` },
});

const TriggerData = [
  {
    label: "Benefits",
    value: "benefits",
  },
  {
    label: "For Patients",
    value: "patients",
  },
  {
    label: "For Doctors",
    value: "doctors",
  },
  {
    label: "For Staff",
    value: "staff",
  },
];

const TabContantData = [
  {
    value: "benefits",
    headingFirst: "Benefits of Practice Management",
    headingSec: "Software for Clinics",
    featureData: [
      {
        icon: "fluent-mdl2:transition-effect",
        bgColor: "#E8D2F9",
        displayClass: "mobile-display-none",
        IconbgColor: "#8512E01A",
        heading: "Increased Efficiency",
        description:
          "Practice management solutions can handle a number of tasks at the same time efficiently and accurately increasing the efficiency of your clinic. It leads to better customer satisfaction as well as increased profit",
      },
      {
        icon: "solar:health-broken",
        bgColor: "#D0F4FF",
        IconbgColor: "#08C7FB1A",
        displayClass: "mobile-display-none",
        heading: "Providing Best Healthcare Facilities",
        description:
          "While your practice management software for health keeps records of everything from the name and address of the patient and their health conditions, it helps you in increasing patient care",
      },
      {
        icon: "carbon:finance",
        bgColor: "#D3F2E6",
        IconbgColor: "#19BB7D1A",
        displayClass: "mobile-display-none",
        heading: "Better Financial Status",
        description:
          "When your services are good and have quality, your patients recommend you more to other people which not only gives you a name and fame but also enhances your profit",
      },
      {
        icon: "fluent:people-team-24-regular",
        bgColor: "#FFF2DD",
        displayClass: "mobile-display-none",
        IconbgColor: "#FAE2BB",
        heading: "Less Human Resources Dependency",
        description:
          "While small clinics focus more on cutting costs, having good software for healthcare management helps you handle various tasks with accuracy and efficiency, you need fewer human resources for your clinic",
      },
    ],
  },
  {
    value: "patients",
    headingFirst: "Benefits for Patients",
    featureData: [
      {
        icon: "icon-park-outline:check-correct",
        bgColor: "#E8D2F9",
        IconbgColor: "#8512E01A",
        displayClass: "mobile-display-none",
        heading: "Utmost Convenience",
        description:
          "With the help of the medical management system, you are able to provide your patients and customers the utmost convenience as everything becomes smooth and automatic, from appointments to billing",
      },
      {
        icon: "solar:bill-broken",
        bgColor: "#D0F4FF",
        IconbgColor: "#08C7FB1A",
        heading: "Cost-Effective",
        displayClass: "mobile-display-none",
        description:
          "While there will be less human effort involved, it will be cost-effective for not only the doctors and clinics but also for the patients",
      },
      {
        icon: "healthicons:communication-outline",
        bgColor: "#D3F2E6",
        displayClass: "mobile-display-none",
        IconbgColor: "#19BB7D1A",
        heading: "Customized Care",
        description:
          "From rescheduling appointments to virtual meetings with doctors, medical practice management offers patients customization through various services",
      },
      {
        icon: "healthicons:health-data-security-outline",
        displayClass: "mobile-display-none",
        bgColor: "#FFF2DD",
        IconbgColor: "#FAE2BB",
        heading: "Data Security",
        description:
          "EaseCare’s healthcare management systems prioritize customer data. Patients don’t need to worry about data breaches or any unethical use of their personal data",
      },
    ],
  },
  {
    value: "doctors",
    headingFirst: "Benefits for Doctors",
    featureData: [
      {
        icon: "hugeicons:idea",
        bgColor: "#E8D2F9",
        displayClass: "mobile-display-none",
        IconbgColor: "#8512E01A",
        heading: "Enhanced Decision-Making",
        description:
          "While you have all the records with the help of practice management software for health, it gives an opportunity to doctors to enhance their decision-making skills",
      },
      {
        icon: "gala:multi",
        bgColor: "#D0F4FF",
        IconbgColor: "#08C7FB1A",
        displayClass: "mobile-display-none",
        heading: "Increased Productivity",
        description:
          "While the practice management software automates various tasks it enhances the productivity of doctors along with saving time",
      },
      {
        icon: "healthicons:communication-outline",
        bgColor: "#D3F2E6",
        displayClass: "mobile-display-none",
        IconbgColor: "#19BB7D1A",
        heading: "Providing More Tailored Solutions",
        description:
          "While healthcare management software keeps a record of everything, it helps doctors provide more personalized and tailored care according to the available data",
      },
      {
        icon: "grommet-icons:user-expert",
        bgColor: "#FFF2DD",
        displayClass: "mobile-display-none",
        IconbgColor: "#FAE2BB",
        heading: "Enhanced Expertise",
        description:
          "While among their daily busy schedule, doctors don’t get enough time to hone their skills, EaseCare practice management software provides healthcare professionals that extra time as it reduces workload",
      },
    ],
  },
  {
    value: "staff",
    headingFirst: "Benefits for Administrative Staff",
    featureData: [
      {
        icon: "grommet-icons:task",
        bgColor: "#E8D2F9",
        IconbgColor: "#8512E01A",
        heading: "Reduced Workload",
        displayClass: "mobile-display-none",
        description:
          "Implementing the best healthcare administration software means reducing the overload on the administration. It will give them proper time to utilize various resources and look after all the fields with expertise",
      },
      {
        icon: "solar:document-broken",
        bgColor: "#D0F4FF",
        displayClass: "mobile-display-none",
        IconbgColor: "#08C7FB1A",
        heading: "Streamlined Record-Keeping",
        description:
          "A practice management system streamlines the record-keeping process as it keeps a record of every patient's data. You will have access to a patient’s data for any future use",
      },
      {
        icon: "carbon:task",
        bgColor: "#D3F2E6",
        displayClass: "mobile-display-none",
        IconbgColor: "#19BB7D1A",
        heading: "Enhanced Task Management",
        description:
          "It becomes effortless for your administration to schedule appointments, and reminders, send messages, and track tasks as you implement good software for healthcare management",
      },
      {
        icon: "solar:bill-broken",
        bgColor: "#FFF2DD",
        displayClass: "mobile-display-none",
        IconbgColor: "#FAE2BB",
        heading: "Billing and Payment Process",
        description:
          "Billing and payment processes are some of the most draining and brainstorming things for the administrative staff of a healthcare organization. EaseCare’s healthcare management software makes it easy for your administrative staff",
      },
    ],
  },
];

const FeaturePractice = () => {
  return (
    <div style={{ backgroundColor: "#FCFBF6", padding: "78px 0px" }}>
      <div className="container">
        <TabsRoot defaultValue="benefits">
          <TabsList className="tabsTrigger">
            {TriggerData.map((item) => (
              <TabsTrigger
                className="tabTrigger"
                value={item.value}
                key={item.value}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {TabContantData.map((item, index) => (
            <TabsContent value={item.value} key={index}>
              <div className="flex justify-center flex-col items-center">
                <Heading
                  as="h2"
                  className={`${styles.Heading} max-width-full pt-6`}
                >
                  {item.headingFirst}{" "}
                  <span className={styles.GradHead}>{item.headingSec}</span>
                </Heading>
                <div className={styles.CardGrp}>
                  <FeaturesCard data={item.featureData} />
                </div>
              </div>
            </TabsContent>
          ))}
        </TabsRoot>
      </div>
    </div>
  );
};

export default FeaturePractice;
