import { User, Home, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

interface AdminHeaderProps {
  onLogout: () => void;
}

export function AdminHeader({ onLogout }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-emerald-600 flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">
              Manage job postings and applications
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>

          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
