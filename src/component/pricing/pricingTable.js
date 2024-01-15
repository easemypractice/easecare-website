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
} from "@radix-ui/themes";
import clsx from "clsx";
import React, { useState } from "react";

const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState("Free"); // Initial state - Free is selected

  const handlePlanButtonClick = (plan) => {
    setSelectedPlan(plan); // Update the selected plan when a button is clicked
  };
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
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <Box className="text-center">
                    <Heading as="h3" className="table-top-heading">
                      Free{" "}
                    </Heading>
                    <Button className="border-started-btn">Get Started</Button>
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
                    <Button className="started-btn">Get Started</Button>
                  </Box>
                </TableColumnHeaderCell>
                <TableColumnHeaderCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  {" "}
                  <Box className="text-center">
                    <Heading as="h3" className="table-top-heading">
                      Growth{" "}
                    </Heading>
                    <Button className="border-started-btn">Get Started</Button>
                  </Box>
                </TableColumnHeaderCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="table-sub-head">
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
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Doctors</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Staff members</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Patients</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    5000
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Appointments </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    250
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Tele-Consultations (Telecalling)
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    100 Minutes
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>File upload size</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    10 MB
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>File upload volume</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    150 MB per month
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
              </TableRow>
              {/* Features */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Features
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
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Import and export </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Billing </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Digital Prescriptions</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Vital Tracking</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Recurring Appointments</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Charting</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Customizable Templates</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Multiple Devices</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Migration from existing EMR
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Muti-clinics</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}{" "}
                    -
                  </div>{" "}
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
                    />{" "}  */}{" "}
                    -
                  </div>{" "}
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Personalised Booking Link (0% Commission)
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}{" "}
                    -
                  </div>{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Send Prescription via WhatsApp (Coming Soon)
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}{" "}
                    -
                  </div>{" "}
                  
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Invoice Prescription via WhatsApp (Coming Soon)
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}{" "}
                    -
                  </div>{" "}
                  
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Payment Link (Coming Soon)
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}{" "}
                    -
                  </div>{" "}
                  
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              {/* Communication */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Communication
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
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  SMS Appointment Confirmation{" "}
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  SMS Appointment Reminder
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  WhatsApp Appointment Confirmation (Coming Soon)
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                    -
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  WhatsApp Appointment Reminder (Coming Soon){" "}
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                    -
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>

              {/* Analytics & Reporting */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Analytics & Reporting
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
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Income tracking </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Current Month vs previous month income{" "}
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  New vs returning patient{" "}
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Appointments Report </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>

              {/* Security */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Security
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
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Admin roles</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                    -
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Data 256-AES bit encryption
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>

              {/* Support */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Support
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
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Standard Support</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
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
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Priority support</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                    -
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
                    -
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Dedicated Success Manager
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                    -
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
                    -
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              {/* Services */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Services
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
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Website Building</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                    -
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
                    -
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>
                  Google Profile Management
                </TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                    -
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
                    -
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>SEO Boost</TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    {/* <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "} */}
                    -
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
                    -
                  </div>
                </TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                >
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading"></TableRowHeaderCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none"
                  )}
                ></TableCell>
                <TableCell
                  className={clsx(
                    `border-b-pricing`,
                    selectedPlan === "Free" ? "mob-tab-visible" : "mob-none "
                  )}
                ></TableCell>
                <TableCell
                  className={clsx(
                    ``,
                    selectedPlan === "Growth" ? "mob-tab-visible" : "mob-none"
                  )}
                ></TableCell>
              </TableRow>
            </TableBody>
          </Table.Root>
        </Box>
      </Box>
    </div>
  );
};

export default PricingTable;
