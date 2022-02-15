import styles from "./layout.module.scss";
import Header from "../components/header/header";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles["main"]}>{children}</main>
    </div>
  );
};

export default Layout;
