import React from "react";
import Styles from "../styles/Contact.module.css";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.contactInfo}>
        <h1>Get in touch</h1>
        <p className={Styles.contactText}>
          For any queries not answered in our FAQ page please let us know your
          requirements and we will respond as soon as possible.
        </p>
        <div className={Styles.contactLink}>
          <FaPhone />
          <Link href="#">
            <a>+44 7770 444569</a>
          </Link>
        </div>
        <div className={Styles.contactLink}>
          <FaEnvelope />
          <Link href="#">
            <a>sales@themotorbikebuyers.co.uk</a>
          </Link>
        </div>
        <div className={Styles.contactLink}>
          <FaExternalLinkAlt />
          <Link href="#">
            <a>Follow and contact us directly on facebook</a>
          </Link>
        </div>
      </div>

      <form className={Styles.contactForm}>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Message" />
        <button className={Styles.contactButton}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
