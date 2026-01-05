import { useEffect, useState } from "react";
import type { Job } from "../types/job";
import { departmentColors } from "../utils/badgeStyles";
import JobApplicationForm from "./JobApplicationForm";


import {
  X,
  Briefcase,
  Clock,
  GraduationCap,
  CheckCircle2,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Send,
} from "lucide-react";
import type { ApplicationFormData } from "../schemas/validation";
import { qualifications } from "../data/jobs";

interface JobModalProps {
  job: Job;
  onClose: () => void;
}

export default function JobModal({ job, onClose }: JobModalProps) {
  const [activeTab, setActiveTab] = useState<"details" | "apply">("details");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Handle form submission
  const handleFormSubmit = (data: ApplicationFormData, file: File | null) => {
    setIsSubmitting(true);
    console.log("Form Data:", data);
    console.log("CV File:", file);

    setTimeout(() => {
      alert("Application submitted!");
      setIsSubmitting(false);
      setActiveTab("details");
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

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
          <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>

          <div className="flex flex-wrap gap-2 mt-3">
            <span
              className={`px-3 py-1 rounded-md text-sm font-medium border
           ${
             departmentColors[job.department] ??
             "bg-gray-100 text-gray-700 border-gray-200"
           }`}
            >
              {job.department}
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium">
              {job.qualification}
            </span>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="grid grid-cols-2 rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab("details")}
              className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition
        ${
          activeTab === "details"
            ? "bg-white text-emerald-600 shadow"
            : "text-gray-500 hover:text-gray-700"
        }`}
            >
              <FileText className="h-4 w-4" />
              Job Details
            </button>

            <button
              onClick={() => setActiveTab("apply")}
              className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition
        ${
          activeTab === "apply"
            ? "bg-white text-emerald-600 shadow"
            : "text-gray-500 hover:text-gray-700"
        }`}
            >
              <Send className="h-4 w-4" />
              Apply Now
            </button>
          </div>
        </div>

        {/* Render Job Details */}
        {activeTab === "details" && (
          <>
            {/* Job Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <GraduationCap className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Qualification</p>
                  <p className="font-medium text-gray-900">
                    {job.qualification}
                  </p>
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
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
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

              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Mail className="h-4 w-4 text-blue-600" />
                Email your CV to <strong>hirecore@gas.ng</strong>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <MapPin className="h-4 w-4 text-green-600" />
                HireCore Recruitment, Emene, Enugu
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Deadline:{" "}
                <strong className="text-red-600">May 12th, 2025</strong>
              </p>
            </div>

            {/* Apply button */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => setActiveTab("apply")}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
                Apply Online
              </button>

              <button
                onClick={onClose}
                className="shrink-0 px-5 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </>
        )}

        {/* Render Apply Form */}
        {activeTab === "apply" && (
          <div>
            <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-100">
              <p className="text-sm">
                Applying for: <strong>{job.title}</strong>
              </p>
            </div>

            <JobApplicationForm
              qualifications={qualifications}
              onSubmitForm={handleFormSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        )}
      </div>
    </div>
  );
}
