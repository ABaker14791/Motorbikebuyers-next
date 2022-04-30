import React from "react";
import Styles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <main className={Styles.intro}>
      <div className={Styles.Container}>
        <h2 className={Styles.Heading}>Introduction</h2>
        <p className={Styles.Text}>
          Here at The Motorbike Buyers it’s all about simplicity. We want to
          make the process of getting the best market value for your bike as
          quick and simple as possible. Use our What’s App quick value to sell
          your motorbike and get a super fast valuation or Enter your Reg above
          and follow the steps! We also offer nationwide collection of your bike
          or if your local, arrange to drop it with us and meet the team. We
          will buy any bike old or new.
          <br /> <br /> The Motorbike Buyers is run by enthusiasts. Including
          our very own Manx GP winner & IOM TT rider heading the buying team up!
          PS ask him about the record he holds around the course or check out
          About Us section!
        </p>
      </div>
    </main>
  );
};

export default Intro;
