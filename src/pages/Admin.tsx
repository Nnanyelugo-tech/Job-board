// import { useState } from "react";
// import { jobs as initialJobs } from "../data/jobs";
// import type { Job } from "../types/job";
// import AdminLayout from "../admin/AdminLayout";
// import Dashboard from "../admin/Dashboard";
// import JobTable from "../admin/JobTable";
// import AddJobForm from "../admin/AddJobForm";

// export default function Admin() {
//   const [jobs, setJobs] = useState<Job[]>(initialJobs);

//   return (
    
//     <AdminLayout>
//       <Dashboard />
//       <AddJobForm onAdd={job => setJobs([job, ...jobs])} />
//       <JobTable
//         jobs={jobs}
//         onDelete={id => setJobs(jobs.filter(j => j.id !== id))}
//       />
//     </AdminLayout>
//   );
// }
