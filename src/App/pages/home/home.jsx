import styles from "./home.module.scss";
import ItemList from "../../components/item-list/item-list";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTasks } from "../../redux/actions/task-action";
import Loading from "../../components/loading/loading";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  const { tasks } = useSelector((state) => state.taskReducer);
  return <div>{!tasks ? <Loading /> : <ItemList _tasks={tasks.tasks} />}</div>;
};

export default Home;
