
import { departments, qualifications } from "../data/jobs";
import type { JobFilter } from "../types/jobFilter";
import { Search, X, Filter } from "lucide-react";

export function JobFilters({
  search,
  setSearch,
  selectedDepartment,
  setSelectedDepartment,
  selectedQualification,
  setSelectedQualification,
}: JobFilter) {
  const hasFilters =
    search !== "" ||
    selectedDepartment !== "all" ||
    selectedQualification !== "all";

  const activeClass =
    "bg-emerald-600 text-white border-emerald-600";
  const inactiveClass =
    "bg-white text-gray-700 border-gray-300 hover:bg-emerald-50";

  return (
    <div className="bg-white rounded-xl  p-6 mb-10 space-y-8 shadow-sm">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search job titles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-12 pl-12 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Department */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Filter className="h-4 w-4" />
          Department
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedDepartment("all")}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              selectedDepartment === "all" ? activeClass : inactiveClass
            }`}
          >
            All Departments
          </button>

          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                selectedDepartment === dept ? activeClass : inactiveClass
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Qualification */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Filter className="h-4 w-4" />
          Qualification Level
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedQualification("all")}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              selectedQualification === "all" ? activeClass : inactiveClass
            }`}
          >
            All Levels
          </button>

          {qualifications.map((qual) => (
            <button
              key={qual}
              onClick={() => setSelectedQualification(qual)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                selectedQualification === qual ? activeClass : inactiveClass
              }`}
            >
              {qual}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={() => {
            setSearch("");
            setSelectedDepartment("all");
            setSelectedQualification("all");
          }}
          className="text-sm text-red-600 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}
