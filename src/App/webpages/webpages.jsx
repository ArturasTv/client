import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home/home";
import TaskPage from "../pages/task/task-page";
import CreateTaskPage from "../pages/create-task/create-task";
import UpdateTaskPage from "../pages/update-task/update-task";
const Webpages = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/task/:id" element={<TaskPage />} />
        <Route exact path="/create" element={<CreateTaskPage />} />
        <Route exact path="/update" element={<UpdateTaskPage />} />
      </Routes>
    </Layout>
  );
};

export default Webpages;
