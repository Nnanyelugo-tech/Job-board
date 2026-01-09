import { useState } from "react";
import type { Application, ApplicationStatus } from "../types/application";
import { mockApplications } from "../data/mockApplications";

export function useApplications() {
  const [applications, setApplications] =
    useState<Application[]>(mockApplications);

  const updateStatus = (id: string, status: ApplicationStatus) => {
    // Update the applications state using the previous state
    setApplications(prev =>
  // Loop through all applications and build a new array
      prev.map(app =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  const removeApplication = (id: string) => {
    setApplications(prev =>
      prev.filter(app => app.id !== id)
    );
  };

  return {
    applications,
    updateStatus,
    removeApplication,
  };
}
