import { AllOrNothing } from "src/common/typescript";
import { StandardResponseType } from "./types";

export type GetUserByIdResponseType = StandardResponseType<{
  user: {
    id: string;
    isProfileComplete: boolean;
    updatedAt: string;
    createdAt: string;
  } & AllOrNothing<{
    givenName: string;
    familyName: string;
    email: string;
    isEmailVerified: boolean;
    phoneNumber: string;
    isPhoneVerified: boolean;
    isSystemAdmin: boolean;
  }>;
}>;
