module.exports = {
  // testEnvironment: "jest-environment-jsdom",
  preset: "jest-puppeteer",
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transform JavaScript and JSX files using Babel
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
    "use-resize-observer": "use-resize-observer/polyfilled",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // Path to the setup file
};