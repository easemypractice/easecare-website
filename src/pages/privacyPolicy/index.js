import RootLayout from "@/app/layout";
import { Box, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <RootLayout>
      <Box className="heading-box">
        <Box className="container-privacy">
          <Heading as="h3">Privacy Policy</Heading>
        </Box>
      </Box>
      <Box className="privacy-content">
        <Box className="container-privacy">
          <Box className="privacy-content-box">
            <Text as="p">
              Thank you for choosing Clarity, a comprehensive Electronic Health
              Record (EHR), Electronic Medical Record (EMR), and Telemedicine
              Software developed by EaseCare. At EaseCare, we are committed to
              protecting the privacy and security of your information. This
              Privacy Policy outlines how we collect, use, disclose, and
              safeguard your personal and health information when you use
              Clarity.
            </Text>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">1. Information We Collect</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                a. Personal Information User Registration: To use Clarity, you
                may be required to provide personal information such as your
                name, contact details, and professional credentials during the
                registration process.
              </Text>
              <Text as="p">
                b. Health Information Patient Records: Clarity may store health
                information including patient demographics, medical history,
                diagnoses, treatments, and other relevant data entered by
                healthcare providers.
              </Text>
              <Text as="p">
                c. Usage Information Log Data: We collect information about your
                interactions with Clarity, including log data, IP addresses, and
                device information for diagnostic and security purposes.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">2. How We Use Your Information</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                a. Service Provision EHR and EMR Functionality: Your personal
                and health information is used to provide you with the full
                range of EHR and EMR services offered by Clarity.
              </Text>
              <Text as="p">
                b. Telemedicine Services Virtual Consultations: If you use
                Clarity for telemedicine services, your information may be
                shared with healthcare providers to facilitate virtual
                consultations.
              </Text>
              <Text as="p">
                c. Improving our Services Analytics: We may analyze aggregated
                and anonymized data to improve Clarity's features,
                functionality, and user experience.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">3. Information Sharing</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                a. Third-Party Providers Service Partners: We may share your
                information with third-party service providers to assist us in
                providing and improving our services. These providers are bound
                by confidentiality agreements.
              </Text>
              <Text as="p">
                b. Legal Requirements Compliance: We may disclose your
                information if required by law, regulation, or legal process.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">4. Security</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                Data Security Measures: We employ industry-standard security
                measures to protect your information from unauthorized access,
                disclosure, alteration, and destruction.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">5. Privacy and Data Security</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                a. EaseCare takes data privacy seriously. By using Clarity, you
                agree to the terms of our Privacy Policy, which is an integral
                part of these terms and conditions.
              </Text>
              <Text as="p">
                b. Clarity employs security measures to protect your data;
                however, EaseCare shall not be held liable for any unauthorized
                access, use, or disclosure of data unless such access is a
                direct result of EaseCare's negligence.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">6. Your Choices and Rights</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                Access and Correction: You have the right to access and correct
                your personal and health information stored in Clarity.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">7. Contact Us</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                EaseCare Contact Information: If you have any questions or
                concerns about this Privacy Policy or Clarity's privacy
                practices, please contact us at{" "}
                <Link
                  className="purple-color"
                  href={"mailto:contact@easecare.com"}
                >
                  [contact@easecare.com]
                </Link>
                .
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">8. Telemedicine Services</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                a. When using Clarity for telemedicine services, you agree to
                comply with all applicable laws and regulations. EaseCare is not
                responsible for the quality of care provided by healthcare
                professionals using the platform.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">9. Termination</Heading>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">10. Changes to Terms</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                EaseCare may update or modify these terms and conditions at any
                time. Continued use of Clarity after such changes shall
                constitute your consent to the updated terms.
              </Text>
              <Text as="p">
                By using Clarity, you agree to the terms outlined in this
                Privacy Policy. EaseCare reserves the right to update or modify
                this policy at any time, so please review it periodically. Your
                continued use of Clarity after changes to the Privacy Policy
                constitutes acceptance of those changes.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </RootLayout>
  );
};

export default PrivacyPolicy;
