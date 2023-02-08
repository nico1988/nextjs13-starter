module.exports = {
  moduleDirectories: ['node_modules', __dirname],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};

export {};
