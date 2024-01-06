import { Routes, Route } from "react-router-dom";
import Authentication from "../Pages/Authentication";
import Database from "../Pages/Database";

const DashboardPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/database" element={<Database />} />
      <Route path="*" element={<>Page does not exist</>} />
    </Routes>
  );
};

export default DashboardPages;
