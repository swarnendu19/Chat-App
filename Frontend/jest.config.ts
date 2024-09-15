import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy', // Mock CSS imports
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // Setup testing environment
};

export default config;
