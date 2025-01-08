export type LoginRequestType = {
  body: {
    identifier: string;
    password: string;
  };
};

export type RegisterRequestType = {
  body: {
    givenName: string;
    familyName: string;
    email: string;
    phoneNumberCountryISO: string;
    phoneNumber: string;
    password: string;
  };
};
