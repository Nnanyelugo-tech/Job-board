import { format } from "date-fns";
import { Trash2, Download } from "lucide-react";
import { AdminHeader } from "../admin/components/AdminHeader";
import { StatsCards } from "../admin/components/StatsCards";
import { useAdminAuth } from "../admin/hooks/useAdminAuth";
import { useApplications } from "../admin/hooks/useApplication";
import type {  ApplicationStatus } from "../admin/types/application";

export default function AdminDashboard() {
  const { logout } = useAdminAuth();
  const { applications, updateStatus, removeApplication } = useApplications();

  // Tailwind classes for status badges
  const statusColors: Record<ApplicationStatus, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    reviewed: "bg-blue-100 text-blue-800",
    accepted: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "pending").length,
    accepted: applications.filter((a) => a.status === "accepted").length,
    rejected: applications.filter((a) => a.status === "rejected").length,
  };

  const handleStatusChange = (appId: string, newStatus: ApplicationStatus) => {
    updateStatus(appId, newStatus);
  };

  const downloadCV = (url: string, name: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}_CV.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader onLogout={logout} />

      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Stats */}
        <StatsCards
          total={stats.total}
          pending={stats.pending}
          accepted={stats.accepted}
          rejected={stats.rejected}
        />

        {/* Applications Table */}
        <div className="rounded-xl border bg-white shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Applications</h2>
            <p className="text-sm text-gray-500">Demo data from mockApplications</p>
          </div>

          {applications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No applications found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr className="text-left">
                    <th className="p-3">Name</th>
                    <th className="p-3">Job Title</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Qualification</th>
                    <th className="p-3">Experience</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Date</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b last:border-b-0 hover:bg-gray-50">
                      <td className="p-3 font-medium">{app.name}</td>
                      <td className="p-3">{app.job_title}</td>
                      <td className="p-3">{app.email}</td>
                      <td className="p-3">{app.phone}</td>
                      <td className="p-3">{app.qualification}</td>
                      <td className="p-3">{app.experience}</td>

                      {/* Status with Tailwind select */}
                      <td className="p-3">
                        <select
                          value={app.status}
                          onChange={(e) =>
                            handleStatusChange(app.id, e.target.value as ApplicationStatus)
                          }
                          className={`rounded-md border px-2 py-1 text-sm ${statusColors[app.status]}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>

                      <td className="p-3">{format(new Date(app.created_at), "MMM d, yyyy")}</td>

                      <td className="p-3 text-right flex items-center gap-2 justify-end">
                        {app.cv_url && (
                          <button
                            onClick={() => downloadCV(app.cv_url!, app.name)}
                            className="p-1 rounded hover:bg-gray-100"
                            title="Download CV"
                          >
                            <Download className="h-4 w-4 text-gray-600" />
                          </button>
                        )}
                        <button
                          onClick={() => removeApplication(app.id)}
                          className="p-1 rounded hover:bg-red-100"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
