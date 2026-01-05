import { useMemo, useState } from "react";
import type { Job, Department, QualificationLevel } from "../types/job";

interface UseJobFiltersArgs {
  jobs: Job[];
}

export function useJobFilters({ jobs }: UseJobFiltersArgs) {
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<
    Department | "all"
  >("all");
  const [selectedQualification, setSelectedQualification] = useState<
    QualificationLevel | "all"
  >("all");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch = job.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchDepartment =
        selectedDepartment === "all" || job.department === selectedDepartment;

      const matchQualification =
        selectedQualification === "all" ||
        job.qualification === selectedQualification;

      return matchSearch && matchDepartment && matchQualification;
    });
  }, [jobs, search, selectedDepartment, selectedQualification]);

  return {
    // filtered data
    filteredJobs,
    // state values
    search,
    selectedDepartment,
    selectedQualification,
    // setters
    setSearch,
    setSelectedDepartment,
    setSelectedQualification,
  };
}
