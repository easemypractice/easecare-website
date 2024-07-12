"use client";
import { Box, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { Layout } from "../../app/layout";
import HeadPart from "@/component/Head/head";

const TermsAndCondition = () => {
  return (
    <Layout>
      <HeadPart
        title={"Terms & Conditions - Clarity"}
        description={
          "Read our terms and conditions regarding the use of our healthcare management software. Understand our guidelines and obligations."
        }
        // imageUrl={AboutPreviewImage}
      />
      <Box className="heading-box">
        <Box className="container-privacy">
          <Heading as="h3">Terms & Conditions</Heading>
        </Box>
      </Box>
      <Box className="privacy-content">
        <Box className="container-privacy">
          <Box className="privacy-content-box">
            <Text as="p">
              Welcome to Clarity, the Electronic Health Records (EHR),
              Electronic Medical Records (EMR), and Telemedicine Software
              provided by EaseCare. The following terms and conditions govern
              your use of Clarity and form a legally binding agreement between
              you and EaseCare. Please read these terms carefully before using
              Clarity.
            </Text>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">1. Acceptance of Terms</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                By accessing or using Clarity, you agree to be bound by these
                terms and conditions. If you do not agree with any part of these
                terms, you may not use Clarity.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">2. License and Access</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                EaseCare grants you a limited, non-exclusive, non-transferable,
                and revocable license to use Clarity for the purpose of managing
                electronic health records, electronic medical records, and
                engaging in telemedicine services. This license is subject to
                compliance with these terms.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">3. User Accounts and Security</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                a. You are responsible for maintaining the confidentiality of
                your account credentials, and you agree to notify EaseCare
                immediately of any unauthorized use or security breaches.
              </Text>
              <Text as="p">
                b. You are solely responsible for all activities that occur
                under your account, and EaseCare shall not be liable for any
                loss or damage arising from your failure to comply with this
                section.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">4. Privacy and Data Security</Heading>
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
                direct result of EaseCare&apos;s negligence.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">5. Use Restrictions</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                a. You agree not to use Clarity for any unlawful purpose or in a
                manner that could damage, disable, overburden, or impair the
                service.
              </Text>
              <Text as="p">
                b. You may not attempt to gain unauthorized access to any part
                of Clarity, its servers, or any associated systems or networks.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">6. Intellectual Property</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                a. Clarity and its content, features, and functionality are
                owned by EaseCare and are protected by intellectual property
                laws. You may not use, reproduce, distribute, modify, or create
                derivative works of Clarity without the express written consent
                of EaseCare.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">7. Telemedicine Services</Heading>
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
            <Heading as="h3">8. Payments & Refund</Heading>
            <Heading as="h4">
              #1 Online Payment options are available for the services listed
              below:
            </Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                1. Booking a consultation with a doctor <br />
                2. Subscription Services around Health Records Management,
                Doctor Consultation, Medicine Delivery & Lab Packages
              </Text>
            </Box>
            <Heading as="h4" className="mt-3">
              #2 Payment Options for the following options are available for
              making payments:
            </Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                1. Domestic Debit & Credit cards which are part of the Visa and
                Mastercard network. <br />
                2. UPI one-time/recurring payments through Phonepe, GPay, or any
                UPI ID <br />
                3. Important: No one will call you for your OTP, CVV, or other
                secure codes. Please do not disclose this information to anyone.
              </Text>
            </Box>
            <Heading as="h4" className="mt-3">
              #3 Refund & Return Policy:
            </Heading>
            <Box className="privacy-text-list ">
              <Text as="p">
                1. Refund for Doctor Consultation can be processed if cancelled
                24 hours before the appointment. Refunds will be at the sole
                discretion of the clinic/doctor. Refunds will always be paid to
                the source of payment.
                <br /> 2. Subscription Services around Health Records Management
                and doctor Consultation are non-refundable. <br />
                3. Refunds would take 7-10 working days from the date of
                cancellation to reflect in the payment source.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">9. Termination</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                EaseCare reserves the right to terminate or suspend your access
                to Clarity at any time, with or without cause, and with or
                without notice.
              </Text>
            </Box>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">10. Changes to Terms</Heading>
            <Text as="p">
              EaseCare may update or modify these terms and conditions at any
              time. Continued use of Clarity after such changes shall constitute
              your consent to the updated terms.
            </Text>
          </Box>
          <Box className="privacy-content-box">
            <Heading as="h3">11. Governing Law and Dispute Resolution</Heading>
            <Box className="privacy-text-list">
              <Text as="p">
                These terms and conditions are governed by the laws of
                Uttarakhand, India. Any disputes arising out of or relating to
                these terms shall be resolved through arbitration in accordance
                with the law of India, and judgment upon the award rendered by
                the arbitrator(s) may be entered in any court having
                jurisdiction thereof.
              </Text>
              <Text as="p">
                By using Clarity, you acknowledge that you have read,
                understood, and agreed to these terms and conditions. If you
                have any questions or concerns, please contact EaseCare at
                <Link
                  className="purple-color"
                  href={"mailto:hello@easecare.co"}
                >
                  hello@easecare.co
                </Link>
                .
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default TermsAndCondition;
