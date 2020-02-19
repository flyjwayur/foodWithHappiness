module.exports = {
  roots: ['<rootDir>/src'], // The root of the source code, a token Jest substitutes
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Jest transformations, adds support for TS, using ts-jest
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extended assertions when using React Testing Library
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // Test folder/file pattern
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'] // module file extensions for importing
};
