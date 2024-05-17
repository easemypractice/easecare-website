// pages/api/submit-form.js
import nodemailer from "nodemailer";
import sanityClient from "@sanity/client";
import { createClient } from "next-sanity";

// Initialize Sanity client
const client = new createClient({
  projectId: "w2lce9jj",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-05-06",
  token:
    "skp2JMU1hCamiYvKJWWqCPaNhEPGlepRSrKgqrJ7e8FxTqIv1ehBNqGAzA9jINVgXBr4OmcnnunILSOFVbbkrZhyfNg5EzPowEpdYjmBoC1ozySAOiPzUEjHmNnQH2uD0NHm1hu1IGBU6AU97LzZBsZkkXeewj1aYVyli2XQFp6d08csF0DC",
});

const submitForm = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, phoneNumber, clinic, state, city, address } = req.body;

    console.log(name, email, phoneNumber, clinic, state, city, address);

    // Create the email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "aman@ailoitte.com",
        pass: "lofs zsfy mviz uufr",
      },
    });

    // Email options
    const mailOptions = {
      from: "aman@ailoitte.com",
      to: "aman@ailoitte.com",
      subject: "An request for Clarity Demo",
      text: `Full Name: ${name}\nEmail: ${email}\nphone number: ${phoneNumber}\nClinic name: ${clinic}\nState: ${state}\nCity: ${city}\nAddress: ${address}`,
    };

    try {
      await transporter.sendMail(mailOptions);

      const doc = {
        _type: "formSubmission",
        name,
        email,
        phoneNumber,
        clinic,
        state,
        city,
        address,
        _createdAt: new Date().toISOString(),
      };

      await client.create(doc);

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error submitting the form", error);
      res.status(500).json({ message: "Error submitting the form" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default submitForm;
