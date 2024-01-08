"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/styles.css";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import { Button } from "@radix-ui/themes";
const HeaderLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className="container ">
          <div className="header-outer">
            <div className="header-inner">
              <div className={"logo-left"}>
                <Link href="/">
                  <Image src={Logo} alt={Logo} />
                </Link>

                <Link href="/about">Clarity</Link>
              </div>
              <div className={`menu ${isMenuOpen ? "showMenu" : ""}`}>
                <ul className={"navLinks"}>
                  <li>
                    <Link href="/">Features</Link>
                  </li>
                  <li>
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/about">Pricing</Link>
                  </li>
                  {/* Add more navigation links as needed */}
                </ul>
              </div>
              <div className={"mobileMenuIcon"} onClick={toggleMenu}>
                toggle
              </div>
            </div>
            <div className="header-right">
              <Link href="/about">Contact</Link>
              <Button variant="solid" className="purple-btn">
                Get a demo
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLayout;
