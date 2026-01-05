import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import CvUpload from "./CvUpload";
import type { ApplicationFormData } from "../schemas/validation";

import {
  formSchema,
  MAX_FILE_SIZE,
  ACCEPTED_FILE_TYPES,
} from "../schemas/validation";

interface JobApplicationFormProps {
  qualifications: string[];
  onSubmitForm: (data: ApplicationFormData, file: File | null) => void;
  isSubmitting?: boolean;
}

export default function JobApplicationForm({
  qualifications,
  onSubmitForm,
  isSubmitting = false,
}: JobApplicationFormProps) {
  const [cvFile, setCvFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      qualification: "",
      experience: "",
    },
  });

  const inputBase =
    "w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-emerald-500 " +
    "transition shadow-sm";

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setCvFile(null);
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      alert("Invalid file type. Only PDF or Word allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File too large. Max 5MB allowed.");
      return;
    }

    setCvFile(file);
  };

  const onSubmit = (data: ApplicationFormData) => {
    onSubmitForm(data, cvFile);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      {/* Name & Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input
            type="text"
            placeholder="Ugo Smith"
            {...register("name")}
            className={inputBase}
          />

          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            placeholder="ugo.smith@example.com"
            {...register("email")}
            className={inputBase}
          />

          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone & Qualification */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">Phone *</label>
          <input
            type="tel"
            placeholder="+1234567890"
            {...register("phone")}
            className={inputBase}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Qualification *
          </label>
          <select
            {...register("qualification")}
            className={inputBase}
            defaultValue="select qualification"
          >
            <option value="">select qualification</option>
            {qualifications.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>

          {errors.qualification && (
            <p className="text-xs text-red-500 mt-1">
              {errors.qualification.message}
            </p>
          )}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Relevant Experience *
        </label>
        <textarea
          placeholder="Describe your relevant work experience, skills, and achievements..."
          {...register("experience")}
          className={`${inputBase} h-25 resize-none`}
        />
        {errors.experience && (
          <p className="text-xs text-red-500 mt-1">
            {errors.experience.message}
          </p>
        )}
      </div>

      {/* CV Upload */}
      <CvUpload
        cvFile={cvFile}
        onFileChange={handleFileChange}
        disabled={isSubmitting}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-emerald-600 text-white rounded-lg"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
