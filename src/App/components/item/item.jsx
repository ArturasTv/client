import styles from "./item.module.scss";
import { GrMoreVertical } from "react-icons/gr";
const Item = ({ task }) => {
  return (
    <div className={styles["item"]}>
      <div className={styles["item-main"]}>
        <div
          className={styles[`item-status-${task.status ? "done" : "undone"}`]}
          title={task.status ? "Atlikta" : "Neužbaigta"}
        ></div>
        <div className={styles["item-title"]}>{task.title}</div>
        <div className={styles["item-info"]}>
          <p title="Sukūrimo data">{task.created}</p>
          <p className={styles["item-category"]} title="Kategorija">
            {task.category}
          </p>
        </div>
        <div className={styles["item-more"]}>
          <GrMoreVertical title="Plačiau" />
        </div>
      </div>
    </div>
  );
};

export default Item;
