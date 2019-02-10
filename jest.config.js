module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['dest'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
}
