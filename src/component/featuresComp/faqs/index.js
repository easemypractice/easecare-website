import React, { forwardRef } from "react";
import styles from "@/styles/Patient.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";
import { Icon } from "@iconify/react";
import { Heading } from "@radix-ui/themes";
const accData = [
  {
    id: "1",
    head: "Is the Follow-Up Facility Available in Clarity?",
    details: "Yes, EaseCare Clarity also act as Patient follow up software",
  },
  {
    id: "2",
    head: "Is this patient scheduling software essential for managing appointments efficiently?",
    details:
      "Yes, Clarity's patient scheduling software manages appointments efficiently, reducing no-shows and improving workflow.",
  },
  {
    id: "3",
    head: "Does this patient record software simplify managing medical records?",
    details:
      "Yes, Clarity simplifies managing medical records with its patient record software.",
  },
  {
    id: "4",
    head: "Are medical history tracking features available?",
    details:
      "Yes, Clarity includes comprehensive medical history tracking features.",
  },
  {
    id: "5",
    head: "Can I operate Clarity without the Internet?",
    details:
      "Yes, it can operate without the internet. You can easily use it & once the internet connection is restored it syncs all data to the secured cloud automatically.",
  },
];
const FAQs = () => {
  return (
    <div className={`${styles.FAQSection} container`}>
      <Heading as="h2" className={`${styles.Heading} text-start p-5`}>
        FAQ
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
