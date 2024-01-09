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
import React from "react";

const PricingTable = () => {
  return (
    <div className="pricing-sec">
      <Box className="container">
        <Box className="pricing-grid">
          <Table.Root>
            <TableHeader>
              <TableRow className="table-header">
                <TableColumnHeaderCell className="box-shadow-none"></TableColumnHeaderCell>
                <TableColumnHeaderCell>
                  <Box className="text-center">
                    <Heading as="h3" className="table-top-heading">
                      Free{" "}
                    </Heading>
                    <Button className="border-started-btn">Get Started</Button>
                  </Box>
                </TableColumnHeaderCell>
                <TableColumnHeaderCell className="column-two-head ">
                  {" "}
                  <Box className="text-center">
                    <Heading as="h3" className="table-top-heading">
                      Essential{" "}
                    </Heading>
                    <Button className="started-btn">Get Started</Button>
                  </Box>
                </TableColumnHeaderCell>
                <TableColumnHeaderCell>
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
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Charting</TableRowHeaderCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Muti-Clinic management</TableRowHeaderCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Income tracking</TableRowHeaderCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Calendar View</TableRowHeaderCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableRowHeaderCell>Priority Support</TableRowHeaderCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
                  <div className="table-flexalign">
                    <Icon
                      icon="simple-line-icons:check"
                      color="#25C16F"
                      width={"24"}
                    />{" "}
                    Unlimited
                  </div>
                </TableCell>
                <TableCell>
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
                <TableCell></TableCell>
                <TableCell className="border-b-pricing"></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table.Root>
        </Box>
      </Box>
    </div>
  );
};

export default PricingTable;
