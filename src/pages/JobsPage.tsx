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
    <main className="px-4 sm:px-6 md:px-8 py-6 max-w-7xl mx-auto">
      <section className="bg-emerald-50 rounded-xl p-6 sm:p-8 mb-8 sm:mb-10 text-center shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-700 mb-3 sm:mb-4">
          Welcome to Our Careers Portal
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto">
          Explore exciting opportunities to join our team and grow your career.
          We value talent, dedication, and passion. Browse our job openings below and find the role that fits you best.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">
          Job Openings
        </h2>

        <JobFilters
          search={search}
          setSearch={setSearch}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          selectedQualification={selectedQualification}
          setSelectedQualification={setSelectedQualification}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
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
