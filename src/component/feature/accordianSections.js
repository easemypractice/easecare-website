import React, { forwardRef } from "react";
import styles from "@/styles/Patient.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";
import { Icon } from "@iconify/react";
import CustomBlockText from "../customBlockText";
const AccordianSections = ({ data }) => {
  return (
    <>
      {data && (
        <div className={`${styles.FAQSection} container`}>
          <div
            className={`${styles.Heading} text-start ${styles.headingPadding}`}
          >
            <CustomBlockText blocks={data?.heading} />
          </div>
          <AccordionComp data={data?.accor} />
        </div>
      )}
    </>
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

const AccordionComp = ({ data }) => {
  return (
    <AccordionRoot type="single" collapsible>
      {data &&
        data?.map((item, index) => (
          <AccordionItem value={item?._key} key={index}>
            <AccordionTrigger>{item?.accordienTitle}</AccordionTrigger>
            <AccordionContent>{item?.accordienContent}</AccordionContent>
          </AccordionItem>
        ))}
    </AccordionRoot>
  );
};
export default AccordianSections;
