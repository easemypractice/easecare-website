import { Icon } from "@iconify/react";
import { Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const CloudBased = () => {
  return (
    <div className="cloudBased">
      <Heading as="h1">
        Cloud-based Clinic Management <br /> Software to Drive Your Clinic’s
        Needs
      </Heading>
      <p>
        At EaseCare, India&apos;s best software for healthcare management,
        doctors&apos; #1
        <br /> choice for modern practice management, simplifying patient care,
        <br />
        appointments, billing, and interactions seamlessly for modern practices.
      </p>
      {/* <div className="CloudCardGrp"> */}
      <div className="CardGrp">
        <div className="CloudCard">
          <Link href={"/patient-management"}>
            <p>Patient Management System</p>
            <Icon
              className="CardIcon"
              icon={"mdi:arrow-top-right"}
              width={40}
              height={20}
            />
          </Link>
        </div>
        <div className="CloudCardbg">
          <div className="CloudCard2">
            <Link href={"/practice-management"}>
              <p>Practice Management Software</p>
              <Icon
                icon={"mdi:arrow-top-right"}
                width={40}
                color={"#8512E0"}
                height={20}
                className="CardIcon"
              />
            </Link>
          </div>
        </div>
        <div className="CloudCard">
          <p>Clinic Management Software</p>
          <Icon
            className="CardIcon"
            icon={"mdi:arrow-top-right"}
            width={40}
            height={20}
          />
        </div>
        <div className="CloudCardbg">
          <div className="CloudCard2">
            <p>Healthcare Management Software</p>
            <Icon
              icon={"mdi:arrow-top-right"}
              color={"#8512E0"}
              width={40}
              height={20}
              className="CardIcon"
            />
          </div>
        </div>
        <div className="CloudCard">
          <p>Doctor Appointment System</p>
          <Icon
            className="CardIcon"
            icon={"mdi:arrow-top-right"}
            width={40}
            height={20}
          />
        </div>
        <div className="CloudCardbg">
          <div className="CloudCard2">
            <p>Medical Billing Software</p>
            <Icon
              icon={"mdi:arrow-top-right"}
              color={"#8512E0"}
              width={40}
              height={20}
              className="CardIcon"
            />
          </div>
        </div>
        <div className="CloudCard">
          <p>Electronic Health Records Software</p>
          <Icon
            className="CardIcon"
            icon={"mdi:arrow-top-right"}
            width={40}
            height={20}
          />
        </div>
        <div className="CloudCardbg">
          <div className="CloudCard2">
            <p>Software For Multiple Clinic Chain</p>
            <Icon
              icon={"mdi:arrow-top-right"}
              color={"#8512E0"}
              width={40}
              height={20}
              className="CardIcon"
            />
          </div>
        </div>
        <div className="CloudCard">
          <p>Cloud Based Software</p>
          <Icon
            className="CardIcon"
            icon={"mdi:arrow-top-right"}
            width={40}
            height={20}
          />
        </div>
        <div className="CloudCardbg">
          <div className="CloudCard2">
            <p>ePrescription Software</p>
            <Icon
              icon={"mdi:arrow-top-right"}
              color={"#8512E0"}
              width={40}
              height={20}
              className="CardIcon"
            />
          </div>
        </div>
        {/* </div>
        <div className="CardGrp"> */}
        <div className="CloudCard">
          <p>Inventory Management Software</p>
          <Icon
            className="CardIcon"
            icon={"mdi:arrow-top-right"}
            width={40}
            height={20}
          />
        </div>
        <div className="CloudCardbg">
          <div className="CloudCard2">
            <p>Offline software for doctors & Clinic</p>
            <Icon
              icon={"mdi:arrow-top-right"}
              color={"#8512E0"}
              width={40}
              height={20}
              className="CardIcon"
            />
          </div>
        </div>
        <div className="CloudCard">
          <p>Inventory Management Software</p>
          <Icon
            icon={"mdi:arrow-top-right"}
            width={40}
            className="CardIcon"
            height={20}
          />
        </div>
        <div className="CloudCardbg">
          <div className="CloudCard2">
            <p>Offline software for doctors & Clinic</p>
            <Icon
              icon={"mdi:arrow-top-right"}
              color={"#8512E0"}
              width={40}
              height={20}
              className="CardIcon"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CloudBased;
