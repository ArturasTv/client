import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <a className={styles["active"]} href="">
        Pagrindinis
      </a>
      <a href="">Pridėti naują užduotį</a>
    </nav>
  );
};

export default Navbar;
