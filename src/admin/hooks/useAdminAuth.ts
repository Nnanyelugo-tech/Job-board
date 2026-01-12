import { useNavigate } from "react-router-dom";

export function useAdminAuth() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("isAdminAuthenticated");
    navigate("/admin/login");
  };


  const isAuthenticated = () => {
    return sessionStorage.getItem("isAdminAuthenticated") === "true";
  };
    return {
    logout,
    isAuthenticated,
  };
}
