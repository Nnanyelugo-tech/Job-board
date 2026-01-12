import { Lock, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (username === "admin" && password === "admin123") {
      sessionStorage.setItem("isAdminAuthenticated", "true");
      setMessage({ text: "Login successful! Redirecting...", type: "success" });
      setTimeout(() => navigate("/admin/dashboard"), 1000);
    } else {
      setMessage({ text: "Invalid username or password.", type: "error" });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-green-400 to-blue-500 p-6 text-center">
          <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-md">
            <Lock className="h-6 w-6 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-white">Admin Login</h2>
          <p className="text-green-100 mt-1">Enter your credentials to access the dashboard</p>
        </div>

        {/* Alert Message */}
        {message && (
          <div
            className={`mx-6 mt-4 mb-2 px-4 py-2 rounded-lg text-center ${
              message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="px-6 py-6 space-y-5">
          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-xl shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50 transition-colors"
          >
            {isLoading ? "Logging in..." : "Sign In"}
          </button>
        </form>

        {/* Demo credentials */}
        <p className="text-center text-sm text-gray-400 py-4 border-t border-gray-200">
          Demo credentials: <span className="font-medium">admin / admin123</span>
        </p>
      </div>
    </div>
  );
}
