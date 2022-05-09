import React from "react";
import Styles from "../styles/Hero.module.css";

const HeroV2 = () => {
  return (
    <div className={Styles.background}>
      <h1 className={Styles.heading}>Welcome to The Motorbike Buyers</h1>
      <p className={Styles.subHeading}>
        The most competitive bike valuation service in the UK.
      </p>
    </div>
  );
};

export default HeroV2;
