import { AllOrNothing } from "src/common/typescript";
import { StandardResponseType } from "./types";

export type LoginResponseType = StandardResponseType<{
  user: {
    id: string;
    isProfileComplete: boolean;
  } & AllOrNothing<{
    email: string;
    phoneNumber: string;
    givenName: string;
    familyName: string;
  }>;
}>;

export type RegisterResponseType = StandardResponseType<{
  user: {
    id: string;
    email: string;
    phoneNumber: string;
    givenName: string;
    familyName: string;
    createdAt: string;
  };
}>;
