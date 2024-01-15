import { Routes, Route } from "react-router-dom";
import Database from "../pages/Database";
import Users from "../pages/Users"
import PageNotFound from "../pages/PageNotFound";
import Profile from "../pages/Profile"

const DashboardPages = () => {
  return (
    <Routes>
      <Route path="/" element={<PageNotFound />} />
      <Route path="/authentication/users" element={<Users />} />
      <Route path="/database" element={<Database />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default DashboardPages;
