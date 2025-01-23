import { StandardResponseType } from "../types";

export type CreateCompanyResourceResponseType = StandardResponseType<{
  resource: {
    id: string;
    name: string;
    description: string | null;
    availabilityTime: {
      dayOfWeek: string;
      startTime: string;
      endTime: string;
    }[];
    category: string;
    requiresBookingApproval: boolean;
    assignedEmployees: { employeeId: string }[];
  };
  failedResourceEmployeeAssignments?: any[];
}>;
