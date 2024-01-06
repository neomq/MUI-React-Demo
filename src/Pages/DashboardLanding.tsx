import SideNavigation from "../components/SideNavigation";
import { Routes, Route } from "react-router-dom";
import Authentication from "./Authentication";

const DashboardLanding = () => {
  return (
    <SideNavigation>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="*" element={<>Page does not exist</>} />
      </Routes>
    </SideNavigation>
  );
};

export default DashboardLanding;
