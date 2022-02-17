import styles from "./create-task.module.scss";
import CreateTaskForm from "../../components/create-task-form/create-task-form";
import { postTask } from "../../redux/actions/task-action";
const CreateTaskPage = () => {
  const props = { postTask };
  return (
    <div>
      <CreateTaskForm {...props} />
    </div>
  );
};

export default CreateTaskPage;
