import Image from "next/image";
import React from "react";
import styles from "@/styles/Patient.module.css";
import Link from "next/link";
const ContactUsPatients = ({ image, content, btnText, link }) => {
  return (
    <div className="container">
      <div className={styles.contactSec}>
        <Image src={image} alt="" />
        <div className={styles.right}>
          <h3>{content}</h3>
          <Link href={link}>
            <button className="purple-btn w-full">{btnText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPatients;
