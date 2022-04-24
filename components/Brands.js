import React from "react";
import Styles from "../styles/Brands.module.css";
import Image from "next/image";
import Honda from "../assets/icons/honda.svg";
import Ducati from "../assets/icons/ducati.svg";
import Husqvarna from "../assets/icons/husqvarna.svg";
import Ktm from "../assets/icons/ktm.svg";
import Triumph from "../assets/icons/triumph.svg";

const Brands = () => {
  return (
    <div className={Styles.Container}>
      <h2>Bike Brands We Have Collected Recently</h2>
      <h4>
        Below you will find some of the most popular brands that we have
        collected through our online valuation system.
      </h4>
      <div className={Styles.IconContainer}>
        <div className={Styles.IconItem}>
          <Image src={Honda} />
        </div>
        <div className={Styles.IconItem}>
          <Image src={Ducati} />
        </div>
        <div className={Styles.IconItem}>
          <Image src={Triumph} />
        </div>
        <div className={Styles.IconItem}>
          <Image src={Husqvarna} />
        </div>
        <div className={Styles.IconItem}>
          <Image src={Ktm} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
