import { useState } from "react";
import Styles from "../styles/Regform.module.css";

const RegForm = () => {
  const [registration, setRegistration] = useState();
  const [returnedData, setReturnedData] = useState();

  const submitRegistration = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/ves/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registration),
    });
    const data = await response.json();
    console.log(data);
    setReturnedData(data);
  };

  return (
    <div className={Styles.regwrapper}>
      <h2 className={Styles.regTitle}>
        Enter your reg here for your free bike valuation.
      </h2>

      <form className={Styles.regform} onSubmit={submitRegistration}>
        <input
          className={Styles.regforminput}
          type="text"
          placeholder="ENTER REG"
          onChange={(e) => {
            setRegistration(e.target.value);
          }}
        />
        <button>Continue</button>
      </form>
      {returnedData ? <p>{returnedData.make}</p> : null}
    </div>
  );
};

export default RegForm;
