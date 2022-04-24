import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className={Styles.Links}>
        <Link>About</Link>
      </div>
      <div className={Styles.Copyright}>
        © Copyright 2021, The Motorbike Buyers.
      </div>
    </div>
  );
};

export default Footer;
