
import * as yup from "yup";

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const formSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .required("Full name is required"),

  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),

  phone: yup
    .string()
    .trim()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .required("Phone number is required"),

  qualification: yup
    .string()
    .min(1, "Please select your qualification")
    .required("Qualification is required"),

  experience: yup
    .string()
    .trim()
    .min(10, "Please describe your experience (at least 10 characters)")
    .max(1000, "Experience must be less than 1000 characters")
    .required("Experience is required"),
});

// rename type to avoid conflict with browser FormData
export type ApplicationFormData = {
  name: string;
  email: string;
  phone: string;
  qualification: string;
  experience: string;
};
