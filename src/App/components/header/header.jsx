import styles from "./header.module.scss";
import { Helmet } from "react-helmet";
import Navbar from "../navbar/navbar";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <Helmet>
        <title>test</title>
      </Helmet>
      <Navbar />
    </header>
  );
};

export default Header;
