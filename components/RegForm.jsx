import { useState } from "react";
import Styles from "../styles/Regform.module.css";
import DetailsForm from "./DetailsForm";

const RegForm = () => {
  const [registration, setRegistration] = useState();
  const [returnedData, setReturnedData] = useState();
  const [loading, setLoading] = useState(false);

  const submitRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (registration) {
      const response = await fetch("/api/ves/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registration),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setReturnedData(data);
    } else {
      setReturnedData("No registration supplied.");
      setLoading(false);
    }
  };
  return (
    <div className={Styles.regwrapper}>
      {returnedData ? (
        <DetailsForm bikeData={returnedData} />
      ) : (
        <>
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
            <button className={Styles.submitButton}>Continue</button>
          </form>
        </>
      )}
      {loading ? <div className={Styles.loading}>Loading...</div> : null}
    </div>
  );
};

export default RegForm;
