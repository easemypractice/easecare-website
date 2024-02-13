"use client";
import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";
import { Layout } from "@/app/layout";
import {
  Button,
  Heading,
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@radix-ui/themes";
import { useState } from "react";
import * as Form from "@radix-ui/react-form";
const ClinicSizes = ["Small", "Medium", "Large"];
const Contact = () => {
  const [clinicName, setClinicName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [clinicSize, setClinicSize] = useState("");
  const [address, setAddress] = useState("");
  const [howWeCanHelp, setHowWeCanHelp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      clinicName,
      fullName,
      email,
      clinicSize,
      address,
      howWeCanHelp,
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="contact-row">
          <div className="flex-1">
            <Heading as="h2">Contact Sales</Heading>
            <ul className="cont-list">
              <li>
                <IconifyIcon
                  icon={"gg:check-o"}
                  width={"16"}
                  height={"16"}
                  className={`iconhov`}
                  color={"text-primaryGr-300"}
                />
                <div className="flex-1">Request a demo</div>
              </li>
              <li>
                {" "}
                <IconifyIcon
                  icon={"gg:check-o"}
                  width={"16"}
                  height={"16"}
                  className={`iconhov`}
                  color={"text-primaryGr-300"}
                />
                <div className="flex-1">
                  Learn which plan is right for your clinic/ hospital
                </div>
              </li>
              <li>
                {" "}
                <IconifyIcon
                  icon={"gg:check-o"}
                  width={"16"}
                  height={"16"}
                  className={`iconhov`}
                  color={"text-primaryGr-300"}
                />
                <div className="flex-1">Get Onboarding help</div>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="form-style">
              <Form.Root className="FormRoot form-style-inner">
                <Heading as="h3">Tell us how we can help</Heading>
                <Form.Field className="FormField" name="email">
                  <Form.Label className="FormLabel">Clinic’s Name</Form.Label>
                  <Form.Control asChild>
                    <input
                      className="Input"
                      type="email"
                      placeholder="Enter Clinic’s name"
                      required
                    />
                  </Form.Control>
                  <div
                  // style={{
                  //   display: "flex",
                  //   alignItems: "baseline",
                  //   justifyContent: "space-between",
                  // }}
                  >
                    <Form.Message className="FormMessage" match="valueMissing">
                      Please enter your Clinic’s Name
                    </Form.Message>
                    <Form.Message className="FormMessage" match="typeMismatch">
                      Please provide a valid Clinic’s Name
                    </Form.Message>
                  </div>
                </Form.Field>
                <Form.Field className="FormField" name="fullname">
                  <Form.Label className="FormLabel">Full Name</Form.Label>
                  <Form.Control asChild>
                    <input
                      className="Input"
                      type="text"
                      required
                      placeholder="Enter your name"
                    />
                  </Form.Control>
                  <div
                  // style={{
                  //   display: "flex",
                  //   alignItems: "baseline",
                  //   justifyContent: "space-between",
                  // }}
                  >
                    <Form.Message className="FormMessage" match="valueMissing">
                      Please enter your email
                    </Form.Message>
                    <Form.Message className="FormMessage" match="typeMismatch">
                      Please provide a valid email
                    </Form.Message>
                  </div>
                </Form.Field>
                <Form.Field className="FormField" name="email">
                  <Form.Label className="FormLabel">Email</Form.Label>
                  <Form.Control asChild>
                    <input
                      className="Input"
                      type="email"
                      required
                      placeholder="Enter your email"
                    />
                  </Form.Control>
                  <div
                  // style={{
                  //   display: "flex",
                  //   alignItems: "baseline",
                  //   justifyContent: "space-between",
                  // }}
                  >
                    <Form.Message className="FormMessage" match="valueMissing">
                      Please enter your email
                    </Form.Message>
                    <Form.Message className="FormMessage" match="typeMismatch">
                      Please provide a valid email
                    </Form.Message>
                  </div>
                </Form.Field>
                <Form.Field className="FormField" name="Address">
                  <Form.Label className="FormLabel">Address</Form.Label>
                  <Form.Control asChild>
                    <input
                      className="Input"
                      type="text"
                      required
                      placeholder="Enter your clinic’s address"
                    />
                  </Form.Control>
                  <div
                  // style={{
                  //   display: "flex",
                  //   alignItems: "baseline",
                  //   justifyContent: "space-between",
                  // }}
                  >
                    <Form.Message className="FormMessage" match="valueMissing">
                      Please enter your Address
                    </Form.Message>
                    <Form.Message className="FormMessage" match="typeMismatch">
                      Please provide a valid Address
                    </Form.Message>
                  </div>
                </Form.Field>
                <Form.Field className="clinic-size">
                  <Form.Label className="FormLabel">Clinic Size</Form.Label>

                  <Select.Root>
                    <Select.Trigger placeholder="Select Clinic" />
                    <Select.Content position="popper">
                      <Select.Item value="Clinic1">Single Clinic</Select.Item>
                      <Select.Item value="Clinic2">Two Clinic</Select.Item>
                      <Select.Item value="Clinic3">Three Clinic</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Form.Field>
                <Form.Field className="FormField" name="question">
                  <Form.Label className="FormLabel">
                    How we can help?
                  </Form.Label>
                  <Form.Control asChild>
                    <textarea
                      className="Textarea"
                      required
                      placeholder="Type a message"
                    />
                  </Form.Control>
                  <div
                  // style={{
                  //   display: "flex",
                  //   alignItems: "baseline",
                  //   justifyContent: "space-between",
                  // }}
                  >
                    <Form.Message className="FormMessage" match="valueMissing">
                      Please enter a question
                    </Form.Message>
                  </div>
                </Form.Field>
                <div className="form-btn">
                  <Form.Submit asChild>
                    <button className="send-message-btn">Send Message</button>
                  </Form.Submit>
                </div>
              </Form.Root>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
