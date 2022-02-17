import styles from "./task.module.scss";
import { RiCheckboxBlankCircleFill, RiDeleteBinLine } from "react-icons/ri";
import { GrUpdate, GrCheckmark } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Task = ({ item, updateTask, deleteTask }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const task = { ...item };

  return (
    <div className={styles["task"]}>
      <div className={styles["task-header"]} title="Kategorija">
        {task.category}
      </div>
      <hr />
      <div className={styles["task-main"]}>
        {task.status ? (
          <div className={styles["task-status-done"]}>
            <RiCheckboxBlankCircleFill title="Atlikta" />
          </div>
        ) : (
          <div className={styles["task-status-undone"]}>
            <RiCheckboxBlankCircleFill title="Neatlikta" />
          </div>
        )}

        <div className={styles["task-date"]}>
          <p className={styles["task-created-date"]}>
            <p style={{ display: "inline-block", width: 65 }}>Sukurta:</p>
            {task.created}
          </p>
          {task.updated && (
            <p className={styles["task-updated-date"]}>
              <p style={{ display: "inline-block", width: 65 }}>Atnaujinta:</p>
              {task.updated}
            </p>
          )}
        </div>
        <div className={styles["task-content"]}>
          <p className={styles["task-title"]} title="Pavadinimas">
            {task.title}
          </p>
          <p className={styles["task-description"]} title="Aprašymas">
            {task.description}
          </p>
        </div>
      </div>
      <div className={styles["task-footer"]}>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!task.status && (
            <div className={styles["task-icon"]}>
              <GrCheckmark
                title="Atlikti"
                onClick={() => {
                  dispatch(updateTask(item.id, { ...item, status: true }));
                  navigate("/");
                }}
              />
            </div>
          )}

          <div className={styles["task-icon"]}>
            <Link to="/update">
              <GrUpdate title="Atnaujinti" />
            </Link>
          </div>
          <div className={styles["task-icon"]}>
            <RiDeleteBinLine
              title="Ištrinti"
              onClick={() => {
                dispatch(deleteTask(item.id));
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
