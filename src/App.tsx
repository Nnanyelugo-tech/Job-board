import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { jobs } from "./data/jobs";
import Home from "./pages/Home";
import Jobs from "./pages/JobsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home totalJobs={jobs.length} />} />
        <Route path="/jobs" element={<Jobs />} />
      </Route>
    </Routes>
  );
}
