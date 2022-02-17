import styles from "./layout.module.scss";
import Header from "../components/header/header";
import Message from "../components/message/message";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const { message } = useSelector((state) => state.messageReducer);
  return (
    <div>
      {message ? (
        <Message text={message} />
      ) : (
        <>
          <Header />
          <main className={styles["main"]}>{children}</main>
        </>
      )}
    </div>
  );
};

export default Layout;
