import Image from "next/image";
import React from "react";
import styles from "@/styles/Patient.module.css";
const ContactUsPatients = ({ image, content, btnText }) => {
  return (
    <div className="container">
      <div className={styles.contactSec}>
        <Image src={image} alt="" />
        <div className={styles.right}>
          <h3>{content}</h3>
          <button className="purple-btn w-full">{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPatients;
