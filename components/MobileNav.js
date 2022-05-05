import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import Styles from "../styles/mobileNav.module.css";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <div
      className={isOpen ? Styles.containerOpen : Styles.container}
      // isOpen={isOpen}
      onClick={toggle}
    >
      <div onClick={toggle} className={Styles.icon}>
        <FaTimes />
      </div>
      <div className={Styles.linksWrapper}>
        <ul className={Styles.links}>
          <li>
            <Link href="/" onClick={toggle}>
              <a className={Styles.link}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggle}>
              <a className={Styles.link}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggle}>
              <a className={Styles.link}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={toggle}>
              <a className={Styles.link}>FAQs</a>
            </Link>
          </li>
          <li>
            <Link href="/tradeportal" onClick={toggle}>
              <a className={Styles.link}>Trade Portal</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
