import Image from "next/image";
import React from "react";
import styles from "@/styles/Patient.module.css";
import bg from "@/images/contbg.png";
import Link from "next/link";
const ContactUsPatients = ({ image, content, btnText, link }) => {
  return (
    <div className="container">
      <div className={styles.contactSec}>
        <Image src={image} alt="" />
        <div className={styles.right}>
          <h3>{content}</h3>
          <Link href={"/book-a-demo"}>
            <button className="purple-btn w-full">{btnText}</button>
          </Link>
        </div>
        <Image src={bg} width={400} className={styles.bgPosition} />
      </div>
    </div>
  );
};

export default ContactUsPatients;
