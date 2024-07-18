"use client";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRow,
  TableRowHeaderCell,
  Text,
} from "@radix-ui/themes";
import { useRouter } from "next/router";
import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";

const tableData = [
  {
    type: "Usages",
    className: "table-sub-head",
  },
  {
    type: "Doctors",
    free: "1",
    essential: "₹800/doctor (Billed Yearly) and ₹1100/doctor (Billed Monthly)",
    growth: "₹1440/doctor (Billed Yearly) and ₹1800/doctor (Billed Monthly)",
  },
  {
    type: "Staff members",
    free: "Unlimited",
    essential: "Unlimited",
    growth: "Unlimited",
  },
  {
    type: "Patients",
    free: "500",
    essential: "10,000",
    growth: "50,000",
  },
  {
    type: "Appointments",
    free: "250 per month",
    essential: "500 per month",
    growth: "1000 per month",
  },
  {
    type: "Tele-consultations (Telecalling)",
    free: "100 minutes per month",
    essential: "2000 minutes per month",
    growth: "5000 minutes per month",
  },
  {
    type: "Clarity Credits",
    free: "50",
    essential: "200",
    growth: "500",
  },
  {
    type: "Data Administration",
    className: "table-sub-head",
  },
  {
    type: "File Upload Size",
    free: "10 MB",
    essential: "100 MB",
    growth: "200 MB",
  },
  {
    type: "File Storage",
    free: "250 MB",
    essential: "2 GB",
    growth: "5 GB",
  },
  {
    type: "Features",
    className: "table-sub-head",
  },
  {
    type: "Import and export",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Billing",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Digital Prescriptions",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Vital Tracking",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Recurring Appointments",
    free: "-",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Charting/ Visits History",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Customizable Templates",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Multiple Devices",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Migration from existing EMR",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Muti-clinics",
    free: "-",
    essential: "-",
    growth: "Y",
  },
  {
    type: "Personalised Booking Link (0% Commission)",
    free: "-",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Payment Link (Coming Soon)",
    free: "-",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Communication",
    className: "table-sub-head",
  },
  {
    type: "SMS Appointment Confirmation",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "SMS Appointment Reminder",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "WhatsApp Appointment Confirmation",
    free: "-",
    essential: "Credits info(1 WhatsApp = 2 Credit)",
    growth: "Credits info(1 WhatsApp = 1.2 Credit)",
  },
  {
    type: "WhatsApp Appointment Reminder",
    free: "-",
    essential: "Credits info(1 WhatsApp = 2 Credit)",
    growth: "Credits info(1 WhatsApp = 1.2 Credit)",
  },
  {
    type: "Send Prescription via WhatsApp",
    free: "-",
    essential: "Credits info(1 WhatsApp = 2 Credit)",
    growth: "Credits info(1 WhatsApp = 1.2 Credit)",
  },
  {
    type: "Invoice Prescription via WhatsApp",
    free: "-",
    essential: "Credits info(1 WhatsApp = 2 Credit)",
    growth: "Credits info(1 WhatsApp = 1.2 Credit)",
  },
  {
    type: "Analytics & Reporting",
    className: "table-sub-head",
  },
  {
    type: "Income tracking",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Current Month vs previous month income",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "New vs returning patient",
    free: "-",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Appointments Report",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Security",
    className: "table-sub-head",
  },
  {
    type: "Admin roles",
    free: "-",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Data 256-AES bit encryption",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "100% Cloud Based",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Support",
    className: "table-sub-head",
  },
  {
    type: "Standard Support",
    free: "Y",
    essential: "Y",
    growth: "Y",
  },
  {
    type: "Priority support",
    free: "-",
    essential: "-",
    growth: "Y",
  },
  {
    type: "Dedicated Success Manager",
    free: "-",
    essential: "-",
    growth: "Y",
  },
  {
    type: "Add-ons",
    className: "table-sub-head",
  },
  {
    type: "Patients",
    free: "-",
    essential: "₹50/month per 10,000 additional patient records",
    growth: "₹50/month per 10,000 additional patient records",
  },
  {
    type: "Appointments",
    free: "-",
    essential: "₹50/month per 100 additional appointments",
    growth: "₹50/month per 100 additional appointments",
  },
  {
    type: "Telecalling Minutes",
    free: "-",
    essential: "₹30/month per 60 additional minutes",
    growth: "₹30/month per 60 additional minutes",
  },
  {
    type: "Clarity Credits",
    free: "-",
    essential: "₹180/month per 200 additional credits",
    growth: "₹180/month per 200 additional credits",
  },
  {
    type: "Storage",
    free: "-",
    essential: "₹250/5GB/month",
    growth: "₹250/5GB/month",
  },
];
const PricingTable = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("Free"); // Initial state - Free is selected

  const handlePlanButtonClick = (plan) => {
    setSelectedPlan(plan); // Update the selected plan when a button is clicked
  };
  // const Getstarted = () => {
  //   router.push(
  //     "https://docs.google.com/forms/d/1LailTDqPH259y1i8_d5oM35VG-P2i1x5M-oLTrDmoiM/edit"
  //   );
  // };
  return (
    <div className="pricing-sec">
      <Box className="container">
        <Box className="pricing-grid">
          <Box className="mobile-pricing-tab">
            <Button
              onClick={() => handlePlanButtonClick("Free")}
              className={clsx(
                ``,
                selectedPlan === "Free" ? "active-plan-btn" : "plan-btn"
              )}
            >
              Free
            </Button>
            <Button
              onClick={() => handlePlanButtonClick("Essential")}
              className={clsx(
                ``,
                selectedPlan === "Essential" ? "active-plan-btn" : "plan-btn"
              )}
            >
              Essential
            </Button>
            <Button
              onClick={() => handlePlanButtonClick("Growth")}
              className={clsx(
                ``,
                selectedPlan === "Growth" ? "active-plan-btn" : "plan-btn"
              )}
            >
              Growth
            </Button>
          </Box>
          <Table.Root>
            <TableHeader>
              <TableRow className="table-header">
                <TableColumnHeaderCell className="box-shadow-none"></TableColumnHeaderCell>
                <TableColumnHeaderCell
                  className={clsx(
                    `column-two-head left`,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <Box className="text-center">
                    <Heading as="h3" className="table-top-heading">
                      Free{" "}
                    </Heading>
                    <Link href="/contact-us" className="border-started-btn">
                      Get Started
                    </Link>
                    {/* <Button className="border-started-btn">Get Started</Button> */}
                  </Box>
                </TableColumnHeaderCell>
                <TableColumnHeaderCell
                  className={clsx(
                    `column-two-head`,
                    selectedPlan === "Essential"
                      ? "mob-tab-visible"
                      : "mob-none"
                  )}
                >
                  {" "}
                  <Box className="text-center">
                    <Heading as="h3" className="table-top-heading">
                      Essential{" "}
                    </Heading>
                    <Link href="/contact-us" className="started-btn">
                      Get Started
                    </Link>
                  </Box>
                </TableColumnHeaderCell>
                <TableColumnHeaderCell
                  className={clsx(
                    `column-two-head right`,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  {" "}
                  <Box className="text-center">
                    <Heading as="h3" className="table-top-heading">
                      Growth{" "}
                    </Heading>
                    <Link href="/contact-us" className="border-started-btn">
                      Get Started
                    </Link>
                  </Box>
                </TableColumnHeaderCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {/* <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Usages
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                ></TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Essential"
                      ? "mob-tab-visible"
                      : "mob-none"
                  )}
                ></TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                ></TableCell>
              </TableRow> */}
              {tableData.map((item, index) => (
                <TableRow key={index} className={item?.className}>
                  <TableRowHeaderCell>{item.type}</TableRowHeaderCell>
                  <TableCell
                    className={clsx(
                      `table-left-force`,
                      selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                    )}
                  >
                    <div className="table-flexalign">
                      {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                      {item?.free}
                    </div>
                  </TableCell>
                  <TableCell
                    className={clsx(
                      ``,
                      selectedPlan === "Essential"
                        ? "mob-tab-visible"
                        : "mob-none"
                    )}
                  >
                    <div className="table-flexalign">
                      {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                      {item?.essential}
                    </div>
                  </TableCell>
                  <TableCell
                    className={clsx(
                      ``,
                      selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                    )}
                  >
                    <div className="table-flexalign">
                      {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                      {item?.growth}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table.Root>
        </Box>
      </Box>
    </div>
  );
};

export default PricingTable;
