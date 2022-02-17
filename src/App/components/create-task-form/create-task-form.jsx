import styles from "./create-task-form.module.scss";
import { IoMdCloudUpload } from "react-icons/io";
const CreateTaskForm = () => {
  return (
    <div className={styles["create-task-form"]}>
      <form>
        <input type="text" placeholder="Pavadinimas" maxlength="15" />
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
          maxlength="150"
        ></textarea>
        <div className={styles["create-task-form-button"]}>
          <IoMdCloudUpload />
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
