import { FaAngleLeft } from "react-icons/fa";
import Styles from "../styles/ReturnBar.module.css";
import Link from "next/link";

const ReturnBar = () => {
  return (
    <div className={Styles.returnWrapper}>
      <Link href="/tradeportal">
        <a>
          <div className={Styles.returnBtn}>
            <FaAngleLeft />
            Back to search results
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ReturnBar;
