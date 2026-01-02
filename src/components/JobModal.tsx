import { useEffect } from "react";
import type { Job } from "../types/job";

import { X, Briefcase, Clock, GraduationCap, CheckCircle2, Mail, MapPin, Calendar } from "lucide-react";

interface JobModalProps {
  job: Job;
  onClose: () => void;
}

export default function JobModal({ job, onClose }: JobModalProps) {
  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {job.title}
          </h2>


          
          <p className="mt-2 text-gray-600 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Job Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100">
              <GraduationCap className="h-4 w-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Qualification</p>
              <p className="font-medium text-gray-900">{job.qualification}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100">
              <Clock className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Experience</p>
              <p className="font-medium text-gray-900">{job.experience}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-100">
              <Briefcase className="h-4 w-4 text-sky-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Department</p>
              <p className="font-medium text-gray-900">{job.department}</p>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Job Description
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Requirements
          </h4>
          <ul className="space-y-2">
            {job.requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-600"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />

                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Application Info */}
        <div className="rounded-xl bg-gray-50 p-4 space-y-3">
          <h4 className="font-semibold text-gray-900">
            Application Information
          </h4>

          <p className="text-sm text-gray-600">
            <Mail className="h-4 w-4 text-blue-600 inline mr-1" />
            Email your CV to{" "}
            <strong className="text-gray-900">
              hirecore@gas.ng
            </strong>
          </p>
          <p className="text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-green-600 inline mr-1" />
            HireCore Recruitment, Emene, Enugu
          </p>
          <p className="text-sm text-gray-600">
            <Calendar className="h-4 w-4  inline mr-1" />
            Deadline:{" "}
            <strong className="text-red-600">
              May 12th, 2025
            </strong>
          </p>
        </div>
      </div>
      
    </div>

    
  );
}
