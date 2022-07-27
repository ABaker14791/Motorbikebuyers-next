import React from "react";

import Styles from "../styles/Regform.module.css";
import Link from "next/link";

const RegForm = () => {
  return (
    <div className={Styles.regwrapper}>
      <h2 className={Styles.regTitle}>
        Enter your reg here for your free bike valuation.
      </h2>

      <form className={Styles.regform}>
        <input
          className={Styles.regforminput}
          type="text"
          placeholder="ENTER REG"
        />
        <Link href="/vehicleDetails" className={Styles.regButton}>
          Continue
        </Link>
      </form>
    </div>
  );
};

export default RegForm;
