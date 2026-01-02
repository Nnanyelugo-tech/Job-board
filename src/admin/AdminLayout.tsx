import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="min-h-screen mx-auto flex bg-gray-100">
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-3 text-sm">
          <p className="font-semibold">Dashboard</p>
          <p className="opacity-80">Manage Jobs</p>
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
