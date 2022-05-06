import React from "react";
import Styles from "../styles/Regform.module.css";

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
        <button className={Styles.regButton}>Continue</button>
      </form>
    </div>
  );
};

export default RegForm;
