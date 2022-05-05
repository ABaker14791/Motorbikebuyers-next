import React from "react";
import Styles from "../styles/Contact.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.contactInfo}>
        <Heading>Get in touch</Heading>
        <p className={Styles.contactText}>
          For any queries not answered in our FAQ page please let us know you
          requirements and we will respond as soon as possible.
        </p>
        <div className={Styles.contactLink}>
          <PhoneIcon mr={4} />
          <Link href="#">
            <a>+44 7770 444569</a>
          </Link>
        </div>
        <div className={Styles.contactLink}>
          <EmailIcon mr={4} />
          <Link href="#">
            <a>sales@themotorbikebuyers.co.uk</a>
          </Link>
        </div>
        <div className={Styles.contactLink}>
          <ExternalLinkIcon mr={4} />
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
