export type ApplicationStatus =
  | "pending"
  | "reviewed"
  | "accepted"
  | "rejected";

export interface Application {
  id: string;
  job_title: string;
  name: string;
  email: string;
  phone: string;
  qualification: string;
  experience: string;
  cv_url: string | null;
  status: ApplicationStatus; 
  created_at: string;
}
