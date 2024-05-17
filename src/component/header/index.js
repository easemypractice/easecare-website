"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/styles.css";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import { Button } from "@radix-ui/themes";
import { Icon } from "@iconify/react";
const HeaderLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={"border-b-gray"}>
      <nav className={styles.navbar}>
        <div className="container ">
          <div className="header-outer">
            <div className="header-inner">
              <div className={"logo-left"}>
                <Link href="/">
                  <Image src={Logo} alt={Logo} />
                </Link>

                <Link href="/" className="clarity-header">
                  Clarity
                </Link>
              </div>
              <div className={`menu ${isMenuOpen ? "showMenu" : "hidemenu"}`}>
                <ul className={"navLinks"}>
                  <li>
                    <Link href="/features">Features</Link>
                  </li>
                  <li>
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  {/* Add more navigation links as needed */}
                </ul>
                <div
                  className={` ${
                    isMenuOpen
                      ? "toggle-visible contact-part"
                      : "desktop-hidden"
                  }`}
                >
                  {/* <Link
                    target="_blank"
                    href="https://docs.google.com/forms/d/1phpa-xOnZgWI6jfK7PQYHD8INBpGckTCebobHi67MiM/edit"
                    className="contact-header"
                  >
                    Contact
                  </Link> */}
                  <Link
                    target="_blank"
                    href="/contact"
                    className="contact-header"
                  >
                    Contact
                  </Link>
                  <Button variant="solid" className="purple-btn">
                    Get a demo
                  </Button>
                </div>
              </div>
              <div className={"mobileMenuIcon"} onClick={toggleMenu}>
                <Icon
                  icon={isMenuOpen ? "ep:close-bold" : "fontisto:nav-icon-a"}
                  width="24"
                  color="#8512E0"
                />
              </div>
            </div>
            <div className="header-right mobile-hidden">
              {/* <Link
                target="_blank"
                href="https://docs.google.com/forms/d/1phpa-xOnZgWI6jfK7PQYHD8INBpGckTCebobHi67MiM/edit"
                className="contact-header"
              >
                Contact
              </Link> */}
              <Link target="_blank" href="/contact" className="contact-header">
                Contact
              </Link>
              <Link
                href="https://docs.google.com/forms/d/1LailTDqPH259y1i8_d5oM35VG-P2i1x5M-oLTrDmoiM/viewform?edit_requested=true"
                className="purple-btn"
                target="_blank"
              >
                Get a demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLayout;
