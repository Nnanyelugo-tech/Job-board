import type { Job } from "../types/job";

interface Props {
  jobs: Job[];
  onDelete: (id: number) => void;
}

export default function JobTable({ jobs, onDelete }: Props) {
  return (
    <div className="bg-white  rounded shadow mt-10 overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Qualification</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id} className="border-t">
              <td className="p-3">{job.title}</td>
              <td className="p-3">{job.category}</td>
              <td className="p-3">{job.qualification}</td>
              <td className="p-3">{job.experience}</td>
              <td className="p-3 text-right">
                <button
                  onClick={() => onDelete(job.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
