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
                  Patient management
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
                <TableRowHeaderCell>Billing</TableRowHeaderCell>
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
                <TableRowHeaderCell>Appointment Scheduling</TableRowHeaderCell>
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
                <TableRowHeaderCell>Telecalling</TableRowHeaderCell>
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
              {/* clinic management */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Clinic management
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
                <TableRowHeaderCell>Muti-Clinic management</TableRowHeaderCell>
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
                <TableRowHeaderCell>Doctors management</TableRowHeaderCell>
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
                <TableRowHeaderCell>Staff Management</TableRowHeaderCell>
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
                <TableRowHeaderCell>
                  User Roles and Permissions
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
              {/* Analytics */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Analytics
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
                <TableRowHeaderCell>Income tracking</TableRowHeaderCell>
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
                <TableRowHeaderCell>
                  Current Month vs previous month income
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
                <TableRowHeaderCell>
                  New vs returning patient
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
                <TableRowHeaderCell>Appointment Status Data</TableRowHeaderCell>
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
                <TableRowHeaderCell>Billing Breakdown</TableRowHeaderCell>
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
                <TableRowHeaderCell>
                  Money collection and SMS reports
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
              {/* Appointment */}
              <TableRow className="table-sub-head">
                <TableRowHeaderCell className="left-heading">
                  Appointment
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
                <TableRowHeaderCell>Calendar View</TableRowHeaderCell>
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
                <TableRowHeaderCell>List View</TableRowHeaderCell>
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
              {/* Appointment */}
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
                <TableRowHeaderCell>Priority Support</TableRowHeaderCell>
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
                <TableRowHeaderCell>HIPAA-compliant service</TableRowHeaderCell>
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
