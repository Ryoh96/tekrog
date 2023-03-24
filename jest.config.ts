module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "dotenv/config"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts",
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
    "^@/(.*)$": "<rootDir>/src/$1",
    "next/image": "<rootDir>/__mocks__/Image.tsx",
    "^GoogleAdsense$": "<rootDir>/__mocks__/GoogleAdsense.tsx"
  },
  globals: {
    'process.env.NODE_ENV': 'test',
    'process.env.NEXT_TELEMETRY_DISABLED': '1', // テレメトリを無効化する
  },
}

export {}