import styles from "./update-task-form.module.scss";
import { IoMdCloudUpload } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const UpdateTaskForm = ({ item, updateTask }) => {
  const [title, setTitle] = useState(item.title);
  const [category, setCategory] = useState(item.category);
  const [description, setDescription] = useState(item.description);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <select name="" id="">
          <option value="" disabled selected>
            Kategorija
          </option>
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
          onClick={() => {
            dispatch(
              updateTask(item.id, { ...item, category, title, description })
            );
            navigate(`/task/${item.id}`);
          }}
        >
          <IoMdCloudUpload />
        </div>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
