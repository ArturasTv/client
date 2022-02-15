import styles from "./header.module.scss";
import { Helmet } from "react-helmet";
import Navbar from "../navbar/navbar";
import { menuItems } from "../../constants";
import { useLocation } from "react-router";
const Header = () => {
  const currentLocation = useLocation().pathname;
  let _title = menuItems.find((item) => item.path == currentLocation);
  _title = _title ? _title.title : currentLocation.split("/").at(-1);

  return (
    <header className={styles["header"]}>
      <Helmet>
        <title>{_title}</title>
      </Helmet>
      <Navbar />
    </header>
  );
};

export default Header;
