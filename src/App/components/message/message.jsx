import styles from "./message.module.scss";
import { clearMessage } from "../../redux/actions/message-action";
import { useDispatch } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
const Message = ({ text }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles["message-box"]}>
      <div className={styles["message"]}>
        <div className={styles["message-main"]}>
          <div
            className={styles["message-close"]}
            onClick={() => {
              dispatch(clearMessage());
            }}
          >
            <AiFillCloseCircle />
          </div>
          <div className={styles["message-text"]}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
