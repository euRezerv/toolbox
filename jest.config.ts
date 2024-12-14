import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: [],
  collectCoverage: false,
  resetMocks: true,
};

export default config;
