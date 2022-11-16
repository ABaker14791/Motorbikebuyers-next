import { useState, useRef, useEffect } from "react";
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
    registration: data.regNumber,
    Manufacturer: data.manufacturer,
    model: data.model,
    year: data.year,
    mileage: data.mileage,
    serviceHistory: data.serviceHistory,
    keeper: data.keeper,
    finance: data.finance,
    stolen: data.stolen,
    condition: data.condition,
    name: data.name,
    email: data.email,
    phone: data.phone,
  });
}

const DetailsForm = ({ bikeData }) => {
  // Hide form & show success message once submitted.
  const [submitted, setSubmitted] = useState(false);
  // Form State
  const [data, setData] = useState({
    regNumber: bikeData.registrationNumber || "",
    manufacturer: bikeData.make || "",
    model: "",
    year: bikeData.yearOfManufacture || "",
    mileage: "",
    serviceHistory: "Select sevice history",
    keeper: "Yes",
    finance: "No",
    stolen: "No",
    condition: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    writeBuyersBikes(data);
    setSubmitted(true);
  };

  // After form submit scroll up to center the success message
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [submitted]);

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "radio" ? e.target.checked : e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {submitted ? (
        <div className={Styles.confirmationNotice} ref={ref}>
          Thank you for submitting your details, we will be in touch shortly.
        </div>
      ) : (
        <div className={Styles.container}>
          <h1>Enter Your Motorbike Details</h1>
          <p>
            Submit your motorcycle details and your contact information below to
            get your free online valuation.
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

            <select
              name="serviceHistory"
              id="selector"
              className={Styles.formControl}
              onChange={handleChange}
              defaultValue={0}
            >
              <option disabled={true} value="0">
                --Select service history--
              </option>
              <option value="Full Manufacturer">Full Manufacturer</option>
              <option value="Full Mixed">Full Mixed</option>
              <option value="Part">Part</option>
              <option value="None">None</option>
            </select>

            <div className={Styles.formGroup}>
              <label>
                Are you the registered owner and keeper of the vehicle?
              </label>
              <br />
              <input
                type="radio"
                className={Styles.selector}
                onChange={handleChange}
                id="selector"
                value="Yes"
                defaultChecked={true}
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
                defaultChecked={true}
                name="finance"
              />
              <label>No</label>
              <br />
            </div>
            <div className={Styles.formGroup}>
              <label>
                Has the vehicle ever been a registered write off or stolen?
              </label>
              <br />
              <input
                type="radio"
                className={Styles.selector}
                onChange={handleChange}
                id="selector"
                value="Yes"
                name="stolen"
              />
              <label>Yes</label>
              <br />
              <input
                type="radio"
                className={Styles.selector}
                onChange={handleChange}
                id="selector"
                value="No"
                defaultChecked={true}
                name="stolen"
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
                defaultValue={0}
              >
                <option disabled={true} value="0">
                  --Select condition--
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
      )}
    </>
  );
};

export default DetailsForm;
