import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home/home";
import TaskPage from "../pages/task/task-page";
import CreateTaskPage from "../pages/create-task/create-task";
const Webpages = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/task/:id" element={<TaskPage />} />
        <Route exact path="/create" element={<CreateTaskPage />} />
      </Routes>
    </Layout>
  );
};

export default Webpages;
