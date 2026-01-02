import { jobs } from "../data/jobs";


   export default function Dashboard() {
    const categories = new Set(jobs.map(job => job.category));

     return (
       <section>
        <div className="p-6 mx-auto">
         <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
         <p className="mt-2">Welcome to the admin dashboard. Here you can manage jobs and view statistics.</p>
        </div>

         <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">Total Jobs</p>
          <h2 className="text-3xl font-bold">{jobs.length}</h2>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">Job Categories</p>
          <h2 className="text-3xl font-bold">{categories.size}</h2>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">Applications</p>
          <h2 className="text-3xl font-bold"></h2>
          <p className="text-xs text-gray-400"></p>
        </div>
      </div>
       </section>
     );
   }