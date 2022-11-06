import { useState } from "react";
import Styles from "../styles/Regform.module.css";
// import Link from "next/link";

const RegForm = () => {
  const [registration, setRegistration] = useState("");
  const [returnedData, setReturnedData] = useState("");
  console.log(registration);

  // const fetchRegistration = async () => {
  //   const response = await fetch("/api/vehicleEnquiry");
  //   const data = await response.json();
  //   setRegistration(data);
  // };

  const submitRegistration = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/vehicleEnquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ registration }),
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
          // value={registration}
          onChange={(e) => {
            setRegistration(e.target.value);
          }}
        />
        <button>Continue</button>
      </form>
      <p>{returnedData}</p>
      <p>
        {/* {data.data.details.make} {data.data.details.registrationNumber} */}
      </p>
    </div>
  );
};

export default RegForm;
