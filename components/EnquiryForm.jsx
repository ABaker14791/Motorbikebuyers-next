import React from "react";
import Styles from "../styles/EnquiryForm.module.css";

const EnquiryForm = ({ formOpen, setFormOpen }) => {
  return (
    <div className={Styles.overlay}>
      <form className={Styles.form}>
        <button
          className={Styles.closeButton}
          onClick={() => {
            setFormOpen(!formOpen);
          }}
        >
          X
        </button>
        <p className={Styles.enquiryMessage}>
          Enter your enquiry message below or leave blank and we will be in
          touch.
          <br />
          Alternatively give us a call on <span>+44 7770 444569</span>
        </p>
        <textarea name="message" id="messageBox" cols="30" rows="10"></textarea>
        <button>Submit Enquiry</button>
      </form>
    </div>
  );
};

export default EnquiryForm;
