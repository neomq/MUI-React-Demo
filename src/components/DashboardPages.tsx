import { Routes, Route } from "react-router-dom";
import Database from "../Pages/Database";
import Users from "../Pages/Users"
import PageNotFound from "../Pages/PageNotFound";

const DashboardPages = () => {
  return (
    <Routes>
      <Route path="/" element={<PageNotFound />} />
      <Route path="/authentication/users" element={<Users />} />
      <Route path="/database" element={<Database />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default DashboardPages;
