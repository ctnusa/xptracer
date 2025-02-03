// filepath: /Users/tamcn/Data/projects/xptracer/frontend/app/jest.e2e.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/e2e/**/*.test.ts'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};