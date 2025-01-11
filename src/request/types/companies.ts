import { CompanyEmployeeRole } from "@prisma/client";

export type GetCompanyByIdRequestType = {
  path: { companyId: string };
};

export type GetCompaniesRequestType = {
  query: {
    employeeId?: string;
    employeeRole?: CompanyEmployeeRole;
  };
};

export type CreateCompanyRequestType = {
  body: {
    name: string;
    country: string;
    county: string;
    city: string;
    street: string;
    postalCode: string;
    latitude: number;
    longitude: number;
  };
};

export type InviteEmployeeToCompanyRequestType = {
  path: { companyId: string };
  body: { invitedUserId: string; role: CompanyEmployeeRole };
};
