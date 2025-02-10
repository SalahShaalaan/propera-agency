module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/app/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^next$': require.resolve('next'),
    '^next/navigation$': require.resolve('next/navigation'),
    '^next/cache$': require.resolve('next/cache')
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest']
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/'
  ]
};