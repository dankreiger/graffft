module.exports = {
  coveragePathIgnorePatterns: ['node_modules', '.cjs.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  preset: 'ts-jest',
  roots: ['packages'],
  testEnvironment: 'node',
  testRegex: '(\\.(test))\\.(ts|tsx)$',
};
