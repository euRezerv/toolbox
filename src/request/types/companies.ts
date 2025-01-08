import { CompanyEmployeeRole } from "@prisma/client";

export type GetCompanyByIdRequestType = {
  params: { id: string };
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
