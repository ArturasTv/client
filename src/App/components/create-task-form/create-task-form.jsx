import styles from "./create-task-form.module.scss";
import { IoMdCloudUpload } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { categories } from "../../constants";
import { setMessage } from "../../redux/actions/message-action";
import moment from "moment/moment.js";
import "moment/locale/lt";

const CreateTaskForm = ({ postTask }) => {
  moment.locale("lt");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("1 Kategorija");
  const [description, setDescription] = useState("");
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

    let task = {
      title: title,
      description: description,
      category: category,
      created: moment().unix(),
      status: false,
    };
    dispatch(postTask(task));
    navigate("/");
  };

  return (
    <div className={styles["create-task-form"]}>
      <form>
        <input
          type="text"
          placeholder="Pavadinimas"
          maxLength="15"
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
          maxLength="150"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div
          className={styles["create-task-form-button"]}
          onClick={handleSubmit}
        >
          <IoMdCloudUpload />
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
