import { useNavigate } from "react-router-dom";

export function useAdminAuth() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("adminAuthenticated");
    navigate("/");
  };

  return {
    logout,
  };
}
