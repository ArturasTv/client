import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home/home";
import TaskPage from "../pages/task/task-page";
const Webpages = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Task/:id" element={<TaskPage />} />
      </Routes>
    </Layout>
  );
};

export default Webpages;
