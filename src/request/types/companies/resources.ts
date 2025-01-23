import { DayOfWeek, ResourceCategory } from "@prisma/client";

export type CreateCompanyResourceRequestType = {
  path: { companyId: string };
  body: {
    name: string;
    description?: string;
    availabilityTime: {
      dayOfWeek: DayOfWeek;
      startTime: string;
      endTime: string;
    }[];
    category: ResourceCategory;
    assignedEmployeesIds: string[];
    requiresBookingApproval: boolean;
  };
};
