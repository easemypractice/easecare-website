import React, { forwardRef } from "react";
import styles from "@/styles/Patient.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";
import { Icon } from "@iconify/react";
import { Heading } from "@radix-ui/themes";
const accData = [
  {
    id: "1",
    head: "What is patient management software?",
    details:
      "Patient management software is a digital tool that helps healthcare providers enhance their performance and efficiency as they can manage patient information, appointments, medical records, billings, and more all through one single tool.",
  },
  {
    id: "2",
    head: "How does patient management software improve patient care?",
    details:
      "It streamlines administrative tasks, reduces paperwork, improves the accuracy of records, and allows quick access to patient history, leading to better and faster decision-making.",
  },
  {
    id: "3",
    head: "Is patient management software secure?",
    details:
      "Yes, clinic patient management systems adhere to strict security standards including encryption and access controls to protect patient data. At EaseCare, we understand our responsibility toward the data of our customers and assure you about your data.",
  },
  {
    id: "4",
    head: "Can patient management software integrate with other systems?",
    details:
      "Yes, you can integrate all the patient record management systems with other systems like electronic health records (EHR), billing systems, and other healthcare IT solutions.",
  },
  {
    id: "5",
    head: "How does patient management software help with scheduling?",
    details:
      "Patient scheduling software allows easy scheduling and rescheduling of appointments, sends reminders to patients, and helps avoid double bookings. EaseCare takes care of the requirements of every business and helps them implement the best tool under their preferred budget.",
  },
];
const FAQs = () => {
  return (
    <div className={`${styles.FAQSection} container`}>
      <Heading
        as="h2"
        className={`${styles.Heading} text-start ${styles.headingPadding}`}
      >
        FAQ:
      </Heading>
      <AccordionComp />
    </div>
  );
};

const AccordionRoot = styled(Accordion.Root, {
  borderRadius: "7px",
});

const AccordionItem = styled(Accordion.Item, {
  overflow: "hidden",
  marginTop: 12,
  border: "0.3px solid #8E8E8E",
  borderRadius: "7px",
});

const AccordionTrigger = forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      <div className="flex-1">{children}</div>
      <StyledChevron
        icon="icon-park-outline:down-c"
        width={23}
        height={23}
        color="#19BB7D"
      />
    </StyledTrigger>
  </StyledHeader>
));
AccordionTrigger.displayName = "AccordionTrigger";
const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);
AccordionContent.displayName = "AccordionContent";
const StyledHeader = styled(Accordion.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(Accordion.Trigger, {
  all: "unset",
  padding: "10px 34px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1,
  color: "#000000",
  backgroundColor: "white",
  lineHeight: "25px",
});

const StyledChevron = styled(Icon, {
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  '[data-state="open"] &': {
    transform: "rotate(180deg)",
  },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledContent = styled(Accordion.Content, {
  overflow: "hidden",
  fontSize: 15,
  color: "#5D6476",
  backgroundColor: "White",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "5px 32px 15px",
});

const AccordionComp = () => {
  return (
    <AccordionRoot type="single" collapsible>
      {accData.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionTrigger>{item.head}</AccordionTrigger>
          <AccordionContent>{item.details}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};
export default FAQs;
