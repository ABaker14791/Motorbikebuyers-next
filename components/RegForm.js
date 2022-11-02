import { useState } from "react";
import Styles from "../styles/Regform.module.css";
// import Link from "next/link";

const RegForm = () => {
  const [regInput, setRegInput] = useState("");
  const [regDetails, setRegDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetchVehicleDetails = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
        {
          method: "POST",
          body: JSON.stringify({
            registrationNumber: "TE57VRN",
          }),
          headers: {
            "x-api-key": "QvRdRSChk540ubGHaItvy5ANmcQxbuyYa3CkWqm4",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("result is: ", JSON.stringify(result, null, 4));

      setRegDetails(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(regDetails);

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
          onChange={(e) => {
            setRegInput(e.target.value);
          }}
        />
        <button onClick={fetchVehicleDetails}>Continue</button>
        {isLoading && <h2>Loading...</h2>}
        {/* <Link
          href="/vehicleDetails"
          className={Styles.regButton}
          onClick={fetchVehicleDetails}
        >
          Continue
        </Link> */}
      </form>
    </div>
  );
};

export default RegForm;
