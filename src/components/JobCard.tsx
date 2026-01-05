import { Briefcase, Clock, GraduationCap, ChevronRight } from "lucide-react";
import type { Job } from "../types/job";
import { departmentColors } from "../utils/badgeStyles";

interface JobCardProps {
  job: Job;
  index: number;
  onApply: (job: Job) => void;
}

export function JobCard({ job, index, onApply }: JobCardProps) {
  return (
    <div
      className="group bg-white rounded-xl p-4 sm:p-6 gap-4 sm:gap-6
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
        hover:shadow-[0_16px_32px_rgba(0,0,0,0.18)]
        transition-all duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Title & Department */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg sm:text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
              {job.title}
            </h3>
            <p className="mt-1 text-sm sm:text-sm text-gray-500 line-clamp-3">
              {job.description}
            </p>
          </div>
          <span
            className={`shrink-0 mt-2 sm:mt-0 px-2 py-1 rounded-md text-xs sm:text-xs font-medium border ${
              departmentColors[job.department] ||
              "bg-gray-100 text-gray-700 border-gray-200"
            }`}
          >
            {job.department}
          </span>
        </div>

        {/* Job Details */}
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="h-4 w-4 text-emerald-600" />
            <span>{job.qualification}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-amber-600" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4 text-gray-400" />
            <span>{job.requirements.length} requirements</span>
          </div>
        </div>

        {/* Requirement Tags */}
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 2).map((req, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700"
            >
              {req.length > 40 ? req.slice(0, 40) + "..." : req}
            </span>
          ))}
          {job.requirements.length > 2 && (
            <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">
              +{job.requirements.length - 2} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onApply(job)}
          className="w-full mt-2 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
        >
          View Details & Apply
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
