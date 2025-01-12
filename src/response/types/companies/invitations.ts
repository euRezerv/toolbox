import { StandardResponseType } from "../types";

export type InviteEmployeeToCompanyResponseType = StandardResponseType<{
  invitation: {
    id: string;
    senderCompanyEmployeeId: string;
    invitedUserId: string;
    role: string;
    status: string;
    expiresIn: string;
    expiresAt: string;
  };
}>;

export type AcceptEmployeeToCompanyInvitationResponseType = StandardResponseType<{
  invitation: {
    id: string;
    senderCompanyEmployeeId: string;
    invitedUserId: string;
    role: string;
    status: string;
    expiresAt: string;
  };
  employee: {
    id: string;
    companyId: string;
    employeeId: string;
    role: string;
  };
}>;

export type DeclineEmployeeToCompanyInvitationResponseType = StandardResponseType<{
  invitation: {
    id: string;
    senderCompanyEmployeeId: string;
    invitedUserId: string;
    role: string;
    status: string;
    expiresAt: string;
  };
}>;
