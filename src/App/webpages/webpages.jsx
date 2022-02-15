import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home/home";
const Webpages = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default Webpages;
