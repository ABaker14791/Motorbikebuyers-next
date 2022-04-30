import Link from "next/link";
import React from "react";
import Styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.links}>
        <Link className={Styles.link} href="/">
          Home
        </Link>
        <Link className={Styles.link} href="/about">
          About
        </Link>
        <Link className={Styles.link} href="/contact">
          Contact
        </Link>
        <Link className={Styles.link} href="/faq">
          FAQs
        </Link>
        <Link className={Styles.link} href="/tradeportal">
          Trade Portal
        </Link>
      </div>
      <div className={Styles.Copyright}>
        © Copyright 2021, The Motorbike Buyers.
      </div>
    </div>
  );
};

export default Footer;
