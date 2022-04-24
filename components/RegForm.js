import React from "react";
import { Text, Center, Button } from "@chakra-ui/react";
import Styles from "../styles/Regform.module.css";

const RegForm = () => {
  return (
    <div className={Styles.regwrapper}>
      {/* <Center> */}
      <Text fontSize="3xl" mt="8">
        Enter your reg here for your free bike valuation.
      </Text>

      <form className={Styles.regform}>
        <input
          className={Styles.regforminput}
          type="text"
          placeholder="ENTER REG"
        />
        <button className={Styles.regButton}>Continue</button>
      </form>
      {/* </Center> */}
    </div>
  );
};

export default RegForm;
