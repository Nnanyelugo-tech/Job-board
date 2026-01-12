import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { jobs } from "./data/jobs";
import Home from "./pages/Home";
import Jobs from "./pages/JobsPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import { useAdminAuth } from "./admin/hooks/useAdminAuth";
import type { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated() ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home totalJobs={jobs.length} />} />
        <Route path="/jobs" element={<Jobs />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
}
