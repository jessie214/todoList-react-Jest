module.exports = {
  
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  // "resolutions": { "jest-environment-jsdom": "27.4.6" },
  "transform": {
    // '^.+\\.ts?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  "setupFiles": ['./jest.setup.js'],

  "setupFilesAfterEnv": ['./node_modules/jest-enzyme/lib/index.js',
    '<rootDir>/jest.setup.js'
  ],
  "testEnvironment": "jsdom",
  "snapshotSerializers": ['enzyme-to-json/serializer'],
  
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
 
  // "transform": {
  //   "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  //   "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  //   "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  // },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "modulePaths": [],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
}