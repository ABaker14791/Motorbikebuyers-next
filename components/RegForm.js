import { useState } from "react";
import Styles from "../styles/Regform.module.css";
// import Link from "next/link";

export function passRegistration() {
  let registration = "re15dwf";
  return registration;
}

const RegForm = (data) => {
  const [regInput, setRegInput] = useState("");
  const [regDetails, setRegDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  function onSubmitHandler(e) {
    // Prevent form from submitting
    e.preventDefault();
    // setRegDetails(regInput);
    // console.log(regInput);
    const handleReg = passRegistration("re15dwf");
    console.log(handleReg);
    return handleReg;
  }

  return (
    <div className={Styles.regwrapper}>
      <h2 className={Styles.regTitle}>
        Enter your reg here for your free bike valuation.
      </h2>

      <form className={Styles.regform} onSubmit={onSubmitHandler}>
        <input
          className={Styles.regforminput}
          type="text"
          placeholder="ENTER REG"
          onChange={(e) => {
            setRegInput(e.target.value);
          }}
        />
        {isLoading ? <h2>Loading...</h2> : null}
        {/* <Link
          href="/vehicleDetails"
          className={Styles.regButton}
          onClick={fetchVehicleDetails}
          >
          Continue
        </Link> */}
        <button>Continue</button>
      </form>
      <p>
        {data.data.details.make} {data.data.details.registrationNumber}
      </p>
    </div>
  );
};

export default RegForm;
