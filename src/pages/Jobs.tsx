import { useState } from "react";
import { jobs } from "../data/jobs";
import type { Job } from "../types/job";
import { JobCard } from "../components/JobCard";
import JobModal from "../components/JobModal";
import { JobFilters } from "../components/JobFilters";
import { useJobFilters } from "../hooks/useJobFilters";

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const {
    filteredJobs,
    search,
    setSearch,
    selectedDepartment,
    setSelectedDepartment,
    selectedQualification,
    setSelectedQualification,
  } = useJobFilters({ jobs });

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <section className="bg-emerald-50 rounded-xl p-8 mb-10 text-center shadow-md">
        <h1 className="text-4xl font-bold text-emerald-700 mb-4">
          Welcome to Our Careers Portal
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Explore exciting opportunities to join our team and grow your career.
          We value talent, dedication, and passion. Browse our job openings
          below and find the role that fits you best.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Job Openings</h2>

        <JobFilters
          search={search}
          setSearch={setSearch}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          selectedQualification={selectedQualification}
          setSelectedQualification={setSelectedQualification}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job, index) => (
            <JobCard
              key={job.id}
              index={index}
              job={job}
              onApply={setSelectedJob}
            />
          ))}
        </div>
      </section>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </main>
  );
}
