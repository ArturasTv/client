import styles from "./navbar.module.scss";
import { menuItems } from "../../constants";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className={styles["navbar"]}>
      {menuItems.map(
        (item) =>
          item.visible && (
            <Link
              key={item.key}
              to={item.path}
              className={
                item.path === location.pathname ? styles["active"] : ""
              }
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  );
};

export default Navbar;
