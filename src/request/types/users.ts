export type GetUserByIdRequestType = {
  id: string;
};

export type CreateOrUpdateUserLocalProfileRequestType = {
  userId?: string;
  givenName: string;
  familyName: string;
  email: string;
  phoneNumberCountryISO: string;
  phoneNumber: string;
};
