import React from "react";
import styles from "@/styles/Patient.module.css";
// import { FeaturesCard } from "../featurePatients";
import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";
import MultiColorCardSec from "./multiColorCard";
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

const TabsSelectCards = ({ data }) => {
  const defaultValue = data ? data.map((item) => item.tabTitle) : [];
  return (
    <React.Fragment>
      {data && (
        <div style={{ backgroundColor: "#FCFBF6", padding: "50px 0px 0px" }}>
          <div className="container">
            <TabsRoot defaultValue={defaultValue[0]}>
              <TabsList className="tabsTrigger">
                {data.map((item, index) => (
                  <TabsTrigger
                    className="tabTrigger"
                    value={item.tabTitle}
                    key={index}
                  >
                    {item.tabTitle}
                  </TabsTrigger>
                ))}
              </TabsList>
              {data.map((item, index) => (
                <TabsContent value={item.tabTitle} key={index}>
                  <div className="flex justify-center flex-col items-center">
                    <MultiColorCardSec data={item.tabCard} />
                  </div>
                </TabsContent>
              ))}
            </TabsRoot>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TabsSelectCards;
