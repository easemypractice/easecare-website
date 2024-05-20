// pages/api/submit-form.js
import nodemailer from "nodemailer";
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

    // Create the email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "easecareofficial@gmail.com",
        pass: "dhme gjiw frlr ddsl",
      },
    });

    // Email options
    const mailOptions = {
      from: "easecareofficial@gmail.com",
      to: "hello@easecare.co",
      subject: "ES Book Demo Request",
      text: `Full Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nClinic Name: ${clinic}\nAddress: ${address}\nCity: ${city}\nState: ${state}`,
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
