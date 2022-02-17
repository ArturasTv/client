import styles from "./update-task.module.scss";
import UpdateTaskForm from "../../components/update-task-form/update-task-form";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import { updateTask } from "../../redux/actions/task-action";
const UpdateTaskPage = () => {
  const { task } = useSelector((state) => state.taskReducer);

  const props = { updateTask };

  return (
    <div>
      {!task ? (
        <Loading />
      ) : (
        <UpdateTaskForm item={{ ...task.task }[0]} {...props} />
      )}
    </div>
  );
};

export default UpdateTaskPage;
