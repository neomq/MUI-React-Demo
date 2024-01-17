import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import PageNotFound from "../pages/PageNotFound";

const AppPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default AppPages