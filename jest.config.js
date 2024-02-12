module.exports = {
  preset: 'react-native',
  // "setupFiles": [
  //   "<rootDir>/setup.js"
  // ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|jsx?)$",
  modulePaths: [
    "<rootDir>"
  ],
  "globals": {
    "ts-jest": {
      "babelConfig": true,
      "tsconfig": "tsconfig.json",
      "diagnostics": {
        "warnOnly": true
      }
    }
  }



};
