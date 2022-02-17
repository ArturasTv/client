import styles from "./task-page.module.scss";
import { useParams } from "react-router";
import Task from "../../components/task/task";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "./../../redux/actions/task-action";
import Loading from "../../components/loading/loading";
import { updateTask, deleteTask } from "./../../redux/actions/task-action";

const TaskPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { task } = useSelector((state) => state.taskReducer);

  const props = {
    updateTask,
    deleteTask,
  };

  useEffect(() => {
    dispatch(getTask(id));
  }, []);

  return (
    <div>{!task ? <Loading /> : <Task item={task.task} {...props} />}</div>
  );
};

export default TaskPage;
