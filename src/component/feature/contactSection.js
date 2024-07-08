import Image from "next/image";
import React from "react";
import styles from "@/styles/Patient.module.css";
import bg from "@/images/contbg.png";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import CustomBlockText from "../customBlockText";
const ContactSection = ({ data }) => {
  const purpleCard = data?.purpleCard;
  return (
    <>
      {data && (
        <div className="container" style={{ margin: "50px auto" }}>
          <div
            className={`${styles.contactSec} ${purpleCard && styles.purpleCard}`}
          >
            {data?.image && <img src={`${urlFor(data?.image)}`} />}
            <div className={styles.right}>
              <CustomBlockText blocks={data?.content} />
              {data?.btnName && (
                <Link href={"/book-a-demo"}>
                  <button
                    className={`purple-btn w-full ${purpleCard && "white-btn"}`}
                    style={{ minWidth: "max-content" }}
                  >
                    {data.btnName}
                  </button>
                </Link>
              )}
            </div>
            {!purpleCard && (
              <Image src={bg} width={400} className={styles.bgPosition} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;
