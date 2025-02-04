module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/e2e/**/*.test.ts'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
