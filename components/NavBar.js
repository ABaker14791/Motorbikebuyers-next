import Logo from "../assets/images/mbuyers_curves_final.svg";
import Styles from "../styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggle }) => {
  return (
    <>
      <nav className={Styles.navbar}>
        <div className={Styles.navbarContainer}>
          <Link href="/">
            <a>
              <Image src={Logo} display="block" alt="Motorbike buyers" />
            </a>
          </Link>
          <div onClick={toggle} className={Styles.navIcon}>
            <FaBars />
          </div>
          <ul className={Styles.navMenu}>
            <li className={Styles.navItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={Styles.navItem}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={Styles.navItem}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className={Styles.navItem}>
              <Link href="/faq">
                <a>FAQs</a>
              </Link>
            </li>
            <li className={Styles.navItem}>
              <Link href="/tradeportal">
                <a>Trade Portal</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
