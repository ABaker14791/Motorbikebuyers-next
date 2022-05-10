import Link from "next/link";
import React from "react";
import Styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.footer}>
        <div className={Styles.links}>
          <h4>Quick links</h4>
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
        <div className={Styles.copyright}>
          © Copyright 2022, The Motorbike Buyers.
        </div>
        <div className={Styles.blog}>
          <h4>Tips and guides</h4>
          <Link className={Styles.link} href="#">
            Valuation guide
          </Link>
          <Link className={Styles.link} href="#">
            Maintainance guide
          </Link>
          <Link className={Styles.link} href="#">
            Ownership guide
          </Link>
          <Link className={Styles.link} href="#">
            Motorcycle buying tips
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
