export const roots = ['<rootDir>/tests'];
export const setupFilesAfterEnv = ['./jest.setup.js'];
export const testEnvironment = 'node';
export const transform = {
  '^.+\\.tsx?$': 'ts-jest'
};
export const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$';
