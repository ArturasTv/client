import styles from "./item.module.scss";
import { GrMoreVertical } from "react-icons/gr";
import { Link } from "react-router-dom";
import moment from "moment/moment.js";
import "moment/locale/lt";

const Item = ({ task }) => {
  moment.locale("lt");
  return (
    <div className={styles["item"]}>
      <div className={styles["item-main"]}>
        <div
          className={styles[`item-status-${task.status ? "done" : "undone"}`]}
          title={task.status ? "Atlikta" : "Neužbaigta"}
        ></div>
        <div className={styles["item-title"]}>{task.title}</div>
        <div className={styles["item-info"]}>
          <p title="Sukūrimo data">
            {moment.unix(task.created).format("L LTS")}
          </p>
          <p className={styles["item-category"]} title="Kategorija">
            {task.category}
          </p>
        </div>
        <div className={styles["item-more"]}>
          <Link key={task._id} to={`/task/${task._id}`}>
            <GrMoreVertical title="Plačiau" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
