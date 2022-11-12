import { useState } from "react";
import Styles from "../styles/VehicleForm.module.css";
// FireStore
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBpJCBr2PeSbi8SA7fBpshgnAuHtuQfZ7I",
  authDomain: "motorbikebuyers-2fdbb.firebaseapp.com",
  projectId: "motorbikebuyers-2fdbb",
  storageBucket: "motorbikebuyers-2fdbb.appspot.com",
  messagingSenderId: "419445289298",
  appId: "1:419445289298:web:ab44ab4b48db8241be0a8b",
});

const db = getFirestore();
const buyersCollection = collection(db, "bikes");

async function writeBuyersBikes(data) {
  const addBike = await addDoc(buyersCollection, {
    first: data.name,
    year: data.year,
    manufacturer: data.manufacturer,
    model: data.model,
  });
}

const DetailsForm = ({ bikeData }) => {
  const [data, setData] = useState({
    regNumber: bikeData.registrationNumber || "",
    manufacturer: bikeData.make || "",
    model: "",
    year: bikeData.yearOfManufacture || "",
    mileage: "",
    serviceHistory: "",
    keeper: "",
    finance: "",
    condition: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data.model));
    writeBuyersBikes(data);
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={Styles.container}>
      <h1>Enter Your Motorbike Details</h1>
      <p>
        Submit your motorcycle details and your contact information below to get
        your free online valuation.
      </p>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <input
          className={Styles.textBox}
          value={bikeData.registrationNumber}
          onChange={handleChange}
          placeholder="Reg"
          name="regNumber"
          type="text"
        />
        <input
          className={Styles.textBox}
          value={bikeData.make}
          onChange={handleChange}
          placeholder="Manufacturer"
          name="manufacturer"
          type="text"
        />
        <input
          className={Styles.textBox}
          onChange={handleChange}
          placeholder="Model"
          name="model"
          type="text"
        />
        <input
          className={Styles.textBox}
          value={bikeData.yearOfManufacture}
          onChange={handleChange}
          placeholder="Year"
          name="year"
          type="text"
        />
        <input
          className={Styles.textBox}
          onChange={handleChange}
          placeholder="Mileage"
          name="mileage"
          type="text"
        />
        <input
          className={Styles.textBox}
          onChange={handleChange}
          placeholder="Service history"
          name="serviceHistory"
          type="text"
        />
        <div className={Styles.formGroup}>
          <label>Are you the registered owner and keeper of the vehicle?</label>
          <br />
          <input
            type="radio"
            className={Styles.selector}
            onChange={handleChange}
            id="selector"
            value="Yes"
            checked
            name="keeper"
          />
          <label>Yes</label>
          <br />
          <input
            type="radio"
            className={Styles.selector}
            onChange={handleChange}
            id="selector"
            value="No"
            name="keeper"
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
            onChange={handleChange}
            id="selector"
            value="Yes"
            name="finance"
          />
          <label>Yes</label>
          <br />
          <input
            type="radio"
            className={Styles.selector}
            onChange={handleChange}
            id="selector"
            value="No"
            checked
            name="finance"
          />
          <label>No</label>
          <br />
        </div>
        <div className={Styles.formGroup}>
          <label className={Styles.dropdownLabel}>Condition</label>
          <select
            name="condition"
            id="selector"
            className={Styles.formControl}
            onChange={handleChange}
          >
            <option value="0" disabled="">
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
        <input
          className={Styles.textBox}
          onChange={handleChange}
          placeholder="Name"
          name="name"
          type="text"
        />
        <input
          className={Styles.textBox}
          onChange={handleChange}
          placeholder="Email"
          name="email"
          type="text"
        />
        <input
          className={Styles.textBox}
          onChange={handleChange}
          placeholder="Phone number"
          name="phone"
          type="text"
        />
        <button type="submit" className={Styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DetailsForm;
