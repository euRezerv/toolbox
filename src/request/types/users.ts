export type GetUserByIdRequestType = {
  params: { id: string };
};

export type CreateOrReplaceUserLocalProfileRequestType = {
  params: { userId?: string };
  body: { givenName: string; familyName: string; email: string; phoneNumberCountryISO: string; phoneNumber: string };
};
