import styles from "./item-list.module.scss";
import Item from "../item/item";
import { TiSortAlphabetically } from "react-icons/ti";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { sortValues } from "./../../constants";

const ItemList = ({ _tasks }) => {
  const [tasks, setTasks] = useState(_tasks);
  const [titleOrder, setTitleOrder] = useState(true);
  const [categoryOrder, setCategoryOrder] = useState(true);
  const [dateOrder, setdDateOrder] = useState(true);
  const [bounds, setBounds] = useState({ min: 0, max: 5 });

  const sortTasks = (index) => {
    let temp = [...tasks];
    if (sortValues[index] === "title") {
      temp = temp.sort((a, b) =>
        titleOrder
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
      setTitleOrder(!titleOrder);
    }
    if (sortValues[index] === "category") {
      temp = temp.sort((a, b) =>
        categoryOrder
          ? a.category.localeCompare(b.category)
          : b.category.localeCompare(a.category)
      );
      setCategoryOrder(!categoryOrder);
    }
    if (sortValues[index] === "date") {
      temp = temp.sort((a, b) =>
        dateOrder ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
      );
      setdDateOrder(!dateOrder);
    }
    setTasks(temp);
  };

  const changeBounds = (dir) => {
    let temp = { ...bounds };
    if (dir === 1) {
      temp.min += 5;
      temp.max += 5;
    }
    if (dir === -1) {
      temp.min -= 5;
      temp.max -= 5;
    }
    setBounds(temp);
  };

  return (
    <div className={styles["item-list"]}>
      <div className={styles["item-list-header"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles["item-list-icon"]}>
            <TiSortAlphabetically
              title="Rikiuoti pagal pavadinimą"
              onClick={() => sortTasks(0)}
            />
          </div>

          <div className={styles["item-list-icon"]}>
            <BiCategoryAlt
              title="Rikiuoti pagal kategoriją"
              onClick={() => sortTasks(1)}
            />
          </div>

          <div className={styles["item-list-icon"]}>
            <BsCalendarDate
              title="Rikiuoti pagal datą"
              onClick={() => sortTasks(2)}
            />
          </div>
        </div>
      </div>
      <div className={styles["item-list-main"]}>
        {tasks.slice(bounds.min, bounds.max).map((item) => (
          <Item task={item} key={item.id} />
        ))}
      </div>
      <div className={styles["item-list-footer"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ visibility: bounds.min != 0 ? "visible" : "hidden" }}
            className={styles["item-list-icon"]}
          >
            <FaAngleLeft onClick={() => changeBounds(-1)} />
          </div>
          <div
            style={{
              visibility: tasks.length - bounds.max > 0 ? "visible" : "hidden",
            }}
            className={styles["item-list-icon"]}
          >
            <FaAngleRight onClick={() => changeBounds(1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
