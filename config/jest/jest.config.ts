

import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover"
    ],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    preset: 'ts-jest',
    rootDir: '../../',
    modulePaths: [
        '<rootDir>src'
    ],
    roots: [
        "<rootDir>"
    ],
    testEnvironment: "jsdom",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/"
    ],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],
    moduleNameMapper: {
      '\\.s?css$': 'identity-obj-proxy',
      '\\.svg$': '<rootDir>/config/jest/mockSvg.tsx'
  },
};

export default config;
