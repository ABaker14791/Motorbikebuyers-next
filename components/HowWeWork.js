import React from "react";
import Styles from "../styles/HowWeWork.module.css";
import DeliveryIcon from "../assets/icons/icons8-delivery-96.png";
import TimeIcon from "../assets/icons/icons8-delivery-time-96.png";
import Quality from "../assets/icons/icons8-good-quality-96.png";
import Handshake from "../assets/icons/icons8-handshake-96.png";
import Image from "next/image";

const HowWeWork = () => {
  return (
    <div className={Styles.HowWeWork}>
      <h3 className={Styles.title}>How We Work</h3>
      <div className={Styles.IconContainer}>
        <div className={Styles.IconItem}>
          <Image src={Handshake} alt="" />
          <span>
            <h3>SUPER FAST VALUATION</h3>
            <p>Whats App, Phone or Email</p>
          </span>
        </div>
        <div className={Styles.IconItem}>
          <Image src={TimeIcon} alt="" />
          <span>
            <h3>FAST PAYMENT</h3>
            <p>No hidden fees, Instant payment</p>
          </span>
        </div>
        <div className={Styles.IconItem}>
          <Image src={DeliveryIcon} alt="" />
          <span>
            <h3>COLLECTION OR DROP OFF</h3>
            <p>Nationwide, 48hr collection on average</p>
          </span>
        </div>
        <div className={Styles.IconItem}>
          <Image src={Quality} alt="" />
          <span>
            <h3>HASSLE FREE</h3>
            <p>
              No haggling on collection, if it&apos;s as described its as we
              priced!
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
