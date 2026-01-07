import { useState } from "react";
import { jobs } from "../data/jobs";
import type { Job } from "../types/job";
import { JobCard } from "../components/JobCard";
import JobModal from "../components/JobModal";
import { JobFilters } from "../components/JobFilters";
import { useJobFilters } from "../hooks/useJobFilters";
import { Briefcase } from "lucide-react";

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
          We value talent, dedication, and passion. Browse our job openings
          below and find the role that fits you best.
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

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-emerald-600" />
            <h2 className="font-display text-xl font-semibold text-gray-900">
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "Position" : "Positions"} Available
            </h2>
          </div>
        </div>

        {filteredJobs.length > 0 ? (
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
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Briefcase className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              No Job Found
            </h3>

            <p className="text-sm text-gray-600">
              Please try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </section>

      {/* Application Deadline Notice */}
      <div className="mt-12 rounded-2xl border border-red-500/20 bg-red-50 p-4 sm:p-2">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            <span className="font-semibold text-red-600">
              Important Notice:
            </span>{" "}
            All applications must be submitted before
            <span className="font-semibold text-gray-900">
              {" "}
              12:00 Midnight on May 12th, 2025
            </span>
            .
          </p>

          <p className="text-sm sm:text-base text-gray-700">
            Send your CV to: {" "}
            <a
              href="mailto:hirecore@gas.ng"
              className="font-medium text-emerald-600 hover:text-emerald-700 hover:underline transition"
            >
              hirecore@gas.ng
            </a>
          </p>
        </div>
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </main>
  );
}
