import { useState } from "react";
import Styles from "../styles/Layout.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import React from "react";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <main className={Styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
