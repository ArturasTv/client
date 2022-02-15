import styles from "./task-page.module.scss";
import { useParams } from "react-router";
import Task from "../../components/task/task";

const TaskPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Task />
    </div>
  );
};

export default TaskPage;
