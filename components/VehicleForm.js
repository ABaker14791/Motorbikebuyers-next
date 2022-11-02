import Styles from "../styles/VehicleForm.module.css";

const VehicleForm = () => {
  return (
    <div className={Styles.container}>
      <h1>Enter Your Motorbike Details</h1>
      <p>
        Submit your motorcycle details and your contact information below to get
        your free online valuation.
      </p>
      <form className={Styles.form}>
        <input className={Styles.textBox} placeholder="Reg" />
        <input className={Styles.textBox} placeholder="Manufacturer" />
        <input className={Styles.textBox} placeholder="Year" />
        <input className={Styles.textBox} placeholder="Mileage" />
        <input className={Styles.textBox} placeholder="Service history" />
        <div className={Styles.formGroup}>
          <label>Are you the registered owner and keeper of the vehicle?</label>
          <br />
          <input
            type="radio"
            className={Styles.selector}
            id="selector"
            value="Yes"
            checked
          />
          <label>Yes</label>
          <br />
          <input
            type="radio"
            className={Styles.selector}
            id="selector"
            value="No"
          />
          <label>No</label>
          <br />
        </div>
        <div className={Styles.formGroup}>
          <label>Does the vehicle have any outstanding finance?</label>
          <br />
          <input
            type="radio"
            className={Styles.selector}
            id="selector"
            value="Yes"
          />
          <label>Yes</label>
          <br />
          <input
            type="radio"
            className={Styles.selector}
            id="selector"
            value="No"
            checked
          />
          <label>No</label>
          <br />
        </div>
        <div className={Styles.formGroup}>
          <label className={Styles.dropdownLabel}>Condition</label>
          <select name="condition" id="selector" className={Styles.formControl}>
            <option value="0" disabled="" selected="">
              Please select
            </option>
            <option value="1">1 - Very poor</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 - Average</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10 - Very good</option>
          </select>
        </div>
        <input className={Styles.textBox} placeholder="Name" />
        <input className={Styles.textBox} placeholder="Email" />
        <input className={Styles.textBox} placeholder="Phone number" />
        <button type="submit" className={Styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;
