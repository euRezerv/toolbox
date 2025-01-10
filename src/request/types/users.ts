export type GetUserByIdRequestType = {
  path: { id: string };
};

export type CreateOrReplaceUserLocalProfileRequestType = {
  query: { userId?: string };
  body: { givenName: string; familyName: string; email: string; phoneNumberCountryISO: string; phoneNumber: string };
};
