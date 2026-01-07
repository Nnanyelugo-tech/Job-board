import type { Department, QualificationLevel } from "./job";

export interface JobFilter {
  search: string;
  setSearch: (value: string) => void;
  selectedDepartment: Department | "all";
  setSelectedDepartment: (value: Department | "all") => void;
  selectedQualification: QualificationLevel | "all";
  setSelectedQualification: (value: QualificationLevel | "all") => void;
}
