import styles from "./update-task-form.module.scss";
import { IoMdCloudUpload } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { categories } from "./../../constants";
import { setMessage } from "../../redux/actions/message-action";
import moment from "moment/moment.js";
import "moment/locale/lt";

const UpdateTaskForm = ({ item, updateTask }) => {
  moment.locale("lt");
  const [title, setTitle] = useState(item.title);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title) {
      dispatch(setMessage("Neįvestas pavadinimas"));
      return;
    }
    if (!category) {
      dispatch(setMessage("Neįvesta kategorija"));
      return;
    }
    if (!description) {
      dispatch(setMessage("Neįvestas aprašymas"));
      return;
    }

    dispatch(
      updateTask(item._id, {
        ...item,
        category,
        title,
        description,
        updated: moment().unix(),
      })
    );
    navigate(`/task/${item._id}`);
  };

  return (
    <div className={styles["update-task-form"]}>
      <form>
        <input
          type="text"
          placeholder="Pavadinimas"
          maxLength="20"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Trumpas užduoties aprašymas"
          name=""
          id=""
          cols="30"
          rows="10"
          maxLength="200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div
          className={styles["update-task-form-button"]}
          onClick={handleSubmit}
        >
          <IoMdCloudUpload />
        </div>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
