import Image from "next/image";
import React from "react";
import styles from "@/styles/Patient.module.css";
import bg from "@/images/contbg.png";
import Link from "next/link";
const ContactUsPatients = ({
  image,
  content,
  btnText,
  description,
  purpleCard,
}) => {
  return (
    <div className="container">
      <div
        className={`${styles.contactSec} ${purpleCard && styles.purpleCard}`}
      >
        <Image src={image} alt="" />
        <div className={styles.right}>
          <h3>{content}</h3>
          <p>{description}</p>
          <Link href={"/book-a-demo"}>
            <button
              className={`purple-btn w-full ${purpleCard && "white-btn"}`}
            >
              {btnText}
            </button>
          </Link>
        </div>
        {!purpleCard && (
          <Image src={bg} width={400} className={styles.bgPosition} />
        )}
      </div>
    </div>
  );
};

export default ContactUsPatients;
