export type LoginRequestType = {
  identifier: string;
  password: string;
};

export type RegisterRequestType = {
  givenName: string;
  familyName: string;
  email: string;
  phoneNumberCountryISO: string;
  phoneNumber: string;
  password: string;
};
