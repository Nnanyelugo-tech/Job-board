export type Department =
  | "Management"
  | "Finance"
  | "Human Resources"
  | "Marketing"
  | "Operations"
  | "Engineering"
  | "Support";

export type QualificationLevel =
  | "First Degree"
  | "HND"
  | "OND"
  | "WASC"
  | "Technical";

export interface Job {
  id: number;
  title: string;
  department: Department;
  qualification: QualificationLevel;
  experience: string;
  description: string;
  requirements: string[];
}
