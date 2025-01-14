import { CompanyEmployeeRole } from "@prisma/client";

export type InviteEmployeeToCompanyRequestType = {
  path: { companyId: string };
  body: { invitedUserId: string; role: CompanyEmployeeRole };
};

export type AcceptEmployeeToCompanyInvitationRequestType = {
  path: { companyId: string; invitationId: string };
};

export type DeclineEmployeeToCompanyInvitationRequestType = {
  path: { companyId: string; invitationId: string };
};

export type CancelEmployeeToCompanyInvitationRequestType = {
  path: { companyId: string; invitationId: string };
};
